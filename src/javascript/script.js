$(document).ready(function () {
    $('#mobile_btn').on('click', function () {
      $('#mobile_menu').toggleClass('active');
      $(this).find('i').toggleClass('fa-bars fa-x');
    });
  });
  
  const track = document.querySelector('.carousel-track');
  const slides = Array.from(track.children);
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  
  let currentIndex = 0;
  const slideWidth = slides[0].getBoundingClientRect().width;
  
  // Função para mover o carrossel
  function moveToSlide(index) {
    track.style.transform = `translateX(-${slideWidth * index}px)`;
    currentIndex = index;
  }
  
  // Evento para botão 'Next'
  nextButton.addEventListener('click', () => {
    const nextIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    moveToSlide(nextIndex);
  });
  
  // Evento para botão 'Prev'
  prevButton.addEventListener('click', () => {
    const prevIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    moveToSlide(prevIndex);
  });
  
  // Carrossel automático
  setInterval(() => {
    const nextIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    moveToSlide(nextIndex);
  }, 4000); // Muda a cada 4 segundos