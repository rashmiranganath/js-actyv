

// class One{
//   constructor(name,age){
//       this.name = name
//       this.age = age
//   }
//   sayName(){
//     console.log(this)
//   }


// }

// class Two extends One {
//   constructor(name,age,id){
//       super(name,age)
//       this.id = id

//   }
// }

// const person = new Two("rash",20,1)
// console.log(person)

"==========================="
var a = 1; 
function b() { 
    a = 10; 
    return; 
    function a() {} 
} 
b(); 
console.log(a);          
        

