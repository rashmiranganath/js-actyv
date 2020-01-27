var list = ["rashmi", "komal", "shyam"]

var name = list.filter((ele) => {
  return ele == "komal"
})

var name1 = list.filter((ele) => {
  return ele != "komal"
})

console.log(name)
console.log(name1)



function same(name ){
  return name == "komal"
}

console.log(list.every(same))

