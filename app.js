let lastScrollTop = 0;
let lastScrollDirection = '';

function scrollDirection() {
    let scrolledTop = document.documentElement.scrollTop; 

    if (scrolledTop > lastScrollTop) {
        lastScrollDirection = 'down';
    } else {
        lastScrollDirection = 'up';
    }

    lastScrollTop = scrolledTop;

    console.log(lastScrollTop);
}

window.addEventListener('scroll', function() {
    // Check scroll direction
    scrollDirection();

    // If at the top of the page
    if (lastScrollTop == 0) {
        document.querySelector('.header').classList.add('active');
    }
    // If scrolling down
    else if (lastScrollDirection === 'down') {
        document.querySelector('.header').classList.remove('active');

        setTimeout(function() {
            document.querySelector('.header').classList.add('scrolled');
        }, 160);
    }
    // If scrolling up
    else if (lastScrollDirection === 'up') {
        document.querySelector('.header').classList.remove('scrolled');
    }
});

// Selecteer het hamburger-element en het submenu-element
const hamburger = document.querySelector('.hamburger');
const subMenu = document.querySelector('.sub-menu'); // Zorg ervoor dat dit overeenkomt met je HTML

// Voeg een klik-eventlistener toe
hamburger.addEventListener('click', function () {
    // Controleer of de hamburger de klasse 'active' heeft
    if (this.classList.contains('active')) {
        // Als de klasse 'active' al aanwezig is
        this.classList.remove('active'); // Verwijder 'active' van de hamburger
        subMenu.classList.remove('show'); // Verwijder 'show' van het submenu
    } else {
        // Als de klasse 'active' niet aanwezig is
        this.classList.add('active'); // Voeg 'active' toe aan de hamburger
        subMenu.classList.add('show'); // Voeg 'show' toe aan het submenu
    }
});
