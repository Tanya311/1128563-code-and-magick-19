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
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x - 40, y + 40);
  ctx.bezierCurveTo(x - 40, y + 40, x + 20, y + 80, x - 40, y + 120);
  ctx.bezierCurveTo(x - 40, y + 120, x - 100, y + 180, x, y + 270);
  ctx.bezierCurveTo(x, y + 270, x + 210, y + 250, x + CLOUD_WIDTH, y + 270);
  ctx.bezierCurveTo(x + CLOUD_WIDTH, y + 270, x + 380, y + 220, x + CLOUD_WIDTH, y + 180);
  ctx.bezierCurveTo(x + CLOUD_WIDTH, y + 180, x + 460, y + 80, x + 360, y);
  ctx.bezierCurveTo(x + 360, y, x + 400, y + 50, x + 320, y + 90);
  ctx.bezierCurveTo(x + 320, y + 90, x + 160, y + 30, x + 200, y - 10);
  ctx.closePath();
  ctx.fill();
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

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, ctx.fillStyle = 'rgb(' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ')');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'top';
  ctx.fillText('Ура вы победили!', positionText.x, positionText.y);
  ctx.fillText('Список результатов: ', positionText.x, positionText.y + FONT_SIZE);

  var maxTime = getMaxElement(times);

  names.forEach(function (name, i) {
    var columnHeigh = Math.round(times[i] / maxTime * 100);
    ctx.fillStyle = name === 'Вы' ? 'rgba(255, 0, 0, 1)' : 'hsla(240, ' + (Math.random() * 100) + '%, 50%, 1)';
    ctx.fillRect(CLOUD_X + COLUMN_GAP + (COLUMN_WIDTH + COLUMN_GAP) * i, CLOUD_Y + CLOUD_HEIGHT - columnHeigh - GAP * 2 - FONT_SIZE, COLUMN_WIDTH, columnHeigh);
    ctx.fillStyle = '#000';
    ctx.textBaseline = 'bottom';
    ctx.fillText(name, CLOUD_X + COLUMN_GAP + (COLUMN_WIDTH + COLUMN_GAP) * i, CLOUD_Y + CLOUD_HEIGHT - GAP);
    ctx.fillText(Math.round(times[i]), CLOUD_X + COLUMN_GAP + (COLUMN_WIDTH + COLUMN_GAP) * i, CLOUD_Y + CLOUD_HEIGHT - columnHeigh - GAP * 3 - FONT_SIZE);
  });
};

