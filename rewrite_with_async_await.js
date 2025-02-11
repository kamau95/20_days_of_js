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
    return data
  } else {
    throw new Error(response.status);
  }
};

