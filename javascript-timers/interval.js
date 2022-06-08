var $h1 = document.querySelector('h1');
var counter = 4;
var countdownTimer = setInterval(countdown, 1000);

function countdown() {
  if (counter > 0) {
    $h1.textContent = counter--;
  } else if (counter === 0) {
    $h1.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(countdownTimer);
  }
}
