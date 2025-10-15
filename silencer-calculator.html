<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Progentex Silencer Calculator</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 20px;
        }
        
        .container {
            max-width: 1000px;
            margin: 0 auto;
            background: white;
            border-radius: 10px;
            box-shadow: 0 10px 40px rgba(0,0,0,0.2);
            overflow: hidden;
        }
        
        .header {
            background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
            color: white;
            padding: 30px;
            text-align: center;
        }
        
        .header h1 {
            font-size: 28px;
            margin-bottom: 10px;
        }
        
        .header p {
            font-size: 14px;
            opacity: 0.9;
        }
        
        .input-section {
            padding: 30px;
            background: #f8f9fa;
        }
        
        .input-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 20px;
            margin-bottom: 20px;
        }
        
        .input-group {
            display: flex;
            flex-direction: column;
        }
        
        .input-group label {
            font-weight: 600;
            margin-bottom: 8px;
            color: #333;
            font-size: 14px;
        }
        
        .input-group input {
            padding: 12px;
            border: 2px solid #ddd;
            border-radius: 6px;
            font-size: 16px;
            transition: border-color 0.3s;
        }
        
        .input-group input:focus {
            outline: none;
            border-color: #667eea;
        }
        
        .input-group small {
            margin-top: 5px;
            color: #666;
            font-size: 12px;
        }
        
        .calculate-btn {
            width: 100%;
            padding: 15px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            border-radius: 6px;
            font-size: 18px;
            font-weight: 600;
            cursor: pointer;
            transition: transform 0.2s;
        }
        
        .calculate-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
        }
        
        .calculate-btn:active {
            transform: translateY(0);
        }
        
        .results-section {
            padding: 30px;
            display: none;
        }
        
        .results-section.show {
            display: block;
        }
        
        .results-header {
            background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
            color: white;
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 30px;
        }
        
        .results-header h2 {
            font-size: 22px;
            margin-bottom: 10px;
        }
        
        .results-header .flow-info {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 15px;
            margin-top: 15px;
        }
        
        .flow-info-item {
            background: rgba(255,255,255,0.2);
            padding: 10px;
            border-radius: 5px;
        }
        
        .flow-info-item strong {
            display: block;
            font-size: 12px;
            margin-bottom: 5px;
            opacity: 0.9;
        }
        
        .flow-info-item span {
            font-size: 18px;
            font-weight: 600;
        }
        
        .silencer-options {
            margin-bottom: 30px;
        }
        
        .silencer-type-title {
            font-size: 20px;
            font-weight: 700;
            color: #333;
            margin-bottom: 15px;
            padding-bottom: 10px;
            border-bottom: 3px solid #667eea;
        }
        
        .option-cards {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 20px;
        }
        
        .option-card {
            background: white;
            border: 2px solid #e0e0e0;
            border-radius: 8px;
            padding: 20px;
            transition: all 0.3s;
        }
        
        .option-card:hover {
            border-color: #667eea;
            box-shadow: 0 5px 20px rgba(102, 126, 234, 0.2);
            transform: translateY(-5px);
        }
        
        .option-card.recommended {
            border-color: #4CAF50;
            background: #f1f8f4;
        }
        
        .option-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 15px;
            padding-bottom: 10px;
            border-bottom: 2px solid #f0f0f0;
        }
        
        .option-number {
            font-size: 18px;
            font-weight: 700;
            color: #667eea;
        }
        
        .option-card.recommended .option-number {
            color: #4CAF50;
        }
        
        .badge {
            background: #4CAF50;
            color: white;
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 11px;
            font-weight: 600;
        }
        
        .model-name {
            font-size: 20px;
            font-weight: 700;
            color: #333;
            margin-bottom: 15px;
        }
        
        .spec-row {
            display: flex;
            justify-content: space-between;
            padding: 8px 0;
            border-bottom: 1px solid #f0f0f0;
        }
        
        .spec-row:last-child {
            border-bottom: none;
        }
        
        .spec-label {
            color: #666;
            font-size: 13px;
        }
        
        .spec-value {
            font-weight: 600;
            color: #333;
            font-size: 14px;
        }
        
        .spec-value.warning {
            color: #f5576c;
        }
        
        .spec-value.good {
            color: #4CAF50;
        }
        
        .pressure-drop-highlight {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 12px;
            border-radius: 6px;
            margin-top: 10px;
            text-align: center;
        }
        
        .pressure-drop-highlight .label {
            font-size: 11px;
            opacity: 0.9;
            display: block;
            margin-bottom: 5px;
        }
        
        .pressure-drop-highlight .value {
            font-size: 20px;
            font-weight: 700;
        }
        
        .recommendation {
            background: linear-gradient(135deg, #4CAF50 0%, #45a049 100%);
            color: white;
            padding: 25px;
            border-radius: 8px;
            margin-top: 30px;
        }
        
        .recommendation h3 {
            font-size: 20px;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .recommendation-item {
            background: rgba(255,255,255,0.2);
            padding: 15px;
            border-radius: 6px;
            margin-bottom: 10px;
        }
        
        .recommendation-item:last-child {
            margin-bottom: 0;
        }
        
        .recommendation-item strong {
            display: block;
            font-size: 14px;
            margin-bottom: 5px;
        }
        
        .recommendation-item .silencer-combo {
            font-size: 16px;
            font-weight: 600;
        }
        
        .recommendation-item .total-pd {
            margin-top: 5px;
            font-size: 14px;
        }
        
        @media (max-width: 768px) {
            .input-grid {
                grid-template-columns: 1fr;
            }
            
            .option-cards {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🔊 Progentex Silencer Calculator</h1>
            <p>Calculate pressure drops and get silencer recommendations</p>
        </div>
        
        <div class="input-section">
            <div class="input-grid">
                <div class="input-group">
                    <label for="inletFlow">Inlet Flow Rate (CFM) *</label>
                    <input type="number" id="inletFlow" placeholder="e.g., 5000" required>
                </div>
                
                <div class="input-group">
                    <label for="dischargePressure">Discharge Pressure (PSIG)</label>
                    <input type="number" id="dischargePressure" placeholder="Default: 10" value="10">
                    <small>Typical range: 4-15 PSIG</small>
                </div>
                
                <div class="input-group">
                    <label for="dischargeTemp">Discharge Temperature (°F)</label>
                    <input type="number" id="dischargeTemp" placeholder="Default: 190" value="190">
                    <small>Typical range: 140-240°F</small>
                </div>
                
                <div class="input-group">
                    <label for="inletTemp">Inlet Temperature (°F)</label>
                    <input type="number" id="inletTemp" placeholder="Default: 70" value="70">
                    <small>Usually ambient: 70°F</small>
                </div>
            </div>
            
            <button class="calculate-btn" onclick="calculate()">Calculate Silencer Sizes</button>
        </div>
        
        <div class="results-section" id="resultsSection">
            <!-- Results will be inserted here -->
        </div>
    </div>

    <script>
        class BlowerSilencerCalculator {
            constructor() {
                this.COEFFICIENT = 7.0;
                
                this.INLET_CAPACITIES = {
                    1: 30, 1.5: 70, 2: 120, 2.5: 190, 3: 270, 3.5: 370, 4: 480,
                    5: 750, 6: 1080, 8: 1920, 10: 3000, 12: 4300, 14: 5900,
                    16: 7700, 18: 9700, 20: 12000, 22: 14500, 24: 17300,
                    26: 20300, 28: 23500, 30: 27000
                };
                
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
                
                this.SILENCER_DIAMETERS = {
                    1: 1.5, 1.5: 2, 2: 2.5, 2.5: 3, 3: 4, 3.5: 4.5, 4: 5,
                    5: 6, 6: 7, 8: 9, 10: 11, 12: 13, 14: 15,
                    16: 17, 18: 19, 20: 21, 22: 23, 24: 25,
                    26: 27, 28: 29, 30: 31
                };
            }
            
            getModelName(size, silencerType = 'inlet') {
                const base = silencerType === 'inlet' ? 'DRSI' : 'DRSL';
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
                const dischargeFlowCfm = this.calculateDischargeFlow(
                    inletFlowCfm, dischargePressurePsig, inletTempF, dischargeTempF
                );
                
                // Find inlet options
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
                
                // Find discharge options
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
                
                return {
                    inletOptions: inletOptions.slice(0, 2),
                    dischargeOptions: dischargeOptions.slice(0, 2),
                    dischargeFlowCfm: dischargeFlowCfm,
                    inletFlowCfm: inletFlowCfm,
                    dischargePressurePsig: dischargePressurePsig,
                    dischargeTempF: dischargeTempF,
                    inletTempF: inletTempF
                };
            }
        }
        
        const calc = new BlowerSilencerCalculator();
        
        function calculate() {
            const inletFlow = parseFloat(document.getElementById('inletFlow').value);
            const dischargePressure = parseFloat(document.getElementById('dischargePressure').value) || 10;
            const dischargeTemp = parseFloat(document.getElementById('dischargeTemp').value) || 190;
            const inletTemp = parseFloat(document.getElementById('inletTemp').value) || 70;
            
            if (!inletFlow || isNaN(inletFlow)) {
                alert('Please enter a valid inlet flow rate');
                return;
            }
            
            const results = calc.getBestSilencerOptions(inletFlow, dischargePressure, dischargeTemp, inletTemp);
            displayResults(results);
        }
        
        function displayResults(results) {
            const resultsSection = document.getElementById('resultsSection');
            
            let html = `
                <div class="results-header">
                    <h2>Calculation Results</h2>
                    <div class="flow-info">
                        <div class="flow-info-item">
                            <strong>Inlet Flow</strong>
                            <span>${results.inletFlowCfm.toLocaleString()} CFM</span>
                        </div>
                        <div class="flow-info-item">
                            <strong>Discharge Flow (ACFM)</strong>
                            <span>${Math.round(results.dischargeFlowCfm).toLocaleString()} CFM</span>
                        </div>
                        <div class="flow-info-item">
                            <strong>Discharge Pressure</strong>
                            <span>${results.dischargePressurePsig} PSIG</span>
                        </div>
                        <div class="flow-info-item">
                            <strong>Discharge Temp</strong>
                            <span>${results.dischargeTempF}°F</span>
                        </div>
                    </div>
                </div>
            `;
            
            // Inlet Silencers
            html += '<div class="silencer-options">';
            html += '<h3 class="silencer-type-title">Inlet Silencer Options</h3>';
            html += '<div class="option-cards">';
            
            results.inletOptions.forEach((option, index) => {
                const velocityStatus = option.velocity <= 3300 ? 'good' : 'warning';
                const velocityIcon = option.velocity <= 3300 ? '✓' : '⚠️';
                const isRecommended = index === 0;
                
                html += `
                    <div class="option-card ${isRecommended ? 'recommended' : ''}">
                        <div class="option-header">
                            <span class="option-number">Option ${index + 1}</span>
                            ${isRecommended ? '<span class="badge">RECOMMENDED</span>' : ''}
                        </div>
                        <div class="model-name">${option.model}-${option.size}"</div>
                        <div class="spec-row">
                            <span class="spec-label">Rated Capacity</span>
                            <span class="spec-value">${option.capacity.toLocaleString()} CFM</span>
                        </div>
                        <div class="spec-row">
                            <span class="spec-label">Utilization</span>
                            <span class="spec-value">${option.utilization.toFixed(1)}%</span>
                        </div>
                        <div class="spec-row">
                            <span class="spec-label">Diameter</span>
                            <span class="spec-value">${option.diameter.toFixed(1)}"</span>
                        </div>
                        <div class="spec-row">
                            <span class="spec-label">Velocity</span>
                            <span class="spec-value ${velocityStatus}">${Math.round(option.velocity).toLocaleString()} ft/min ${velocityIcon}</span>
                        </div>
                        <div class="pressure-drop-highlight">
                            <span class="label">Pressure Drop</span>
                            <span class="value">${option.pressureDrop.toFixed(4)} in w.c.</span>
                        </div>
                    </div>
                `;
            });
            
            html += '</div></div>';
            
            // Discharge Silencers
            html += '<div class="silencer-options">';
            html += '<h3 class="silencer-type-title">Discharge Silencer Options</h3>';
            html += '<div class="option-cards">';
            
            results.dischargeOptions.forEach((option, index) => {
                const velocityStatus = option.velocity <= 2700 ? 'good' : 'warning';
                const velocityIcon = option.velocity <= 2700 ? '✓' : '⚠️';
                const isRecommended = index === 0;
                
                html += `
                    <div class="option-card ${isRecommended ? 'recommended' : ''}">
                        <div class="option-header">
                            <span class="option-number">Option ${index + 1}</span>
                            ${isRecommended ? '<span class="badge">RECOMMENDED</span>' : ''}
                        </div>
                        <div class="model-name">${option.model}-${option.size}" @ ${option.pressureRating} PSIG</div>
                        <div class="spec-row">
                            <span class="spec-label">Rated Capacity</span>
                            <span class="spec-value">${option.capacity.toLocaleString()} CFM</span>
                        </div>
                        <div class="spec-row">
                            <span class="spec-label">Utilization</span>
                            <span class="spec-value">${option.utilization.toFixed(1)}%</span>
                        </div>
                        <div class="spec-row">
                            <span class="spec-label">Diameter</span>
                            <span class="spec-value">${option.diameter.toFixed(1)}"</span>
                        </div>
                        <div class="spec-row">
                            <span class="spec-label">Velocity</span>
                            <span class="spec-value ${velocityStatus}">${Math.round(option.velocity).toLocaleString()} ft/min ${velocityIcon}</span>
                        </div>
                        <div class="pressure-drop-highlight">
                            <span class="label">Pressure Drop</span>
                            <span class="value">${option.pressureDrop.toFixed(4)} in w.c.</span>
                        </div>
                    </div>
                `;
            });
            
            html += '</div></div>';
            
            // Recommendations
            if (results.inletOptions.length > 0 && results.dischargeOptions.length > 0) {
                html += '<div class="recommendation">';
                html += '<h3>💡 System Recommendations</h3>';
                
                const totalPd1 = results.inletOptions[0].pressureDrop + results.dischargeOptions[0].pressureDrop;
                html += `
                    <div class="recommendation-item">
                        <strong>Option 1 - Most Efficient:</strong>
                        <div class="silencer-combo">
                            Inlet: ${results.inletOptions[0].model}-${results.inletOptions[0].size}" • 
                            Discharge: ${results.dischargeOptions[0].model}-${results.dischargeOptions[0].size}"
                        </div>
                        <div class="total-pd">Total System Pressure Drop: ${totalPd1.toFixed(4)} in w.c.</div>
                    </div>
                `;
                
                if (results.inletOptions.length > 1 && results.dischargeOptions.length > 1) {
                    const totalPd2 = results.inletOptions[1].pressureDrop + results.dischargeOptions[1].pressureDrop;
                    html += `
                        <div class="recommendation-item">
                            <strong>Option 2 - Conservative:</strong>
                            <div class="silencer-combo">
                                Inlet: ${results.inletOptions[1].model}-${results.inletOptions[1].size}" • 
                                Discharge: ${results.dischargeOptions[1].model}-${results.dischargeOptions[1].size}"
                            </div>
                            <div class="total-pd">Total System Pressure Drop: ${totalPd2.toFixed(4)} in w.c.</div>
                        </div>
                    `;
                }
                
                html += '</div>';
            }
            
            resultsSection.innerHTML = html;
            resultsSection.classList.add('show');
            resultsSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
        
        // Allow Enter key to submit
        document.addEventListener('DOMContentLoaded', function() {
            document.getElementById('inletFlow').addEventListener('keypress', function(e) {
                if (e.key === 'Enter') calculate();
            });
        });
    </script>
</body>
</html>
