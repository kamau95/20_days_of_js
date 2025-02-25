document.querySelectorAll('button').forEach( button => {
  button.addEventListener('click', (e) => {
    e.currentTarget.parentNode.remove();
  })
})
