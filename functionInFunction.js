// console.log(print) vs console.log(print()) 차이

// 함수는 javascript에서 객체와 같이 동작한다.

// pass the function along vs call the function and get the result

// function is a variable that can pass any other variable

function print(value) {
  console.log(value)
}

function useCallback(callback) {
  callback('hello')
}

useCallback(print())