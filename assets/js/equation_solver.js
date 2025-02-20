function solveEquation(equation) {
    let combinationBox = document.getElementById("equation-combination");
    let explanationBox = document.getElementById("explanation");

    let solutionText = "";
    let explanationText = "";

    switch (equation) {
        case "E=mc^2":
            solutionText = "$$ F_{He} + E = mc^2 $$";
            explanationText = "赫盾場方程修正了質能關係，使其適用於引力場與高能粒子加速問題。<br>"
                            + "HerShield equation modifies the mass-energy relation, making it applicable to gravitational fields and high-energy particle acceleration.";
            break;
        
        case "Schrodinger":
            solutionText = "$$ F_{He} + \\hat{H} \\Psi = E \\Psi $$";
            explanationText = "赫盾場方程與薛丁格方程組合，使得量子態可以考慮大尺度引力效應，解釋了量子糾纏與時空扭曲的關係。<br>"
                            + "HerShield equation combined with the Schrödinger equation allows quantum states to consider large-scale gravitational effects, explaining quantum entanglement and spacetime distortions.";
            break;

        case "Navier-Stokes":
            solutionText = "Navier-Stokes 方程 + 赫盾場修正 | Navier-Stokes Equation + HerShield Correction";
            explanationText = "赫盾場可以修正流體力學在強重力場中的應用，解釋高能粒子流動與星際介質動態。<br>"
                            + "HerShield equation modifies fluid mechanics in strong gravitational fields, explaining high-energy particle flow and interstellar medium dynamics.";
            break;

        case "Quantum Gravity":
            solutionText = "量子引力 + 赫盾場修正 | Quantum Gravity + HerShield Correction";
            explanationText = "赫盾場為量子引力提供了一種穩定場的解釋，可能能夠構建統一場論。<br>"
                            + "HerShield equation provides a stable field interpretation for quantum gravity, potentially leading to a unified field theory.";
            break;

        case "Dark Matter":
            solutionText = "暗物質運動方程 + 赫盾場修正 | Dark Matter Motion Equation + HerShield Correction";
            explanationText = "赫盾場方程可以描述暗物質在星系中的運動方式，提供暗物質與引力場交互的全新模型。<br>"
                            + "HerShield equation describes dark matter motion in galaxies, offering a new model for dark matter and gravitational field interactions.";
            break;

        case "Time Reversal":
            solutionText = "時間反演方程 + 赫盾場修正 | Time Reversal Equation + HerShield Correction";
            explanationText = "赫盾場方程可能解釋時間對稱性與時間反演的不對稱現象，並提供熵減機制的數學證明。<br>"
                            + "HerShield equation may explain time symmetry and asymmetry in time reversal, providing mathematical proof for entropy reduction mechanisms.";
            break;

        default:
            solutionText = "未知方程 | Unknown Equation";
            explanationText = "請選擇一個已知的待解方程 | Please select a known equation to solve.";
            break;
    }

    combinationBox.innerHTML = `<h3>組合方程 | Combined Equation</h3><p>${solutionText}</p>`;
    explanationBox.innerHTML = `<h3>解析 | Explanation</h3><p>${explanationText}</p>`;
}
