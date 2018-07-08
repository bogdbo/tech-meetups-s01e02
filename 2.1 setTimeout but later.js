const getCurrentSecond = () => new Date().getSeconds();

const startSecond = getCurrentSecond();

setTimeout(() => {
  console.log(`Ran after ${getCurrentSecond() - startSecond} seconds`);
}, 1000);

while (true) {
  if (getCurrentSecond() - startSecond >= 2) {
    console.log('Good, looped for 2 seconds');
    break;
  }
}
