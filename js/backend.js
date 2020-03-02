// Файл backend.js
'use strict';

(function () {
  var Url = {
    POST: 'https://js.dump.academy/code-and-magick',
    GET: 'https://js.dump.academy/code-and-magick/data',
  };
  var STATUS_CODE_OK = 200;
  var TIMEOUT = 10000;

  var save = function (data, onLoad, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === STATUS_CODE_OK) {
        onLoad(xhr.response);
      } else {
        onError('Cтатус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения. Повторите попытку');
    });

    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс. Проверьте соединение');
    });

    xhr.timeout = TIMEOUT; // 10s

    xhr.open('POST', Url.POST);
    xhr.send(data);
  };


  var load = function (onLoad, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === STATUS_CODE_OK) {
        onLoad(xhr.response);
      } else {
        onError('Cтатус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения. Повторите попытку');
    });
    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс. Проверьте соединение');
    });

    xhr.timeout = TIMEOUT; // 10s

    xhr.open('GET', Url.GET);
    xhr.send();
  };


  window.backend = {
    save: save,
    load: load
  };

})();

