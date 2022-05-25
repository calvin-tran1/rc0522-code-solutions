var $form = document.querySelector('#contact-form');

$form.addEventListener('submit', function (event) {
  event.preventDefault();
  var nameValue = $form.elements.name.value;
  var emailValue = $form.elements.email.value;
  var messValue = $form.elements.message.value;
  var obj = { nameValue, emailValue, messValue };
  console.log('message data:', obj);
  return $form.reset();
});
