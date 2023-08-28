export function currentTime() {
  
  const elementHours = document.querySelector('.js-hours');
  const elementMinutes = document.querySelector('.js-minutes');
  const elementSeconds = document.querySelector('.js-seconds');
  const elemnetDay = document.querySelector('.js-day');

  let date = new Date(),
    hours = date.getHours(),
    minutes = date.getMinutes(),
    seconds = date.getSeconds();


//makes 12 hours clock
let day;
day = hours < 12 ? "AM" : "PM";
hours = hours > 12 ? hours - 12 : hours;
hours = hours === 0 ? (hours = 12) : hours;

//adds 0 when value is less than 10
hours = hours < 10 ? `0${hours}` : hours;
minutes = minutes < 10 ? `0${minutes}` : minutes;
seconds = seconds < 10 ? `0${seconds}` : seconds;

elementHours.textContent = `${hours}`;
elementMinutes.textContent = `${minutes}`;
elementSeconds.textContent = `${seconds}`;
elemnetDay.textContent = `${day}`;
}