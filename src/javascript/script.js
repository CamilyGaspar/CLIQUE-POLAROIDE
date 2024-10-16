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
    let currentSlideIndex = 0;
  
    function updateSlidePosition() {
      const slideWidth = slides[0].getBoundingClientRect().width;
      track.style.transform = `translateX(-${currentSlideIndex * slideWidth}px)`;
    }
  
    function goToNextSlide() {
      currentSlideIndex = (currentSlideIndex + 1) % slides.length;
      updateSlidePosition();
    }
  
    // Inicia o carrossel automático com intervalo de 3 segundos
    setInterval(goToNextSlide, 3000);
  
    // Ajusta o tamanho ao redimensionar a janela
    window.addEventListener('resize', updateSlidePosition);
  });