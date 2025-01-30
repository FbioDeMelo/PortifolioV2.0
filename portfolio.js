    function toggleMenu() {
        const navLinks = document.getElementById('navLinks');
        const hamburger = document.getElementById('hamburger');

        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    }
        let slideIndex = 0;

        function mudarSlide(n) {
            showSlides(slideIndex += n);
        }

        function showSlides(n) {
            const slides = document.querySelectorAll('.carrossel-slide');
            if (n >= slides.length) {
                slideIndex = 0;
            } else if (n < 0) {
                slideIndex = slides.length - 1;
            }

            slides.forEach(slide => slide.style.display = "none");
            slides[slideIndex].style.display = "block";
        }

        showSlides(slideIndex); 
