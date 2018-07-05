// scoped function
// use let instead of var
for (var i = 1; i <= 3; i++) {
  setTimeout(function() {
    console.log(i + ' second(s) elapsed');
  }, i * 1000);
}
