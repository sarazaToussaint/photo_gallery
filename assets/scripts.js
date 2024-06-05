document.addEventListener('DOMContentLoaded', () => {
  const thumbnails = document.querySelectorAll('.thumbnail');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeLightbox = document.querySelector('.close');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');

  let currentIndex = 0;
  const images = Array.from(thumbnails).map((thumbnail) => thumbnail.getAttribute('data-full'));

  // Function to open lightbox and show image
  function showImage(index) {
    currentIndex = index;
    lightboxImg.src = images[currentIndex];
    lightbox.style.display = 'block';
  }

  // Thumbnail click event to open the lightbox
  thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
      showImage(index);
    });
  });

  // Close the lightbox
  closeLightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });

  // Show previous image
  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  });

  // Show next image
  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  });

  // Close the lightbox when clicking outside the image
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = 'none';
    }
  });
});
