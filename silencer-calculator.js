const readline = require('readline');

class BlowerSilencerCalculator {
    constructor() {
        // Pressure drop coefficient - all Progentex models use c=7.0
        this.COEFFICIENT = 7.0;
        
        // Silencer capacities from Table 3 (Inlet CFM at 14.7 PSIA, 70°F)
        this.INLET_CAPACITIES = {
            1: 30, 1.5: 70, 2: 120, 2.5: 190, 3: 270, 3.5: 370, 4: 480,
            5: 750, 6: 1080, 8: 1920, 10: 3000, 12: 4300, 14: 5900,
            16: 7700, 18: 9700, 20: 12000, 22: 14500, 24: 17300,
            26: 20300, 28: 23500, 30: 27000
        };
        
        // Discharge capacities at different pressures (ACTUAL CFM at that pressure)
        this.DISCHARGE_CAPACITIES = {
            4: {1: 35, 1.5: 80, 2: 140, 2.5: 220, 3: 320, 3.5: 430, 4: 560,
                5: 880, 6: 1260, 8: 2250, 10: 3520, 12: 5070, 14: 6890,
                16: 9000, 18: 11400, 20: 14000, 22: 17000, 24: 20200,
                26: 23800, 28: 27600, 30: 31700},
            6: {1: 40, 1.5: 85, 2: 150, 2.5: 235, 3: 335, 3.5: 455, 4: 600,
                5: 935, 6: 1340, 8: 2390, 10: 3730, 12: 5370, 14: 7310,
                16: 9550, 18: 12100, 20: 14900, 22: 18100, 24: 21500,
                26: 25200, 28: 29300, 30: 33600},
            8: {1: 40, 1.5: 90, 2: 160, 2.5: 245, 3: 355, 3.5: 480, 4: 630,
                5: 985, 6: 1410, 8: 2510, 10: 3930, 12: 5660, 14: 7700,
                16: 10000, 18: 12700, 20: 15700, 22: 19000, 24: 22600,
                26: 26600, 28: 30800, 30: 35400},
            10: {1: 40, 1.5: 95, 2: 165, 2.5: 255, 3: 370, 3.5: 505, 4: 660,
                 5: 1030, 6: 1480, 8: 2630, 10: 4110, 12: 5920, 14: 8060,
                 16: 10500, 18: 13300, 20: 16400, 22: 19900, 24: 23700,
                 26: 27800, 28: 32200, 30: 37000},
            15: {1: 45, 1.5: 105, 2: 185, 2.5: 285, 3: 415, 3.5: 560, 4: 735,
                 5: 1150, 6: 1650, 8: 2940, 10: 4590, 12: 6600, 14: 8990,
                 16: 11800, 18: 14900, 20: 18400, 22: 22200, 24: 26400,
                 26: 31000, 28: 36000, 30: 41300}
        };
        
        // Standard silencer nominal diameters (inches) for each size
        this.SILENCER_DIAMETERS = {
            1: 1.5, 1.5: 2, 2: 2.5, 2.5: 3, 3: 4, 3.5: 4.5, 4: 5,
            5: 6, 6: 7, 8: 9, 10: 11, 12: 13, 14: 15,
            16: 17, 18: 19, 20: 21, 22: 23, 24: 25,
            26: 27, 28: 29, 30: 31
        };
    }
    
    getModelName(size, silencerType = 'inlet') {
        const base = silencerType === 'inlet' ? 'DRSI' : 'DRSL';
        // Add Y suffix for sizes 5" and above
        return size >= 5 ? base + 'Y' : base;
    }
    
    calculateInletPressureDrop(flowCfm, diameterInches) {
        const diameterFt = diameterInches / 12;
        const areaSqFt = Math.PI * Math.pow(diameterFt / 2, 2);
        const velocity = flowCfm / areaSqFt;
        const pressureDrop = Math.pow(velocity / 4005, 2) * this.COEFFICIENT;
        
        return {
            pressureDropInWc: pressureDrop,
            velocityFpm: velocity,
            areaSqFt: areaSqFt,
            diameterInches: diameterInches
        };
    }
    
    calculateDischargePressureDrop(flowCfm, diameterInches, dischargePressurePsig, dischargeTempF) {
        const diameterFt = diameterInches / 12;
        const areaSqFt = Math.PI * Math.pow(diameterFt / 2, 2);
        const velocity = flowCfm / areaSqFt;
        
        const pressurePsia = dischargePressurePsig + 14.7;
        const tempRankine = dischargeTempF + 460;
        
        const pressureDrop = Math.pow(velocity / 4005, 2) * this.COEFFICIENT * 
                           (pressurePsia / 14.7) * (530 / tempRankine);
        
        return {
            pressureDropInWc: pressureDrop,
            velocityFpm: velocity,
            areaSqFt: areaSqFt,
            diameterInches: diameterInches
        };
    }
    
    calculateDischargeFlow(inletFlowCfm, dischargePressurePsig, inletTempF = 70, dischargeTempF = 190) {
        const P1 = 14.7;
        const P2 = dischargePressurePsig + 14.7;
        const T1 = inletTempF + 460;
        const T2 = dischargeTempF + 460;
        
        return inletFlowCfm * (P1 / P2) * (T2 / T1);
    }
    
    getBestSilencerOptions(inletFlowCfm, dischargePressurePsig = 10, dischargeTempF = 190, inletTempF = 70) {
        // Calculate discharge flow
        const dischargeFlowCfm = this.calculateDischargeFlow(
            inletFlowCfm, dischargePressurePsig, inletTempF, dischargeTempF
        );
        
        // Print header
        console.log('\n' + '='.repeat(90));
        console.log('PROGENTEX SILENCER SIZING RECOMMENDATIONS');
        console.log('='.repeat(90));
        console.log(`Inlet Flow: ${inletFlowCfm.toLocaleString()} CFM @ ${inletTempF}°F`);
        console.log(`Discharge: ${dischargePressurePsig} PSIG @ ${dischargeTempF}°F`);
        console.log(`Discharge Flow (ACFM): ${dischargeFlowCfm.toLocaleString('en-US', {maximumFractionDigits: 0})} CFM`);
        console.log('='.repeat(90) + '\n');
        
        // Find inlet silencer options
        const inletOptions = [];
        const sortedInletSizes = Object.keys(this.INLET_CAPACITIES)
            .map(k => parseFloat(k))
            .sort((a, b) => a - b);
        
        for (const size of sortedInletSizes) {
            const capacity = this.INLET_CAPACITIES[size];
            if (capacity >= inletFlowCfm) {
                const utilization = (inletFlowCfm / capacity) * 100;
                const diameter = this.SILENCER_DIAMETERS[size] || size * 1.2;
                const modelName = this.getModelName(size, 'inlet');
                
                const result = this.calculateInletPressureDrop(inletFlowCfm, diameter);
                
                inletOptions.push({
                    size: size,
                    capacity: capacity,
                    utilization: utilization,
                    diameter: diameter,
                    velocity: result.velocityFpm,
                    pressureDrop: result.pressureDropInWc,
                    model: modelName
                });
                
                if (inletOptions.length >= 3) break;
            }
        }
        
        // Find discharge silencer options
        const availablePressures = Object.keys(this.DISCHARGE_CAPACITIES).map(k => parseFloat(k)).sort((a, b) => a - b);
        const pressureKey = availablePressures.reduce((prev, curr) => 
            Math.abs(curr - dischargePressurePsig) < Math.abs(prev - dischargePressurePsig) ? curr : prev
        );
        
        const dischargeOptions = [];
        const dischargeCapacities = this.DISCHARGE_CAPACITIES[pressureKey];
        const sortedDischargeSizes = Object.keys(dischargeCapacities)
            .map(k => parseFloat(k))
            .sort((a, b) => a - b);
        
        for (const size of sortedDischargeSizes) {
            const capacity = dischargeCapacities[size];
            if (capacity >= dischargeFlowCfm) {
                const utilization = (dischargeFlowCfm / capacity) * 100;
                const diameter = this.SILENCER_DIAMETERS[size] || size * 1.2;
                const modelName = this.getModelName(size, 'discharge');
                
                const result = this.calculateDischargePressureDrop(
                    dischargeFlowCfm, diameter, dischargePressurePsig, dischargeTempF
                );
                
                dischargeOptions.push({
                    size: size,
                    capacity: capacity,
                    utilization: utilization,
                    diameter: diameter,
                    velocity: result.velocityFpm,
                    pressureDrop: result.pressureDropInWc,
                    model: modelName,
                    pressureRating: pressureKey
                });
                
                if (dischargeOptions.length >= 3) break;
            }
        }
        
        // Display inlet results
        console.log('┌' + '─'.repeat(88) + '┐');
        console.log('│' + ' '.repeat(30) + 'INLET SILENCER OPTIONS' + ' '.repeat(36) + '│');
        console.log('├' + '─'.repeat(88) + '┤');
        
        if (inletOptions.length === 0) {
            console.log('│  ⚠️  No suitable silencer size found!' + ' '.repeat(50) + '│');
        } else {
            inletOptions.slice(0, 2).forEach((option, index) => {
                const velocityStatus = option.velocity <= 3300 ? '✓' : '⚠️ HIGH';
                const i = index + 1;
                
                console.log(`│ OPTION ${i}: Size ${option.size}" (${option.model})` + ' '.repeat(88 - (`OPTION ${i}: Size ${option.size}" (${option.model})`).length - 2) + '│');
                console.log(`│   Rated Capacity: ${option.capacity.toLocaleString()} CFM | Utilization: ${option.utilization.toFixed(1)}%` + ' '.repeat(88 - (`   Rated Capacity: ${option.capacity.toLocaleString()} CFM | Utilization: ${option.utilization.toFixed(1)}%`).length - 2) + '│');
                console.log(`│   Diameter: ${option.diameter.toFixed(1)}" | Velocity: ${Math.round(option.velocity).toLocaleString()} ft/min ${velocityStatus}` + ' '.repeat(88 - (`   Diameter: ${option.diameter.toFixed(1)}" | Velocity: ${Math.round(option.velocity).toLocaleString()} ft/min ${velocityStatus}`).length - 2) + '│');
                console.log(`│   Pressure Drop: ${option.pressureDrop.toFixed(4)} in w.c.` + ' '.repeat(88 - (`   Pressure Drop: ${option.pressureDrop.toFixed(4)} in w.c.`).length - 2) + '│');
                
                if (i < Math.min(2, inletOptions.length)) {
                    console.log('│' + ' '.repeat(88) + '│');
                }
            });
        }
        
        console.log('└' + '─'.repeat(88) + '┘\n');
        
        // Display discharge results
        console.log('┌' + '─'.repeat(88) + '┐');
        console.log('│' + ' '.repeat(28) + 'DISCHARGE SILENCER OPTIONS' + ' '.repeat(34) + '│');
        console.log('├' + '─'.repeat(88) + '┤');
        
        if (dischargeOptions.length === 0) {
            console.log('│  ⚠️  No suitable silencer size found!' + ' '.repeat(50) + '│');
        } else {
            dischargeOptions.slice(0, 2).forEach((option, index) => {
                const velocityStatus = option.velocity <= 2700 ? '✓' : '⚠️ HIGH';
                const i = index + 1;
                
                console.log(`│ OPTION ${i}: Size ${option.size}" (${option.model}) @ ${option.pressureRating} PSIG` + ' '.repeat(88 - (`OPTION ${i}: Size ${option.size}" (${option.model}) @ ${option.pressureRating} PSIG`).length - 2) + '│');
                console.log(`│   Rated Capacity: ${option.capacity.toLocaleString()} CFM | Utilization: ${option.utilization.toFixed(1)}%` + ' '.repeat(88 - (`   Rated Capacity: ${option.capacity.toLocaleString()} CFM | Utilization: ${option.utilization.toFixed(1)}%`).length - 2) + '│');
                console.log(`│   Diameter: ${option.diameter.toFixed(1)}" | Velocity: ${Math.round(option.velocity).toLocaleString()} ft/min ${velocityStatus}` + ' '.repeat(88 - (`   Diameter: ${option.diameter.toFixed(1)}" | Velocity: ${Math.round(option.velocity).toLocaleString()} ft/min ${velocityStatus}`).length - 2) + '│');
                console.log(`│   Pressure Drop: ${option.pressureDrop.toFixed(4)} in w.c.` + ' '.repeat(88 - (`   Pressure Drop: ${option.pressureDrop.toFixed(4)} in w.c.`).length - 2) + '│');
                
                if (i < Math.min(2, dischargeOptions.length)) {
                    console.log('│' + ' '.repeat(88) + '│');
                }
            });
        }
        
        console.log('└' + '─'.repeat(88) + '┘\n');
        
        // Summary recommendation
        if (inletOptions.length > 0 && dischargeOptions.length > 0) {
            const totalPdOpt1 = inletOptions[0].pressureDrop + dischargeOptions[0].pressureDrop;
            console.log('💡 RECOMMENDATION:');
            console.log(`   Option 1 (Most Efficient): Inlet ${inletOptions[0].model}-${inletOptions[0].size}", Discharge ${dischargeOptions[0].model}-${dischargeOptions[0].size}"`);
            console.log(`   Total System Pressure Drop: ${totalPdOpt1.toFixed(4)} in w.c.`);
            
            if (inletOptions.length > 1 && dischargeOptions.length > 1) {
                const totalPdOpt2 = inletOptions[1].pressureDrop + dischargeOptions[1].pressureDrop;
                console.log(`\n   Option 2 (Conservative): Inlet ${inletOptions[1].model}-${inletOptions[1].size}", Discharge ${dischargeOptions[1].model}-${dischargeOptions[1].size}"`);
                console.log(`   Total System Pressure Drop: ${totalPdOpt2.toFixed(4)} in w.c.`);
            }
        }
        
        console.log('\n' + '='.repeat(90) + '\n');
        
        return {
            inletOptions: inletOptions.slice(0, 2),
            dischargeOptions: dischargeOptions.slice(0, 2),
            dischargeFlowCfm: dischargeFlowCfm
        };
    }
}

// ========== INTERACTIVE MODE ==========

function main() {
    const calc = new BlowerSilencerCalculator();
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    console.log('\n' + '='.repeat(90));
    console.log(' '.repeat(25) + 'PROGENTEX SILENCER CALCULATOR');
    console.log('='.repeat(90));
    
    function askQuestion(query) {
        return new Promise(resolve => rl.question(query, resolve));
    }
    
    async function calculate() {
        console.log('\n' + '-'.repeat(90));
        
        try {
            const inletFlow = parseFloat(await askQuestion('Enter Inlet Flow Rate (CFM): '));
            const dischargePressure = parseFloat(await askQuestion('Enter Discharge Pressure (PSIG) [default 10]: ') || '10');
            const dischargeTemp = parseFloat(await askQuestion('Enter Discharge Temperature (°F) [default 190]: ') || '190');
            const inletTemp = parseFloat(await askQuestion('Enter Inlet Temperature (°F) [default 70]: ') || '70');
            
            if (isNaN(inletFlow) || isNaN(dischargePressure) || isNaN(dischargeTemp) || isNaN(inletTemp)) {
                console.log('⚠️  Please enter valid numbers.');
                return calculate();
            }
            
            calc.getBestSilencerOptions(inletFlow, dischargePressure, dischargeTemp, inletTemp);
            
            const continueChoice = await askQuestion('Calculate another? (y/n): ');
            
            if (continueChoice.toLowerCase() === 'y') {
                return calculate();
            } else {
                console.log('\nThank you for using the Progentex Silencer Calculator!');
                rl.close();
            }
        } catch (error) {
            console.log('Error:', error.message);
            rl.close();
        }
    }
    
    calculate();
}

// Run the interactive calculator
if (require.main === module) {
    main();
}

// Export for use as a module
module.exports = BlowerSilencerCalculator;