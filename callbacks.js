//inline callbacks are passed directly when calling the function
//the function is defined inline instead of being declared separately.
function fetchData(id, callback) {
  setTimeout( () => {
    if(id == 0) {
      callback(new Error("invalid id"), null);
    } else {
      const data = {id, name: "john"};
      callback(null, data);
    }
  }, 2000)
}

fetchData(1, (error, data) => {
  if (error) {
    console.log("error:", error);
  } else {
    console.log("data:", data)
  }
});

//callback passed separately
function handleResult(error, data) {
  if(error) {
    console.log("invalid id");
  } else {
    console.log("data is:", data);
  }
}

function fetchData1( id, callback) {
  setTimeout( () => {
    if (id ==0) {
      callback(new Error("invalid id"), null);
    } else {
      callback(null, {id, name: "peter"})
    }
  }, 5000)
}

//calling the function
fetchData1(45, handleResult);
