let values = prompt('enter your digits, separated by comma', "1,3,7,0,2");
let ul = document.createElement('ul');
document.body.appendChild(ul);
if(values && typeof values == Number) {
  values.split(',').forEach( value => {
    value = value.trim();
    if(value) {
      let li = document.createElement('li');
      li.textContent = value;
      ul.appendChild(li);
    }
  })
} else {
  alert("not a number");
}

