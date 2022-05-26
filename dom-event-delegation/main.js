var $taskList = document.querySelector('.task-list');
$taskList.addEventListener('click', function (event) {
  console.log(event.target, event.target.tagName);

  if (event.target && event.target.matches('button')) {
    var closestAncestor = event.target.closest('.task-list-item');
    console.log(closestAncestor);
    closestAncestor.remove();
  }
});
