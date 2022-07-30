function Person1() {
  this.name='kim'
  this.first=10
  this.second=20
  this.third=30
  this.sum = function () {
    return this.first+this.second+this.third
  }
}

console.log('Person1', Person1);
console.log('Person1()', Person1());

function Person2() {
  name='kim'
  first=10
  second=20
  third=30
  sum = function () {
    return this.first+this.second+this.third
  }
}

console.log('Person2', Person2);
console.log('Person2()', Person2());

var kim = new Person1()
var lee = new Person1()

console.log('kim.sum()', kim.sum())
console.log('lee.sum()', lee.sum())