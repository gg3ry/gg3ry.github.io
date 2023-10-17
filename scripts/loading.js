setTimeout(() => {
    window.location.href = "index.html";
}, 5000);

document.addEventListener("DOMContentLoaded", function () {
let loader = document.getElementById("loader");
let width = 0;
let totalWidth = 75;
let interval = 45;
let totalSeconds = 4.5;
let totalIterations = totalSeconds * 1000 / interval;

let progressInterval = setInterval(function () {
if (width >= totalWidth) {
    clearInterval(progressInterval);
    loader.classList.add("green");
} else {
    width += totalWidth / totalIterations;
    loader.style.width = width + "vw";
    loader.innerHTML = Math.round((width / totalWidth) * 100) + "%";
}
}, interval);
});
