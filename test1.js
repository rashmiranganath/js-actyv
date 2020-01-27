
// setTimeout(()=>{
// for (var i = 1;i<5 ;i++)
//   console.log(i)
//   },1000)

"======================================================================"


const person = {
  name: 'john',
  age: 35,
  interests: { javascript: true }
};


// c = {
//   place :"kiran",
//   name : "rahul",
//   occupation : "hu"
// }
// const clone = Object.assign(c,person);


// // console.log(person);
// console.log(clone)

var d = JSON.parse(JSON.stringify(person))
console.log(d)


d.age = 7
d.interests = false
console.log(d)
console.log(person)




