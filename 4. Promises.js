// cathes hard
// still hard to read/write
const getAuth = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ isAuth: true });
    }, 2000);
  });
};

const getUser = auth => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ name: 'Max' });
    }, 2000);
  });
};

var auth = getAuth()
  .then(auth => getUser(auth))
  .then(user => console.log(user.name));
