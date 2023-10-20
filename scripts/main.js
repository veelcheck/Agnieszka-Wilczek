import { currentTime } from "./clock.js";
import { ScrollToTop } from "./goUpButton.js";


const navToggle = document.querySelector('.nav__toggle');
const nav = document.querySelector('.nav');
const containerNav = document.querySelector('.container-nav');

navToggle.addEventListener('click', () => {
  nav.hasAttribute('data-visible')
    ? navToggle.setAttribute('aria-expanded', false)
    : navToggle.setAttribute('aria-expanded', true);
  nav.toggleAttribute('data-visible');

  setTimeout(() => {
    containerNav.toggleAttribute('data-visible');
  }, 200);
});

currentTime();
setInterval(currentTime, 1000);


ScrollToTop();

