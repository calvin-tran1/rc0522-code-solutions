var $character = document.querySelectorAll('span');
var index = 0;
var currentChar = $character[index];

currentChar.classList.add('current');

document.addEventListener('keydown', ({ key }) => {
  if (key === currentChar.innerText) {
    currentChar.classList.remove('incorrect');
    currentChar.classList.remove('current');
    currentChar.classList.add('correct');
    currentChar = $character[++index];
  } else {
    currentChar.classList.add('incorrect');
  }
  currentChar.classList.add('current');
});
