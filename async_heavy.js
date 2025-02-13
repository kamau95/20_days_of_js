async function* getUsers(ids) {
  if(!Array.isArray(ids)) {
    throw new Error("id should be an an of numbers");
  } else {
    for(let id of ids) {
      console.log("getUsers next");
      try {
        const response = await fetch(`https://reqres.in/api/users/${id}`);
        if (!response.ok) {
          console.error(`Skipping user ${id}: ${response.statusText}`)
          continue;// Skip this invalid user
        }
        const data =  await response.json();
        if (id < 6) yield data;
      } catch(err) {
        console.error(`Fetch error for user ${id}:`, err);
      }
    }
  }
}

//consuming the async generator
//async function that returns immediately
(async () => {
  let users = getUsers([2, 1, 0, 3, 57])
  for await (let user of users) {
    console.log(user);
  }
}
)();
