if(document.querySelector('.header')){

    const header = document.querySelector('.header');

    function handleScroll() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled'); 
        } else {
            header.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleScroll);
}

if(document.querySelector(".burger-menu")){
    document.addEventListener('DOMContentLoaded', function() {
        const burgerMenu = document.querySelector('.burger-menu');
        const mobileMenu = document.querySelector('.mobile-menu');
        const closeMenu = document.querySelector('.close-menu');
        const menuOverlay = document.querySelector('.menu-overlay');
        const mobileNavLinks = document.querySelectorAll('.mobile-nav .nav-link');
        
        function openMenu() {
            burgerMenu.classList.add('active');
            mobileMenu.classList.add('active');
            menuOverlay.classList.add('active');
            document.body.style.overflow = 'hidden'; 
        }
        
        function closeMenuFunc() {
            burgerMenu.classList.remove('active');
            mobileMenu.classList.remove('active');
            menuOverlay.classList.remove('active');
            document.body.style.overflow = ''; 
        }
        
        burgerMenu.addEventListener('click', openMenu);
        closeMenu.addEventListener('click', closeMenuFunc);
        menuOverlay.addEventListener('click', closeMenuFunc);
        
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', closeMenuFunc);
        });
        
        const header = document.querySelector('.header');
        let lastScrollTop = 0;
        
        window.addEventListener('scroll', function() {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
            
            lastScrollTop = scrollTop;
        });
    });
}
