function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const getAuth = async () => {
  await timeout(1000);
  return { isAuth: true };
};

const getUser = async authInfo => {
  await timeout(1000);
  if (!authInfo.isAuth) {
    throw 'unauthenticated';
  } else {
    return { name: 'Max' };
  }
};

const main = async () => {
  var auth = await getAuth();
  var user = await getUser(auth);
  console.log(user.name);
};

main();
