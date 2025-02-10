function foo(arg) {
  if (typeof arg !== "number" || arg <= 0) {
    throw new Error("invalid argument")
  }
  return new Promise( (resolve, reject) => {
    setTimeout( () => {
      resolve("that is a valid argument")
    }, 3000)
  })
}

try {
  foo("njoro")
  .then(value => console.log(value))
  .catch(err => console.error(err.message))
} catch(error) {
  console.error("the error was caught by try/catch: ", error.message);
}
