window.addEventListener('click', (e) => {
  console.log("window", e.eventPhase);
}, {capture:true})


window.addEventListener('click', (e) => {
  console.log("on window but", e.eventPhase);
})

//a capturing listener
document.body.addEventListener('click', (e) => {
  console.log("body", e.eventPhase);
}, {capture:true})

//normal listener on html
document.documentElement.addEventListener('click', (e) => {
  console.log("html, documentElement", e.eventPhase);
})

document.querySelector('button').addEventListener('click', (e) => {
  console.log("the button", e.eventPhase);
})
