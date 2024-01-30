let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};

const sr = ScrollReveal ({
distance: '40px',
duration: 2000,
reset: true
});

sr.reveal('.logo',{delay:200, origin: 'left' });
sr.reveal('.navbar',{delay:300, origin: 'top' });
sr.reveal('.menu-btn',{delay:200, origin: 'right' });

sr.reveal('.home-text span',{delay:450, origin: 'top' });
sr.reveal('.home-text h1',{delay:450, origin: 'left' });
sr.reveal('.home-text p',{delay:300, origin: 'right' });
sr.reveal('.main-btn',{delay:340, origin: 'left' });

sr.reveal('.share',{delay:350, origin: 'bottom' });

sr.reveal('.home-img',{delay:550, origin: 'right' });

