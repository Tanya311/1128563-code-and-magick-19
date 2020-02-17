// Файл playersSetting.js
'use strict';
(function () {
  var userDialog = document.querySelector('.setup');
  var setupPlayer = userDialog.querySelector('.setup-player');
  var wizardCoat = setupPlayer.querySelector('.wizard-coat');
  var wizardEyes = setupPlayer.querySelector('.wizard-eyes');
  var fireballColor = setupPlayer.querySelector('.setup-fireball');
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
})();
