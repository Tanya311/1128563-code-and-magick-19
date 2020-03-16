// Файл avatar.js
'use strict';

(function () {
  var FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
  var fileChooser = document.querySelector('.upload input');
  var preview = document.querySelector('.setup-user-pic');

  /**
   * функция загрузки фотографии
   * @param {evt} evt
   */
  var avataruploadHandler = function (evt) {
    var file = evt.target.files[0];
    var fileName = file.name.toLowerCase();

    var matches = FILE_TYPES.some(function (it) {
      return fileName.endsWith(it);
    });

    if (matches) {
      var reader = new FileReader();

      reader.addEventListener('load', function () {
        preview.src = reader.result;
      });

      reader.readAsDataURL(file);
    }

  };

  fileChooser.addEventListener('change', avataruploadHandler);

})();
