var memberArray = ['a', 'b', 'c']
console.log(memberArray[2])

var memberObject = {
  manager: 'a',
  developer: 'b',
  designer: 'c'
}

// 맴버 추가할 때
memberObject.attorney = 'd'

console.log(memberObject)

//맴버 삭제할 때
delete  memberObject.manager

console.log(memberObject)