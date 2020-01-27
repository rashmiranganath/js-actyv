const array1 = ['a', 'b', 'c'];

const array2 = {
  a : 1,
  b : 2
}

for (const element of array1) {
  console.log(element);
}

// for (const item in array2) {
//   console.log(item)
// }

// for (const item in array1) {
//   console.log(item)
// }
"============================================"

const obj = {
  name: "rashmi",
  age: 20,
  skill: {
    skill1: "dance",
    skill2: "sing"
  },
  nothing: null,
}

Object.assign({}, obj);

function deepClone(obj) {
  const newObj = {}
  for (var i in obj) {
    if (typeof obj[i] == "object" && obj[1] != null) {
    newObj[i] =deepClone(obj[i])
    }
    else {
    newObj[i] =obj[i]
    }
  }
  return (newObj)

}

console.log(deepClone(obj))

