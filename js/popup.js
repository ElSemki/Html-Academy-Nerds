const popup = document.querySelector('.popup');
const popupShowButton = document.querySelector('.contacts-button');
const popupCloseButton = popup.querySelector('.popup-close');
const userName = popup.querySelector('[name=user-name]');

popupShowButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('popup-show')
  userName.focus();
});

popupCloseButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.remove('popup-show');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains('popup-show')) {
      evt.preventDefault();
      popup.classList.remove('popup-show');
    }
  }
});
