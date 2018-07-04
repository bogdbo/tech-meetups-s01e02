const checkAuth = cb => {
  setTimeout(() => {
    cb({ isAuth: true });
  }, 2000);
};
const getUser = (authInfo, cb) => {
  if (!authInfo.isAuth) {
    cb(null);
    return;
  }
  setTimeout(() => {
    cb({ name: 'Max' });
  }, 2000);
};

checkAuth(authInfo => {
  getUser(authInfo, user => {
    console.log(user.name);
  });
});
