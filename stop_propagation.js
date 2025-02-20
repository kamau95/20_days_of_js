window.addEventListener('click', (e) => {
  console.log("window", e.eventPhase);
//e.stopPropagation();//stopping propagation in the window prop never reaches the dom
}, {capture:true})

window.addEventListener('click', (e) => {
  console.log("window", e.eventPhase);
} )

document.body.addEventListener('click', (e) => {
  console.log("body", e.eventPhase);
}, {capture:true})

document.documentElement.addEventListener('click', (e) => {
  console.log("documentElement", e.eventPhase);
})
//stopping event propagation in the targetting phase prevents bubbling
document.querySelector('button').addEventListener('click', (e) => {
  console.log("button", e.eventPhase);
  e.stopPropagation();
})

