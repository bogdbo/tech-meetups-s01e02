// blocks UI hard
pause = duration => {
  var start = new Date().getTime();
  while (new Date().getTime() - start < duration);
};

for (var i = 0; i < 5; i++) {
  pause(500);
  console.log(i);
}
