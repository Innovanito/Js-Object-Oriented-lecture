class Person{
  constructor(name, first, second) {
    this.name = name
    this.first = first
    this.second = second
  }

  sum() {
    return  this.first+this.second
  }
}

class PersonPlus extends Person {
  avg() {
    return (this.first+this.second)/2
  }
}

class Person2 extends PersonPlus {
  constructor(name, first, second, third) {
    super(name,first,second)
    this.third= third
  }
  sum() {
    return super.sum() + this.third
  }
}

var kim = new Person2('kim', 10, 20,30)
console.log('sum of third variables', kim.sum());
