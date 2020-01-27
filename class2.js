// class One{
//   constructor(name,age){
//       this.name = name
//       this.age = age
//   }

//  normal () {
//      console.log(this)
//  }

//  arrow = () =>{
//      console.log(this)
//  }

// }

// class Two extends One {
//   constructor(name,age,id){
//       super(name,age)
//       this.id = id

//   }
// }

// const person = new Two("rash",20,1)
// // console.log(person)

// person.normal()

"========================================="
class One{
  constructor(name,age){
      this.name = name
      this.age = age
  }

//  normal () {
//      console.log(this)
//  }
}

var person = new One("kiran" , 25)
// console.log(person)



// One.prototype.skill = function(){
//   return this.name
// }

person.__proto__.education = function(){
  console.log("ok educate")
}
// console.log(person.skill())

console.log(person.education())


 