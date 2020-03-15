// Файл setup.js
'use strict';
(function () {
  var userDialog = document.querySelector('.setup');

  var setupOpen = document.querySelector('.setup-open');
  var setupClose = userDialog.querySelector('.setup-close');
  var setupUserName = userDialog.querySelector('.setup-user-name');

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

  var form = document.querySelector('.setup-wizard-form');
  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), function () {
      userDialog.classList.add('hidden');
    }, window.backend.errorHandler);

    evt.preventDefault();
  });


  window.dialog = {
    user: userDialog
  };
})();
