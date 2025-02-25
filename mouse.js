const mybox = document.getElementById("mybox");
mybox.addEventListener('click', (event) => {
  event.target.style.backgroundColor= 'tomato';
  event.target.textContent= 'pressed';
});

mybox.addEventListener('mouseover', (event) => {
  event.target.style.backgroundColor= 'yellow';
  event.target.textContent='dont keep doing that';
});

mybox.addEventListener('mouseout', (event) => {
  event.target.style.backgroundColor='lightgreen';
  event.target.textContent='initial state';
});

//handle file lists
const ul = document.getElementById('fileList');

function toggleSelect(li) {
  li.classList.toggle('selected');
}

//Function to select a single item, deselecting all others
function singleSelect(li) {
  let selected = ul.querySelectorAll('.selected');
  for( let elem of selected) {
    elem.classList.remove('selected');
  }
  li.classList.add('selected')
}

//Callback for mousedown event to prevent text selection
function preventDefault(event) {
  event.preventDefault();
}

//Callback for click event on the list
function handleListClick(event) {
  if( event.target.tagName != 'LI') return;
  
  if(event.ctrlKey || event.metaKey) {
    toggleSelect(event.target);
  } else {
    singleSelect(event.target);
  }
}

//attach listeners
ul.addEventListener('click', handleListClick);
ul.addEventListener('mousedown', preventDefault);

