import './about.less';
console.log('11111');

const imgUrl = require('../../images/cat.jpeg');

const img = document.createElement("img");
img.style.width = "200px";
img.src = imgUrl;
document.body.appendChild(img);