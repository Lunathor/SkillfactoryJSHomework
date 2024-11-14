const images = [
    'assets/image1.jpg',
    'assets/image2.jpg',
    'assets/image3.jpg',
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

prevButtonFunc = function() {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateImage();
}

nextButtonFunc = function() {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateImage();
}

prevButton.addEventListener('click', prevButtonFunc);
nextButton.addEventListener('click', nextButtonFunc);

// Инициализация первого изображения
updateImage();