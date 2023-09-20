let currentImageIndex = 0;
const galleryImages = document.querySelectorAll('.image-gallery img');

function showImage(index) {
    for (let i = 0; i < galleryImages.length; i++) {
        if (i === index) {
            galleryImages[i].style.display = 'block';
        } else {
            galleryImages[i].style.display = 'none';
        }
    }
}

function shiftLeft() {
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    showImage(currentImageIndex);
}

function shiftRight() {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    showImage(currentImageIndex);
}

showImage(currentImageIndex);