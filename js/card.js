// Файл setup.js
'use strict';
(function () {

  // находим блок .setup-similar-list, куда  будем добовлять сгенерированные DOM-элементы (карточки магов)
  var similarListElement = document.querySelector('.setup-similar-list');

  // вызываем функцию создания массива объектов магов со случайными свойствами и записываем массив в переменную
  var otherWizards = window.mocs.createRandomWizards(window.mocs.wizards.FIRST_NAME, window.mocs.wizards.LAST_NAME, window.mocs.wizards.COAT_COLOR, window.mocs.wizards.EYES_COLOR, window.mocs.count);
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
