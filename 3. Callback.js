function getUser(callback) {
  setTimeout(() => callback('Bogdan'), 1000);
}

getUser(user => {
  console.log(user);
  console.log('after');
});

console.log('before');
