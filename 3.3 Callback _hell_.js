const getAuth = cb => {
  setTimeout(() => {
    cb({ isAuth: true });
  }, 1000);
};

const getUser = (authInfo, cb) => {
  if (!authInfo.isAuth) {
    cb(null);
    return;
  }
  setTimeout(() => {
    cb({ name: 'Max' });
  }, 1000);
};

getAuth(authInfo => {
  getUser(authInfo, user => {
    console.log(user.name);
  });
});
