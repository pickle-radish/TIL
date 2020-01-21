const url = require('url');

const URL = url.URL;
const myURL = new URL('http://www.gilbut.co,kr/bookbookList.aspx?sercate1=001001000#anchor');
console.log('new URL():', myURL);
console.log('url.formant():', url.format(myURL));
console.log('-----------------------------------');
const parsedUrl = url.parse('http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor');
console.log('url.parse():', parsedUrl);
console.log('url.format():', url.format(parsedUrl));
