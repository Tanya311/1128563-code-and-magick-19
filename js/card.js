// Файл card.js
'use strict';
(function () {

  // находим блок .setup-similar-list, куда  будем добовлять сгенерированные DOM-элементы (карточки магов)
  var similarListElement = document.querySelector('.setup-similar-list');

  // вызываем функцию создания массива объектов магов со случайными свойствами и записываем массив в переменную
  var otherWizards = window.mocs.createRandomWizards(window.mocs.wizards.FIRST_NAME, window.mocs.wizards.LAST_NAME, window.mocs.wizards.COAT_COLOR, window.mocs.wizards.EYES_COLOR, window.mocs.count);
  //  находим элемент Template (шаблон)
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var createWizard = function (otherWizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = otherWizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = otherWizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = otherWizard.colorEyes;

    return wizardElement;
  };

  /**
   * @function renderWizards
   * @description Отрисовывает волшебников
   * @param {array} wizards массив волшебников
   */
 /* var renderWizards = function (wizards) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < window.mocs.count; i++) {
      fragment.appendChild(createWizard(wizards[i]));
    }

    similarListElement.innerHTML = '';
    similarListElement.appendChild(fragment);
    document.querySelector('.setup-similar').classList.remove('hidden');
  };
  renderWizards(otherWizards);
  */

 var successHandler = function (wizards) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < window.util.count; i++) {
      fragment.appendChild(createWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);

    document.querySelector('.setup-similar').classList.remove('hidden');
  };

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 30px auto; width: 550px; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '25px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.backend.load(successHandler, errorHandler)

  window.card = {
    renderWizards: renderWizards
  };

})();
