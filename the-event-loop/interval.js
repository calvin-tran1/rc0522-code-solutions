let count = 3;
const intervalId = setInterval(countdown, 1000);

function countdown() {
  console.log(count);
  count--;

  if (count === 0) {
    setTimeout(() => { console.log('Blast off!'); }, 1000);
    clearInterval(intervalId);
  }
}
