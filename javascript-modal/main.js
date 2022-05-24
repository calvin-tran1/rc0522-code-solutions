var $modalOverlay = document.querySelector('.modal-overlay');
var $openModal = document.querySelector('.open-modal');
var $closeModal = document.querySelector('.no');

$openModal.addEventListener('click', function () {
  $modalOverlay.className = 'modal-overlay open';
});

$closeModal.addEventListener('click', function () {
  $modalOverlay.className = 'modal-overlay close';
});
