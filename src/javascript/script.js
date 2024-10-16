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
});

document.querySelectorAll('.carousel-container').forEach((carousel) => {
    const track = carousel.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextButton = carousel.querySelector('.next');
    const prevButton = carousel.querySelector('.prev');
    let currentSlideIndex = 0;
  
    function updateSlidePosition() {
      const slideWidth = slides[0].getBoundingClientRect().width;
      track.style.transform = `translateX(-${currentSlideIndex * slideWidth}px)`;
    }
  
    function goToNextSlide() {
      currentSlideIndex = (currentSlideIndex + 1) % slides.length;
      updateSlidePosition();
    }
  
    function goToPrevSlide() {
      currentSlideIndex =
        (currentSlideIndex - 1 + slides.length) % slides.length;
      updateSlidePosition();
    }
  
    // Configura os botões de navegação
    nextButton.addEventListener('click', goToNextSlide);
    prevButton.addEventListener('click', goToPrevSlide);
  
    // Carrossel automático com intervalo de 3 segundos
    const autoSlide = setInterval(goToNextSlide, 3000);
  
    // Pausa o carrossel automático ao interagir com os botões
    nextButton.addEventListener('mouseenter', () => clearInterval(autoSlide));
    prevButton.addEventListener('mouseenter', () => clearInterval(autoSlide));
  
    // Ajusta o slide em caso de redimensionamento da janela
    window.addEventListener('resize', updateSlidePosition);
  });
  