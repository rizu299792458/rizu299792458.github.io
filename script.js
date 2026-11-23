// HTMLの要素を取得
const images = document.querySelectorAll(".work-image");
const modal = document.getElementById("image-modal");
const modalImage = document.getElementById("modal-image");
const closeButton = document.getElementById("close-modal");

// 画像をクリックしたとき
images.forEach(function(image) {
  image.addEventListener("click", function() {

    modal.style.display = "flex";
    modalImage.src = image.src;

  });
});

// 閉じるボタンをクリックしたとき
closeButton.addEventListener("click", function() {
  modal.style.display = "none";
});

// 背景をクリックしたときも閉じる
modal.addEventListener("click", function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
