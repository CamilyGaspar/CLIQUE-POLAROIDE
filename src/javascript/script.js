$(document).ready(function () {
    $('#mobile_btn').on('click', function () {
      $('#mobile_menu').toggleClass('active');
      $(this).find('i').toggleClass('fa-bars fa-x');
    });
    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        let activeSectionIndex = 0;

        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1');
        }

        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop+ section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        })

        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });

    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('.sobre', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
});a
  
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