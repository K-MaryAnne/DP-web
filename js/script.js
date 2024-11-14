// Smooth scroll for navbar links
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Carousel functionality
  let currentIndex = 0;
  const images = document.querySelectorAll('.carousel img');
  
  function showImage(index) {
    images.forEach((img, i) => img.classList.toggle('active', i === index));
  }
  
  document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    showImage(currentIndex);
  });
  
  document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    showImage(currentIndex);
  });
  
  // Initialize carousel
  showImage(currentIndex);
  