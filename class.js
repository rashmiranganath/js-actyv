// class Human {
//   constructor(name,age){
//     this.name = name
//     this.age = age
//   }

//   get getName(){
//     return this.name
//   }
//   // set setName(name){
//   //   return this.name
//   // }


  
// }



// var obj1 = new Human("rashmi",2)
// console.log(obj1)

// console.log(obj1.getName)
// console.log(obj1.setName)


function Hero(name , age ){
  this.name = name ;
  this.age = age ;

}

Hero.prototype.name = function () {
  return "name " , this.name 
}

// age = function(){
//   re
// }


var human1 = new Hero("bro" , 16)
// console.log(human1)

console.log(human1.name())
