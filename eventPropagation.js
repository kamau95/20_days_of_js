// Event propagation
const button = document.querySelector('button');
const body = document.body;
const html = document.documentElement;

window.addEventListener('click', (e) => {
  console.log("in the window", e.eventPhase);
}, {capture:true});
html.addEventListener('click', (e) =>{
  console.log("in the html main", e.eventPhase);
}, {capture:true});
body.addEventListener('click', (e) =>{
  console.log("body section", e.eventPhase);
}, {capture:true});
button.addEventListener('click', (e) =>{
  console.log("the source of click", e.eventPhase);
});
