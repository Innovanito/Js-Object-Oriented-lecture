# Javascript 객체지향 프로그래밍

유튜브 생활코딩에서 객체지향의 개념과 활용에 대해 공부한 자료입니다


## this
this는 그 메소드에 속한 객체를 가르키는 예약어이고  
주로 객체의 속성 값을 호출할 때 쓴다.  

```js
var kim = {
  name: 'kim',
  first: 10,
  second: 20,
  sum: function() {
    return this.first+this.second;
   }
}

console.log('the result of sum', kim.sun());
```
결과값
30

이 코드에서는,    
sum() 메소드 안에 있는 this가 가르키는 것은 kim이라는 객체 안에 있는 first와 second라는 객라는 것을 알 수 있다.

### 일반함수와 화살표함수 안에 있는 this 비교

```js
// 일반함수
function DogTest1 (){
    this.name = "푸들"
    return {
        name : "진돗개",
        type : function(){
            console.log(this.name + "입니다")
        }
    }
}
const dogType1 = new DogTest1 ();
dogType1.type(); 
//진돗개입니다


// 화살표함수
function DogTest2(){
    this.name = "푸들"
    return {
        name : "진돗개",
        type : ()=> {
            console.log(this.name + "입니다")
        }
    }
}

const dogType2 = new DogTest2();
dogType2.type(); 
//푸들입니다.

```
이 예제를 보면,  
일반함수에서는 return 안에 있는 변수인 name을 참조하지만, 화살표함수에서는 return 밖에 있는 name을 참조하는 것을 알 수 있다.

## super
```js
class Person{
  constructor(name, first, second) {
    this.name = name
    this.first = first
    this.second = second
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
```
이 코드를 보면 Person의 클라스를 PersonPlus로 상속받고,  
이 상속받은 함수를 다시 Person2가 상속받아서 super를 이용해서 또 코드를 중복해서 쓸 필요 없이  
super를 이용해 부모의 메서드를 사용하여 코드를 간편히 작성할 수 있다.

# javascript에서 함수란?

javascript에서는 함수는 객체처럼 동작한다.

```js
function print(value) {
  console.log(value)
}

console.dir(print)
```

<img width="385" alt="스크린샷 2022-07-30 오후 8 12 10" src="https://user-images.githubusercontent.com/72393144/181908323-58473a1d-3fba-41cb-ace5-284b729e5b6b.png">


이렇게 함수를 패스시켜주면 함수의 내부 구조 외에도 다른 객체들이 심어저 있는 것을 알 수 있다.



##  함수 안에 소괄호 있는 호출 vs 함수 안에 소괄호 없는 호출
```js
function print(value) {
  console.log(value)
}

function useCallback(callback) {
  callback('hello')
}

useCallback(print())
```

이 함수를 실행시켜보면  
Uncaught TypeError: callback is not a function. 
이런 에러를 띤다  

왜냐하면 우리는 useCallback의 인자로 print()라는 값을 썼는데,  
print()는 어떠한 값도 return 하지 않기 때문에 undefined를 return하기 때문이다.  

그래서 결론은  
**함수 안에 값만 쓰고 싶을 때에는 소괄호()를 포함해서 함수의 인자로써 함수를 넣고,**  
**함수 전체를 실행시키고 싶을 때에는 소괄호() 없이 함수의 인자로써 함수를 넣으면 된다.**

# 객체 상속

## __proto__

서로 아무 관계가 없는 두 객체를 부모 자식 관계로 만들어 줄 수 있는 메소드

```js
var superObj = { superVal: 'super'}
var subObj = {subVal: 'sub'}

subObj.__proto__ = superObj

console.log('subObj.subVal', subObj.subVal);
console.log('subObj.superVal', subObj.superVal);

subObj.superVal = 'sub2'
console.log('subObj.superVal2', subObj.superVal);

```

결과값  
subObj.subVal sub  
subObj.superVal super  
subObj.superVal2 sub2  


__proto를 이용해 subObj의 부모를 superObj로 설정해 준 후에,  
부모가 가지고 있는 객체의 값 superVal을 subObj가 출력해주면 부모가 가지고 있는 superVal을 상속받은 것을 알 수 있다.  

하지만 자식 객체에서 superVal의 값을 바꾸랴고 해도 그 값은 바뀌지 않는다.  
왜냐하면 subObj는 부모 객체인 superObj를 참조하고 있기 때문에 그 값이 바뀌지 않는 이상 그 값은 동일하다.  
(얕은 복사의 개념과 유사한 것 같다.)

## Object.create()

Object.create()를 이용해서 __proto__ 에서 한 것과 같이 할 수 있다.

```js
var superObj = { superVal: 'super'}

var subObj= Object.create(superObj)
subObj.subVal = 'sub'
```
이렇게 하면 위에 코딩한 것과 같은 결과를 같는다.

#객체와 함수

## call

독립되어 있는 각각의 객체와 함수를 call로 이어서 사용할 수 있다.
call을 먼저 사용한 다음 함수 안에 있는 this의 값을 인자로 받은 객체의 값으로 활용 가능한 메소드

```js
var kim = {name: 'kim', first:10, second:20}
var lee = {name: 'kim', first:10, second:10}

function sum(prefix) {
  return prefix + (this.first+this.second)
}

console.log(sum.call(kim, '=>'));
console.log(sum.call(lee, ':'));
```
결과값  
=>30  
:20

sum이라는 함수 호출한 다음에 뒤에 .call을 불러서 첫 번째 인자는 this가 가르키는 객체를 넣어주고,  
두 번째 부터는 함수의 인자를 순서대로 넣어주면 된다.

## bind

call 메소드와 역할은 비슷하지만 조금 다른 메소드가 bind이다. 
call은 호출될 때 마다 call의 인자가 달라질 때마다 this의 값이 바뀌는 반면,  
bind는 그 뜻처럼 아예 this의 값을 엮어버릴 수 있다.(고정시킨다)

```js
var kim = {name: 'kim', first:10, second:20}
var lee = {name: 'kim', first:10, second:10}

function sum(prefix) {
  return prefix + (this.first+this.second)
}

var kimSum = sum.bind(kim, '->')
console.log('kimSum()', kimSum());
```

결과값  
kimSum() ->30

# 함수를 생성하면 Javascript에서 일어나는 일

<img width="1058" alt="스크린샷 2022-08-02 오후 5 21 38" src="https://user-images.githubusercontent.com/72393144/182327996-175fe1c9-61c7-40e8-b29d-542c66859f6a.png">

일단 Person이라는 함수를 생성하면 자동적으로 Person의 Prototype 객체가 생성이 된다.  
이 둘을 연결해주기 위해 Person의 속성인 prototype이 생성이 되고, 이는 Person의 prorotype 객체를 가르킨다.

Person의 prototype 객체는 constructor를 만들어서 Person을 가르킨다.

new를 이용해 kim이라는 객체를 생성하면 그 안에 있는 __proto__를 생성해서 Person의 prototype 객체를 가르킨다.  
그래서 그 안에 있는 속성과 메소드 값을 이용할 수 있게 한다.
