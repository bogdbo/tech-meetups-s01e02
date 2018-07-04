const checkAuth = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ isAuth: true });
    }, 2000);
  });
};
const getUser = authInfo => {
  return new Promise((resolve, reject) => {
    if (!authInfo.isAuth) {
      reject();
    } else {
      setTimeout(() => resolve({ name: 'Max' }), 2000);
    }
  });
};

const main = async () => {
  var auth = await checkAuth();
  var user = await getUser(auth);
  console.log(user.name);
};

main();
