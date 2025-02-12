/*
function loadJson(url) {
  return fetch(url)
    .then(response => {
      if (response.status == 200) {
        return response.json();
      } else {
        throw new Error(response.status);
      }
    });
}
  */

loadJson('https://javascript.info/no-such-user.json')
  .catch(error => console.log("Fetch error:", error)); // Error: 404

//replacement using async
async function loadJson(url) {
  const response = await fetch(url);
  if (response.status == 200) {
    const data = await response.json();
    return console.log(data);
  } else {
    throw new Error(response.status);
  }
};

//example two
/*
function fetchData() {
  return fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch( error => console.log("the error is:", error)
}
fetchData();
*/
//conversion
async function fetchData() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    let data = await response.json();
    console.log(data);
  } catch(err) {
    console.log("error is:", err);
  }
}
fetchData();
   
