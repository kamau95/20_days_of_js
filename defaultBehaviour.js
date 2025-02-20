let form = document.querySelector('form');
form.addEventListener('click', (e) => {
  e.preventDefault();
  console.log("submitted without default behaviour of refreshing");
})
