// Файл card.js
'use strict';
(function () {

  // находим блок .setup-similar-list, куда  будем добовлять сгенерированные DOM-элементы (карточки магов)
  var similarListElement = document.querySelector('.setup-similar-list');

  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var createWizard = function (otherWizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = otherWizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = otherWizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = otherWizard.colorEyes;

    return wizardElement;
  };

  /**
   * @function successHandler
   * @description Отрисовывает волшебников
   * @param {array} wizards массив волшебников
   */
  var render = function (wizards) {
    var fragment = document.createDocumentFragment();
    var takeNumber = wizards.length > 4 ? 4 : wizards.length;
    similarListElement.innerHTML = '';
    for (var i = 0; i < takeNumber; i++) {
      fragment.appendChild(createWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);
    document.querySelector('.setup-similar').classList.remove('hidden');
  };


  window.card = {
    render: render
  };

})();
