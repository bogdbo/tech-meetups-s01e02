function getUser(callback) {
  setTimeout(function() {
    callback('bogdan');
  }, 1000);
}

getUser(function(user) {
  console.log(user);
  console.log('after');
});

console.log('before');
