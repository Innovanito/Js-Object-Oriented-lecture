var superObj = { superVal: 'super'}
var subObj = {subVal: 'sub'}

subObj.__proto__ = superObj

console.log('subObj.subVal', subObj.subVal);
console.log('subObj.superVal', subObj.superVal);

subObj.superVal = 'sub2'
console.log('subObj.superVal2', subObj.superVal);
