const img = document.querySelector("img");
const randomGifBtn = document.getElementById("randomGifBtn");
const loader = document.querySelector(".loader");

function loadGif() {
  randomGifBtn.disabled = true;
  randomGifBtn.classList.add("btn-disabled");
  loader.classList.remove("hidden");
  img.style.opacity = "0.3";

  fetch(
    "https://api.giphy.com/v1/gifs/translate?api_key=n5AUEykERIPKKOwuk3CDQUaRHE0vzvfY&s=vaporwave",
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      img.src = response.data.images.original.url;
    })
    .catch(function (error) {
      console.error("Erreur :", error);
    })
    .finally(function () {
      randomGifBtn.disabled = false;
      randomGifBtn.classList.remove("btn-disabled");
      loader.classList.add("hidden");
      img.style.opacity = "1";
    });
}

loadGif();

randomGifBtn.addEventListener("click", loadGif);
