async function* fetchUrls(arr) {
  for( const item of arr) {
    await new Promise((resolve) => {
      setTimeout( () => {
        resolve();
      }, 2000)
    });
    yield item;
  }
}
(async () => {
for await(const value of fetchUrls([0,2,3,4,5])) {
console.log(value);
}
})();
