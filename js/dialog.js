'use strict';
var userDialog = document.querySelector('.setup');

var setupOpen = document.querySelector('.setup-open');
var setupClose = userDialog.querySelector('.setup-close');
var setupUserName = userDialog.querySelector('.setup-user-name');
var setupPlayer = userDialog.querySelector('.setup-player');
var wizardCoat = setupPlayer.querySelector('.wizard-coat');
var wizardEyes = setupPlayer.querySelector('.wizard-eyes');
var fireballColor = setupPlayer.querySelector('.setup-fireball');

/**
 * функция открытия окна
 */
var popupOpenHandler = function () {
  userDialog.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

/**
 * функция закрытия окна
 */
var popupCloseHandler = function () {
  userDialog.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

/**
 * функция закрытия окна по нажатию кнопки ESC
 * @param {*} evt
 */
var onPopupEscPress = function (evt) {
  if (evt.key === window.util.escapeKey && evt.target.className !== 'setup-user-name') {
    popupCloseHandler();
  }
};


setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === window.util.enterKey) {
    popupOpenHandler();
  }
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === window.util.enterKey) {
    popupCloseHandler();
  }
});

setupOpen.addEventListener('click', popupOpenHandler);
setupClose.addEventListener('click', popupCloseHandler);

setupUserName.addEventListener('invalid', function () {
  if (setupUserName.validity.tooShort) {
    setupUserName.setCustomValidity('имя персонажа не может содержать менее 2 символов');
  } else if (setupUserName.validity.tooLong) {
    setupUserName.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (setupUserName.validity.valueMissing) {
    setupUserName.setCustomValidity('Обязательное поле');
  } else {
    setupUserName.setCustomValidity('');
  }
});

/**
 * функция изменнения цвета плаща
 *
 */
var coatColorChangeHandler = function () {
  var coatColor = window.util.getRandomElementFromArray(window.util.wizards.COAT_COLOR);
  setupPlayer.querySelector('.wizard-coat').style.fill = coatColor;
  setupPlayer.querySelector('input[name=coat-color]').value = coatColor;
};

wizardCoat.addEventListener('click', coatColorChangeHandler);

/**
 * функция изменнения цвета глаз
 *
 */
var eyesColorChangeHandler = function () {
  var eyesColor = window.util.getRandomElementFromArray(window.util.wizards.EYES_COLOR);
  wizardEyes.style.fill = eyesColor;
  setupPlayer.querySelector('input[name=eyes-color]').value = eyesColor;
};

wizardEyes.addEventListener('click', eyesColorChangeHandler);

/**
 * функция изменнения цвета фаербола
 *
 */
var fireballColorChangeHandler = function () {
  var color = window.util.getRandomElementFromArray(window.util.wizards.FIREBALL_COLOR);
  fireballColor.style.backgroundColor = color;
  setupPlayer.querySelector('input[name=fireball-color]').value = color;
};

fireballColor.addEventListener('click', fireballColorChangeHandler);
