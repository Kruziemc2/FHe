// 公式對應圖片
const equationImages = {
    "mass_energy": "png/mass_energy.png",
    "schrodinger": "png/schrodinger.png",
    "navier_stokes": "png/navier_stokes.png",
    "quantum_gravity": "png/quantum_gravity.png",
    "dark_matter": "png/dark_matter.png",
    "time_reversal": "png/time_reversal.png"
};

// 公式對應解析內容
const equationExplanations = {
    "mass_energy": "質能方程描述了質量與能量的等價性...",
    "schrodinger": "薛丁格方程描述了量子粒子的波動性...",
    "navier_stokes": "Navier-Stokes 方程描述了流體力學中的運動...",
    "quantum_gravity": "量子引力方程試圖統一量子力學與廣義相對論...",
    "dark_matter": "暗物質運動方程嘗試解釋暗物質的行為...",
    "time_reversal": "時間反演方程探討時間對稱性..."
};

// 觸發組合方程顯示
function combineEquation(eqKey) {
    document.getElementById("combined-equation").innerHTML = `<img src="${equationImages[eqKey]}" alt="Equation">`;
    document.getElementById("equation-explanation").innerHTML = `<p>${equationExplanations[eqKey]}</p>`;
}
