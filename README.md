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

