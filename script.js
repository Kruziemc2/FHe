function showEquation(image, title, explanation) {
    let imgElement = document.getElementById('combined-equation');
    let titleElement = document.getElementById('combined-title');
    let explanationElement = document.getElementById('explanation-text');

    // 檢查圖片是否存在
    let imagePath = "assets/" + image;
    fetch(imagePath)
        .then(response => {
            if (!response.ok) {
                throw new Error("圖片未找到");
            }
            imgElement.src = imagePath;
            titleElement.innerText = "組合方程 | Combined Equation";
            explanationElement.innerText = explanation;
        })
        .catch(error => {
            console.error("圖片載入錯誤:", error);
            imgElement.src = "";
        });
}
