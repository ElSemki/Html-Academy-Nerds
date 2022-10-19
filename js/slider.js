const slideOne = document.querySelector('.intro-slide-one');
const slideTwo = document.querySelector('.intro-slide-two');
const slideThree = document.querySelector('.intro-slide-three');
const slideButtonOne = document.querySelector('.slide-button-one');
const slideButtonTwo = document.querySelector('.slide-button-two');
const slideButtonThree = document.querySelector('.slide-button-three');

slideButtonOne.addEventListener('click', function (evt) {
  evt.preventDefault();
  slideOne.classList.add('slide-current');
  slideTwo.classList.remove('slide-current');
  slideThree.classList.remove('slide-current');
  slideButtonOne.classList.add('slide-button-current');
  slideButtonTwo.classList.remove('slide-button-current');
  slideButtonThree.classList.remove('slide-button-current');
});

slideButtonTwo.addEventListener('click', function (evt) {
  evt.preventDefault();
  slideOne.classList.remove('slide-current');
  slideTwo.classList.add('slide-current');
  slideThree.classList.remove('slide-current');
  slideButtonOne.classList.remove('slide-button-current');
  slideButtonTwo.classList.add('slide-button-current');
  slideButtonThree.classList.remove('slide-button-current');
});

slideButtonThree.addEventListener('click', function (evt) {
  evt.preventDefault();
  slideOne.classList.remove('slide-current');
  slideTwo.classList.remove('slide-current');
  slideThree.classList.add('slide-current');
  slideButtonOne.classList.remove('slide-button-current');
  slideButtonTwo.classList.remove('slide-button-current');
  slideButtonThree.classList.add('slide-button-current');
});
