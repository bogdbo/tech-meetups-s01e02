// Is this bad? Yes...
var loop = true;
setTimeout(() => (loop = false), 1);
while (loop);
