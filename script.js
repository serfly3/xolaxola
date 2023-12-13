// Запиши 3 функции как описано в уроке и в конце вызови функцию init();

// Функция для воспроизведения звука в зависимости от кода клавиши
function playSound(keyCode) {
    let audio;

    if (keyCode === '65') { // Если это клавиша A
        audio = new Audio('one.mp3');
    } else if (keyCode === '83') { // Если это клавиша S
        audio = new Audio('two.mp3');
    } else if (keyCode === '68') { // Если это клавиша S
        audio = new Audio('three.mp3');
    } else if (keyCode === '70') { // Если это клавиша S
        audio = new Audio('for.mp3');
    } else if (keyCode === '71') { // Если это клавиша S
        audio = new Audio('five.mp3');
    } else if (keyCode === '72') { // Если это клавиша S
        audio = new Audio('six.mp3');
    } else if (keyCode === '74') { // Если это клавиша S
        audio = new Audio('seven.mp3');
    } 
    // Если аудиофайл определён, воспроизводим его
    if (audio) {
        audio.play();
    }
}

// Функция для обработки события нажатия клавиши
function handleKeyDown(event) {
    let keyElement = document.querySelector('[data-key="' + event.keyCode + '"]');
    if (keyElement) {
      playSound(keyElement.dataset.key);
    }
  }

  let keys = document.querySelectorAll('.key');
  
 
function init() {
    let keys = document.querySelectorAll('.key');

        for (let i = 0; i < keys.length; i++) {
                keys[i].addEventListener('click', function() {
            playSound(keys[i].dataset.key);
        });
    };
    document.addEventListener('keydown', handleKeyDown);
}

init();