'use strict';

var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';

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
  ],
  FIREBALL_COLOR: [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
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
 * функция генерации случайного значения из массива
 * @param {Array} array - массив
 * @return {*} случайный элемент из массива
 */
var getRandomElementFromArray = function (array) {
  var randomElement = array[getRandomNumber(0, array.length - 1)];
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
// userDialog.classList.remove('hidden');

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
// document.querySelector('.setup-similar').classList.remove('hidden');


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
  if (evt.key === ESC_KEY && evt.target.className !== 'setup-user-name') {
    popupCloseHandler();
  }
};


setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    popupOpenHandler();
  }
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
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
  var coatColor = getRandomElementFromArray(Wizards.COAT_COLOR);
  setupPlayer.querySelector('.wizard-coat').style.fill = coatColor;
  setupPlayer.querySelector('input[name=coat-color]').value = coatColor;
};

wizardCoat.addEventListener('click', coatColorChangeHandler);

/**
 * функция изменнения цвета глаз
 *
 */
var eyesColorChangeHandler = function () {
  var eyesColor = getRandomElementFromArray(Wizards.EYES_COLOR);
  wizardEyes.style.fill = eyesColor;
  setupPlayer.querySelector('input[name=eyes-color]').value = eyesColor;
};

wizardEyes.addEventListener('click', eyesColorChangeHandler);

/**
 * функция изменнения цвета фаербола
 *
 */
var fireballColorChangeHandler = function () {
  var color = getRandomElementFromArray(Wizards.FIREBALL_COLOR);
  fireballColor.style.backgroundColor = color;
  setupPlayer.querySelector('input[name=fireball-color]').value = color;
};

fireballColor.addEventListener('click', fireballColorChangeHandler);
