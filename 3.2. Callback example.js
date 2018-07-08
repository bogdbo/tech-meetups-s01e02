// ugly AF
const https = require('https');

let buffer = '';
handleData = data => (buffer += data);
handleEnd = () => console.log(buffer);
handleRequest = res => {
  res.on('data', handleData);
  res.on('end', handleEnd);
};

const requestDetails = {
  host: 'www.random.org',
  path:
    '/strings/?num=10&len=8&digits=on&upperalpha=on&loweralpha=on&unique=on&format=plain&rnd=new'
};

https.get(requestDetails, handleRequest);

let i = 0;
nextNumber = () => {
  if (i < 10) {
    setTimeout(() => {
      console.log(i++);
      nextNumber();
    }, 100);
  }
};

nextNumber();
