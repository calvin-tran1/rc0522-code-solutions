var $form = document.querySelector('#contact-form');

$form.addEventListener('submit', function (event) {
  event.preventDefault();
  var obj = {};
  var nameValue = $form.elements.name.value;
  var emailValue = $form.elements.email.value;
  var values = obj[nameValue & emailValue];
  $form.reset(values);
});
