'use strict';

var Wizards = {
  FIRST_NAME: [
    'Иван',
    'Хуан Себастьян',
    'Мария',
    'Кристоф',
    'Виктор',
    'Юлия',
    'Люпита',
    'Вашингтон'
  ],
  LAST_NAME: [
    'да Марья',
    'Верон',
    'Мирабелла',
    'Вальц',
    'Онопко',
    'Топольницкая',
    'Нионго',
    'Ирвинг'
  ],
  COAT_COLOR: [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ],
  EYES_COLOR: [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ]
};

var COUNT = 4;

/**
 * функция генерации случайных чисел
 * @param {number} min - минимальное значение
 * @param {number} max - максимальное значение
 * @return {number} случайное число из диапазона
 */
var getRandomNumber = function (min, max) {
  return Math.floor(Math.random() * max) + min;
};

/**
 * функция генерации случайного значения из массива без повторений
 * @param {Array} array - массив
 * @return {*} случайный элемент из массива
 */
var getRandomElementFromArray = function (array) {
  var randomElement = array[getRandomNumber(0, array.length - 1)];
  array.splice(array.indexOf(randomElement, 0), 1);
  return randomElement;
};

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
      name: getRandomElementFromArray(names) + ' ' + getRandomElementFromArray(lastNames),
      coatColor: getRandomElementFromArray(coatColors),
      eyesColor: getRandomElementFromArray(eyesColors)
    };
    wizards.push(wizard);
  }
  return wizards;
};

//  удоляем класс hidden
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

// находим блок .setup-similar-list, куда  будем добовлять сгенерированные DOM-элементы (карточки магов)
var similarListElement = document.querySelector('.setup-similar-list');

// вызываем функцию создания массива объектов магов со случайными свойствами и записываем массив в переменную
var otherWizards = createRandomWizards(Wizards.FIRST_NAME, Wizards.LAST_NAME, Wizards.COAT_COLOR, Wizards.EYES_COLOR, COUNT);

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

