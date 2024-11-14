const images = [
    'assets/image1.jpg',
    'assets/image2.jpg',
    // Добавьте столько изображений, сколько необходимо
];

let currentIndex = 0;

const sliderImage = document.getElementById('sliderImage');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

function updateImage() {
    sliderImage.src = images[currentIndex];
    sliderImage.style.opacity = 0;

    setTimeout(() => {
        sliderImage.style.opacity = 1;
    }, 50);
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateImage();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateImage();
});

// Инициализация первого изображения
updateImage();