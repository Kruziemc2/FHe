document.addEventListener("DOMContentLoaded", function () {
    function changeEquation(equationFile) {
        document.getElementById("equationDisplay").innerHTML =
            `<img src="assets/${equationFile}" alt="Equation" width="300px">`;
    }
    function updateEquation(equationId) {
        const equationImages = [
            "assets/equations/equation_fixed_1.png",
            "assets/equations/equation_fixed_2.png",
            "assets/equations/equation_fixed_3.png",
            "assets/equations/equation_fixed_4.png",
            "assets/equations/equation_fixed_5.png",
            "assets/equations/equation_fixed_6.png"
        ];

        const equationDescriptions = [
            "赫盾場與質能方程的組合解釋...",
            "赫盾場與薛丁格方程的組合解釋...",
            "赫盾場與Navier-Stokes方程的組合解釋...",
            "赫盾場與量子引力方程的組合解釋...",
            "赫盾場與暗物質運動方程的組合解釋...",
            "赫盾場與時間反演方程的組合解釋..."
        ];

        document.getElementById("math-equation-img").src = equationImages[equationId - 1];
        document.getElementById("equation-explanation").innerText = equationDescriptions[equationId - 1];
    }

    window.updateEquation = updateEquation;
});
