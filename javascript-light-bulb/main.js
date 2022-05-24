var count = 0;
var $btn = document.querySelector('.lightbulb');
var $container = document.querySelector('.container');
var $glow = document.querySelector('.glow');

$btn.addEventListener('click', function () {
  count++;

  if (count % 2 === 0) {
    $btn.className = 'lightbulb on';
    $container.className = 'container white';
    $glow.className = 'glow light';
  } else {
    $btn.className = 'lightbulb off';
    $container.className = 'container black';
    $glow.className = 'glow dark';
  }
});
