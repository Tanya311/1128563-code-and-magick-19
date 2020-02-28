// Файл util.js
'use strict';
(function () {
  var ESC_KEY = 'Escape';
  var ENTER_KEY = 'Enter';

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
    getRandomNumber: getRandomNumber,
    getRandomElementFromArray: getRandomElementFromArray,
    getMaxElement: getMaxElement,
    escapeKey: ESC_KEY,
    enterKey: ENTER_KEY
  };

})();
