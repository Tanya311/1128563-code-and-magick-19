// Файл playersSetting.js
'use strict';
(function () {
  var userDialog = document.querySelector('.setup');
  var setupPlayer = userDialog.querySelector('.setup-player');

  var wizard = {
    onEyesChange: function (color) {
      return color;
    },
    onCoatChange: function (color) {
      return color;
    }
  };

  /**
   * функция изменнения цвета плаща
   * @param {*} evt
   */
  var changeCoatColor = function (evt) {
    var coatColor = window.util.getRandomElementFromArray(window.util.wizards.COAT_COLOR);
    evt.target.style.fill = coatColor;
    setupPlayer.querySelector('input[name=coat-color]').value = coatColor;
    wizard.onCoatChange(coatColor);
  };


  /**
   * функция изменнения цвета глаз
   * @param {*} evt
   */
  var changeEyesColor = function (evt) {
    var eyesColor = window.util.getRandomElementFromArray(window.util.wizards.EYES_COLOR);
    evt.target.style.fill = eyesColor;
    setupPlayer.querySelector('input[name=eyes-color]').value = eyesColor;
    wizard.onEyesChange(eyesColor);
  };

  /**
   * функция изменнения цвета фаербола
   * @param {*} evt
   */
  var changeFireballColor = function (evt) {
    var color = window.util.getRandomElementFromArray(window.util.wizards.FIREBALL_COLOR);
    evt.target.style.backgroundColor = color;
    setupPlayer.querySelector('input[name=fireball-color]').value = color;
  };
  /**
   * функция изменений персонажа
   * @param {*} evt
   */
  function userDialogChangeHandler(evt) {
    switch (true) {
      case evt.target.matches('.wizard-coat'):
        changeCoatColor(evt);
        break;
      case evt.target.matches('.wizard-eyes'):
        changeEyesColor(evt);
        break;
      case evt.target.matches('.setup-fireball'):
        changeFireballColor(evt);
        break;
    }
  }
  userDialog.addEventListener('click', userDialogChangeHandler);
  window.playersSetting = wizard;
})();
