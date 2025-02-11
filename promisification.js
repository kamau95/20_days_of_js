function greeting(name, callback) {
  setTimeout( () => {
    blabla();
    callback(null, `Hello there ${name}`)
  }, 3000)
}

function callback(err, message) {
  if(err) {
    console.log("error:", err);
  } else {
    console.log(message);
  }
}

greeting("linu", callback);

//try to promisify
function promisify(func) {
  return function promisified(...args) {
    return new Promise( (resolve, reject) => {
      func(...args, (error, data) => {
        if (error) reject(error)
        else resolve(data);
      });
    });
  };
}

promisify(greeting("kamau", callback));
