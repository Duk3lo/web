const gif = document.getElementById("heroGif");

gif.addEventListener("error", () => {
  gif.alt = "No se pudo cargar el GIF";
});