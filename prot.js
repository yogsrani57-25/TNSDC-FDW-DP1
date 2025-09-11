const textArray = ["Protfolio"];
let index = 0;
let charIndex = 0;
const typedText = document.getElementById("typed-text");
const cursor = document.querySelector(".cursor");

function type() {
    if (charIndex < textArray[index].length) {
        typedText.textContent += textArray[index].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 1500);
    }
}

function erase() {
    if (charIndex > 0) {
        typedText.textContent = textArray[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
    } else {
        index = (index + 1) % textArray.length;
        setTimeout(type, 1000);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, 500);
});

function openModal(title, body) {
    document.getElementById("modal").classList.remove("hidden");
    document.getElementById("modal-title").textContent = title;
    document.getElementById("modal-body").textContent = body;
}

document.getElementById("modal-close").onclick = () => {
    document.getElementById("modal").classList.add("hidden");
};

document.getElementById("theme-toggle").onclick = () => {
    document.body.classList.toggle("dark-mode");
};