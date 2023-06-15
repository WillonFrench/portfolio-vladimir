const slider_second = document.querySelector('.slider__second');
const prevButton_second = document.querySelector('.prev__second');
const nextButton_second = document.querySelector('.next__second');
const slideWidth_second = document.querySelector('.slide__second').offsetWidth;
let currentPosition_second = 0;

nextButton_second.addEventListener('click', () => {
  currentPosition_second -= slideWidth_second;
  slider_second.style.left = `${currentPosition_second}px`;

  if (currentPosition_second <= -2 * slideWidth_second) {
    slider_second.appendChild(slider_second.firstElementChild);
    currentPosition_second += slideWidth_second;
    slider_second.style.left = `${currentPosition_second}px`;
  }
});

prevButton_second.addEventListener('click', () => {
  currentPosition_second += slideWidth_second;
  slider_second.style.left = `${currentPosition_second}px`;

  if (currentPosition_second > 0) {
    slider_second.insertBefore(slider_second.lastElementChild, slider_second.firstElementChild);
    currentPosition_second -= slideWidth_second;
    slider_second.style.left = `${currentPosition_second}px`;
  }
});