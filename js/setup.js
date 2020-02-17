// Файл setup.js
'use strict';

(function () {
  /**
  * функция создания массива объектов магов со случайными свойствами
  * @param {Array} names - имена магов
  * @param {Array} lastNames - фамилии магов
  * @param {Array} coatColors - цвет плаща магов
  * @param {Array} eyesColors -  цвет глаз магов
  * @param {number} cont -  колличество
  * @return {Array} массив объектов со случайными свойствами
  */
  var createRandomWizards = function (names, lastNames, coatColors, eyesColors, cont) {
    var wizards = [];
    for (var i = 0; i < cont; i++) {
      var wizard = {
        name: window.util.getRandomElementFromArray(names) + ' ' + window.util.getRandomElementFromArray(lastNames),
        coatColor: window.util.getRandomElementFromArray(coatColors),
        eyesColor: window.util.getRandomElementFromArray(eyesColors)
      };
      wizards.push(wizard);
    }
    return wizards;
  };


  // находим блок .setup-similar-list, куда  будем добовлять сгенерированные DOM-элементы (карточки магов)
  var similarListElement = document.querySelector('.setup-similar-list');

  // вызываем функцию создания массива объектов магов со случайными свойствами и записываем массив в переменную
  var otherWizards = createRandomWizards(window.util.wizards.FIRST_NAME, window.util.wizards.LAST_NAME, window.util.wizards.COAT_COLOR, window.util.wizards.EYES_COLOR, window.util.count);
  //  находим элемент Template (шаблон)
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  // создаем новый документ
  var fragment = document.createDocumentFragment();

  // генерируем DOM-элементы (карточки магов) (проходим по массиву объектов магов со случайными свойствами, клонируем шаблон, заполняем его данными и добовляем в документ)
  otherWizards.forEach(function (otherWizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = otherWizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = otherWizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = otherWizard.eyesColor;
    fragment.appendChild(wizardElement);
  });

  // документ с карточками магов добовляем в блок .setup-similar-list
  similarListElement.appendChild(fragment);

  //  Удаляем класс hidden и показывем блок .setup-similar
  document.querySelector('.setup-similar').classList.remove('hidden');
})();
