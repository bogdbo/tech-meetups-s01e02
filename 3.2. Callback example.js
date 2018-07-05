// ugly AF
const https = require('https');
let buffer = '';

handleRequest = res => {
  res.on('data', data => (buffer += data));
  res.on('end', () => console.log(buffer));
};

https.get(
  {
    host: 'www.random.org',
    path:
      '/strings/?num=10&len=8&digits=on&upperalpha=on&loweralpha=on&unique=on&format=plain&rnd=new',
    headers: {
      Authorization: `Bearer ${readOnly}`
    }
  },
  handleRequest
);

let i = 0;
nextNumber = () => {
  if (i < 10) {
    setTimeout(() => {
      console.log(i++);
      nextNumber();
    }, 250);
  }
};

nextNumber();
