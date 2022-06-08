var $h1 = document.querySelector('h1');
var counter = 4;

function countdown() {
  if (counter > 0) {
    $h1.textContent = counter--;
  } else if (counter === 0) {
    $h1.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(setInterval(countdown, 1000));
  }
}

setInterval(countdown, 1000);
