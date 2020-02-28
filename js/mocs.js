// Файл mocs.js
'use strict';
(function () {
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

  window.mocs = {
    createRandomWizards: createRandomWizards,
    wizards: Wizards,
  };
})();
