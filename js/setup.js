'use strict';
//  удоляем класс hidden
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');


var wizardsFirstName = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardsLastName = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var wizardsCoatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var wizardsEyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

//  функция генерации случайных чисел (параметры мин и мах)
var getRandom = function (min, max) {
  return Math.floor(Math.random() * max) + min;
};

//  Cоздаем рандомного мага (параметры: массивы: имена магов, фамилии магов, цвет плаща, цвет глаз)
var createRandomWizards = function (names, lastNames, coatColor, eyesColor) {
  var randonWizards = [];
  for (var i = 0; i < 4; i++) {
    var wizardName = names[getRandom(0, names.length)] + ' ' + lastNames[getRandom(0, lastNames.length)];
    var wizardCoatColor = coatColor[getRandom(0, coatColor.length)];
    var wizardEyesColor = eyesColor[getRandom(0, eyesColor.length)];
    var wizardOne = {
      name: wizardName,
      coatColor: wizardCoatColor,
      eyesColor: wizardEyesColor
    };
    randonWizards.push(wizardOne);
  }
  return randonWizards;
};
//  вызываем функцию  записываем ее в переменную wizards
var wizars = createRandomWizards(wizardsFirstName, wizardsLastName, wizardsCoatColor, wizardsEyesColor);
//  находим элемент Template (шаблон)
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

//  создаем карточку мага по шаблону (параметы wizars - массив объектов характеристик мага)
var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};


//  создаем 4 рандомные карточки магов (параметы wizars - массив объектов характеристик мага)
var createWizard = function (wizars) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < 4; i++) {
    fragment.appendChild(renderWizard(wizars[i]));
  }
  return similarListElement.appendChild(fragment);

};

createWizard(wizars);

//  Удаляем класс hidden и показывем блок .setup-similar,
document.querySelector('.setup-similar').classList.remove('hidden');
