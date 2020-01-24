'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var GAP = 10;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var COLUMN_WIDTH = 40;
var COLUMN_GAP = 50;
var FONT_SIZE = 16;

var positionText = {
  x: CLOUD_X + GAP * 2,
  y: CLOUD_Y + GAP * 2
};

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (times) {
  var maxElement = times[0];
  for (var i = 1; i < times.length; i++) {
    if (times[i] > maxElement) {
      maxElement = times[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'top';
  ctx.fillText('Ура вы победили!', positionText.x, positionText.y);
  ctx.fillText('Список результатов: ', positionText.x, positionText.y + FONT_SIZE);

  var maxTime = getMaxElement(times);

  for (var i = 0; i <= names.length - 1; i++) {
    var columnHeigh = Math.round(times[i] / maxTime * 100);

    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsla(240, ' + (Math.random() * 100) + '%, 50%, 1)';
    }

    ctx.fillRect(CLOUD_X + COLUMN_GAP + (COLUMN_WIDTH + COLUMN_GAP) * i, CLOUD_Y + CLOUD_HEIGHT - columnHeigh - GAP * 2 - FONT_SIZE, COLUMN_WIDTH, columnHeigh);

    ctx.fillStyle = '#000';
    ctx.textBaseline = 'bottom';
    ctx.fillText(names[i], CLOUD_X + COLUMN_GAP + (COLUMN_WIDTH + COLUMN_GAP) * i, CLOUD_Y + CLOUD_HEIGHT - GAP);
    ctx.fillText(Math.round(times[i]), CLOUD_X + COLUMN_GAP + (COLUMN_WIDTH + COLUMN_GAP) * i, CLOUD_Y + CLOUD_HEIGHT - columnHeigh - GAP * 3 - FONT_SIZE);
  }
};

