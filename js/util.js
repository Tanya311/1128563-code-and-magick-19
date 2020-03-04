// Файл util.js
'use strict';
(function () {
  var ESC_KEY = 'Escape';
  var ENTER_KEY = 'Enter';
  var COUNT = 4;
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

  var getMaxElement = function (times) {
    var maxElement = times[0];
    times.forEach(function (time) {
      if (time > maxElement) {
        maxElement = time;
      }
    });
    return maxElement;
  };


  window.util = {
    wizards: Wizards,
    getRandomNumber: getRandomNumber,
    getRandomElementFromArray: getRandomElementFromArray,
    getMaxElement: getMaxElement,
    count: COUNT,
    escapeKey: ESC_KEY,
    enterKey: ENTER_KEY
  };

})();
