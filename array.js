var arr = new Array("1,9","rashmi",)
// console.log(arr)


myfunc = () =>{
  return "joo"
}
arr.push(myfunc)
// console.log(arr[arr.length-1])

arr[arr.length]= "koma"
// console.log(arr[arr.length-1])

// console.log(arr instanceof Array )
console.log(Array.from(arr))


console.log(Array.from("rashmi"))






