const loader = document.querySelector(".loader");
const img = document.querySelector("img");
const randomGifBtn = document.getElementById("randomGifBtn");
const modeSelector = document.getElementById("mode");

function loadGif() {
  addLoadingStyle();
  const url = getApiUrl();
  console.log(url);

  fetch(url)
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
      removeLoadingStyle();
    });
}

function getApiUrl() {
  const mode = modeSelector.value;

  if (mode === "random") {
    return `https://api.giphy.com/v1/gifs/random?api_key=n5AUEykERIPKKOwuk3CDQUaRHE0vzvfY`;
  }

  return `https://api.giphy.com/v1/gifs/translate?api_key=n5AUEykERIPKKOwuk3CDQUaRHE0vzvfY&s=${mode}`;
}

function addLoadingStyle() {
  randomGifBtn.disabled = true;
  randomGifBtn.classList.add("btn-disabled");
  loader.classList.remove("hidden");
  img.style.opacity = "0.3";
}

function removeLoadingStyle() {
  randomGifBtn.disabled = false;
  randomGifBtn.classList.remove("btn-disabled");
  loader.classList.add("hidden");
  img.style.opacity = "1";
}

loadGif();

randomGifBtn.addEventListener("click", loadGif);

modeSelector.addEventListener("change", () => {
  img.src = "";
  loadGif();
});
