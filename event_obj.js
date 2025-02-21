document.querySelector('button').addEventListener( 'click', (e) => {
  console.log(`type: ${e.type} target: ${e.currentTarget}`);
  console.log(e.clientX, e.clientY);
 // e.currentTarget.hidden = true;
})

document.getElementById("dissapear").addEventListener('click', (e) => {
  console.log('once you click you wont see me again');
  e.currentTarget.hidden = true;
})
