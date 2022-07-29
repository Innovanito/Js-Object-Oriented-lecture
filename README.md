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




