var $tabContainer = document.querySelector('.tab-container');
var $tab = document.querySelectorAll('.tab');
var $view = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', function (e) {
  if (e.target && e.target.matches('.tab')) {

    for (var i = 0; i < $tab.length; i++) {
      if ($tab[i] === e.target) {
        $tab[i].className = 'tab active';
        if ($tab[i] !== e.target) {
          $tab.classList.remove('active');
        }
      } else {
        $tab[i].classList.remove('active');
      }
    }

    var targetValue = e.target.getAttribute('data-view');

    for (var j = 0; j < $view.length; j++) {
      if ($view[j].getAttribute('data-view') === targetValue) {
        $view[j].classList.remove('hidden');
        if ($view[j].getAttribute('data-view') !== targetValue) {
          $view.className = 'view hidden';
        }
      } else {
        $view[j].className = 'view hidden';
      }
    }
  }
});
