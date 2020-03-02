// Файл backend.js
'use strict';

(function () {
  var Url = {
    POST: 'https://js.dump.academy/code-and-magick',
    GET: 'https://js.dump.academy/code-and-magick/data',
  };
  var STATUS_CODE_OK = 200;
  var TIMEOUT = 10000;
  var TIMEOUT_MESSEGE = 2000;

  var save = function (data, onLoad, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === STATUS_CODE_OK) {
        onLoad(xhr.response);
        okSaveHandler();
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


  var okSaveHandler = function () {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 30px auto; width: 550px; text-align: center; background-color: green;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '25px';


    node.textContent = 'Данные успешно отправлены';
    document.body.insertAdjacentElement('afterbegin', node);
    setTimeout(removeNode, TIMEOUT_MESSEGE);

    function removeNode() {
      node.remove();
    }
  };

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 30px auto; width: 550px; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '25px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.backend = {
    save: save,
    load: load,
    errorHandler: errorHandler
  };

})();

