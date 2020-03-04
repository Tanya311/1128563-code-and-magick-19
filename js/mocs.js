// Файл mocs.js
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

  window.mocs = {
    createRandomWizards: createRandomWizards,
  };
})();
