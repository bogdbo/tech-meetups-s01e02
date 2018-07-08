const resolveOrThrow = flag => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (flag) {
        resolve('resolved');
      }
      reject('rejected');
    });
  });
};

resolveOrThrow(true)
  .then(() => resolveOrThrow(false))
  .then(v => console.log(v));
