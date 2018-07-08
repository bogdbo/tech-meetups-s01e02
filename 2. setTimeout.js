// timeout 0, why is it still after hello?
setTimeout(() => console.log('world'), 0);
console.log('Hello');
