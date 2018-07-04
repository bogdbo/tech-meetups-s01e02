const getUser = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ name: 'Max' });
    }, 2000);
  });
};
getUser().then(user => {
  console.log(user.name);
});
