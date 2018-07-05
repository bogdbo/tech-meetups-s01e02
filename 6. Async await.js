const getAuth = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ isAuth: true });
    }, 1000);
  });
};
const getUser = authInfo => {
  return new Promise((resolve, reject) => {
    if (!authInfo.isAuth) {
      reject();
    } else {
      setTimeout(() => resolve({ name: 'Max' }), 1000);
    }
  });
};

const main = async () => {
  var auth = await getAuth();
  var user = await getUser(auth);
  console.log(user.name);
};

main();
