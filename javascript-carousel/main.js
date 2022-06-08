var $left = document.querySelector('#left');
var $right = document.querySelector('#right');
var $img = document.querySelector('img');
var $dotIndex = document.querySelector('.dot-index');

var bulbasaur = new Pokemon('Bulbasaur', 'images/001.png');
var charmander = new Pokemon('Charmander', 'images/004.png');
var squirtle = new Pokemon('Squirtle', 'images/007.png');
var pikachu = new Pokemon('Pikachu', 'images/025.png');
var jigglypuff = new Pokemon('Jigglypuff', 'images/039.png');
var pokedex = [bulbasaur, charmander, squirtle, pikachu, jigglypuff];
var dotIndex = [];
var currentId = 0;
var intervalId = setInterval(autoScroll, 3000);

function Pokemon(name, source) {
  this.name = name;
  this.source = source;
}

for (var i = 0; i < pokedex.length; i++) {
  var $dot = document.createElement('i');
  $dot.className = 'fa-solid fa-circle-dot';
  $dot.setAttribute('data-id', 0);
  $dotIndex.appendChild($dot);
  dotIndex.push($dot);
}

function dotAuto() {
  for (var i = 0; i < $dotIndex.children.length; i++) {
    $dotIndex.children[i].className = 'fa-solid fa-circle-dot';
    if (currentId === i) {
      $dotIndex.children[currentId].className = 'fa-solid fa-circle';
    }
  }
}

$dotIndex.addEventListener('click', function (e) {
  if (e.target.tagName === 'I') {
    currentId = dotIndex.indexOf(e.target);
    $img.src = pokedex[currentId].source;

    dotAuto();
    intervalId = setInterval(autoScroll, 3000);
    clearInterval(intervalId);
  }
});

function autoScroll() {
  if (currentId === pokedex.length - 1) {
    currentId = 0;
    $img.src = pokedex[currentId].source;
  } else {
    currentId++;
    $img.src = pokedex[currentId].source;
  }
  dotAuto();
}

$left.addEventListener('click', function () {
  if (currentId === 0) {
    currentId = pokedex.length - 1;
    $img.src = pokedex[currentId].source;
  } else {
    currentId--;
    $img.src = pokedex[currentId].source;
  }
  dotAuto();
  intervalId = setInterval(autoScroll, 3000);
  clearInterval(intervalId);
});

$right.addEventListener('click', () => {
  autoScroll();
  intervalId = setInterval(autoScroll, 3000);
  clearInterval(intervalId);
});
