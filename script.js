let bodySvg = document.getElementById('background-body-svg');
let logoSvg = document.getElementById('logo');


if(window.innerWidth < 993){
    bodySvg.src = 'content/Rectangle%201.svg';
    logoSvg.src = 'content/logo_mobile.svg';
}


// HAMBURGER

const navToggle = document.querySelector('.mobile-nav-toggle');
const primaryNav = document.querySelector('.primary-navigation');

navToggle.addEventListener('click', () => {
    primaryNav.hasAttribute('data-visible')
        ? navToggle.setAttribute('aria-expanded', false)
        : navToggle.setAttribute('aria-expanded', true);
    primaryNav.toggleAttribute('data-visible');
})
