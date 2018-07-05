function getUser(callback) {
  setTimeout(() => callback('Hello world'), 1000);
}

getUser(function(user) {
  console.log(user);
  console.log('after');
});

console.log('before');
