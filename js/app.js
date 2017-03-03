const $newItemBtn = $('#newItemBtn');
const $newItem = $('#newItem');
const $toDoList = $('#toDoList');
const $ul = $('ul');
const closeButton = '<img src="images/close.svg" class="close">';
const upButton = '<img src="images/up.svg" class="up">';
const downButton = '<img src="images/down.svg" class="down">';

$newItemBtn.on('click', () => {
  let value = $newItem.val();
  if (value === '') {
    alert("Please enter a to-do item into the text field.");
  } else {
    let listItem = '<li>' + value + upButton + downButton + closeButton + '</li>';
    $ul.append(listItem);
    $newItem.val('');
  }
});
  
$('body').on('click', '.close', (event) => {
  let target = $(event.target);
  target.parent().remove();
});

$('body').on('click', '.down', (event) => {
  let target = $(event.target);
  let targetParent = target.parent();
  let targetSib = targetParent.next();
  targetParent.insertAfter(targetSib);
});

$('body').on('click', '.up', (event) => {
  let target = $(event.target);
  let targetParent = target.parent();
  let targetSib = targetParent.prev();
  targetParent.insertBefore(targetSib);
});



