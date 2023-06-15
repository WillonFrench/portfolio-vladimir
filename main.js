const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const slideWidth = document.querySelector('.slide').offsetWidth;
let currentPosition = 0;

nextButton.addEventListener('click', () => {
  currentPosition -= slideWidth;
  slider.style.left = `${currentPosition}px`;

  if (currentPosition <= -2 * slideWidth) {
    slider.appendChild(slider.firstElementChild);
    currentPosition += slideWidth;
    slider.style.left = `${currentPosition}px`;
  }
});

prevButton.addEventListener('click', () => {
  currentPosition += slideWidth;
  slider.style.left = `${currentPosition}px`;

  if (currentPosition > 0) {
    slider.insertBefore(slider.lastElementChild, slider.firstElementChild);
    currentPosition -= slideWidth;
    slider.style.left = `${currentPosition}px`;
  }
});