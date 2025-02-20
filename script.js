document.addEventListener("DOMContentLoaded", function () {
    const equationLinks = document.querySelectorAll(".eq-link");
    const combinedEquationImg = document.getElementById("combined-equation-img");
    const explanationText = document.getElementById("explanation-text");

    const equationImages = {
        mass_energy: "images/mass_energy_equation.png",
        schrodinger: "images/schrodinger_equation.png",
        navier_stokes: "images/navier_stokes_equation.png",
        quantum_gravity: "images/quantum_gravity_equation.png",
        dark_matter_motion: "images/dark_matter_motion.png",
        time_reversal: "images/time_reversal.png",
    };

    const explanations = {
        mass_energy: "質能關係與赫盾場的影響",
        schrodinger: "赫盾場對量子態的影響",
        navier_stokes: "赫盾場修正流體力學",
        quantum_gravity: "赫盾場對量子引力的影響",
        dark_matter_motion: "赫盾場如何影響暗物質運動",
        time_reversal: "赫盾場對時間反演的影響",
    };

    equationLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const equationKey = this.getAttribute("data-equation");
            combinedEquationImg.src = equationImages[equationKey];
            explanationText.innerText = explanations[equationKey];
        });
    });
});