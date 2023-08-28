import { currentTime } from "./clock.js";

const navToggle = document.querySelector('.nav__toggle');
const nav = document.querySelector('.nav');

navToggle.addEventListener('click', () => {
  nav.hasAttribute('data-visible')
    ? navToggle.setAttribute('aria-expanded', false)
    : navToggle.setAttribute('aria-expanded', true);
  nav.toggleAttribute('data-visible');
});

currentTime();
setInterval(currentTime, 1000);
