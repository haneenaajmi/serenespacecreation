let index = 0;
const slides = document.getElementById("slides");

function nextImage() {
    index = (index + 1) % 2; // total images = 2
    slides.style.transform = `translateX(-${index * 400}px)`;
}