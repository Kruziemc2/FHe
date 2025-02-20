function showEquation(image, title, explanation) {
    document.getElementById('combined-equation').src = "assets/" + image;
    document.getElementById('combined-title').innerText = "組合方程 | Combined Equation";
    document.getElementById('explanation-text').innerText = explanation;
}
