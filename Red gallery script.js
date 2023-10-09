const thumbnails = document.querySelectorAll('.thumbnail');
const imageViewer = document.querySelector('.image-viewer');
const fullImage = document.querySelector('.full-image');
const closeButton = document.querySelector('.close-button');

function showImage(imageSrc) {
  fullImage.src = imageSrc;
  imageViewer.style.opacity = '1';
  imageViewer.style.pointerEvents = 'auto';
}

function closeViewer() {
  imageViewer.style.opacity = '0';
  imageViewer.style.pointerEvents = 'none';
}

thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', () => {
    const imageSrc = thumbnail.src;
    showImage(imageSrc);
  });

  thumbnail.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      const imageSrc = thumbnail.src;
      showImage(imageSrc);
    }
  });
});

document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    closeViewer();
  }
});

closeButton.addEventListener("click", closeViewer)