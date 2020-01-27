// const obj = {
//   name : "rashmi",
//   age : 20,
//   id : 1
// }

// const handler = {
//   get : ((obj , prop) =>{
//       if(prop == "id"){
//           return "sorry you cant access id"
//       }
//       else {
//           return obj[prop]
//       }
//   }),
//   set : ((obj , prop , value ) =>{
//       return obj[prop] = value
//   })
// }

// const proxy1 = new Proxy(obj,handler)

// console.log(proxy1.id)


"==============================="

// const obj = {
//   name : "rashmi",
//   age : 20,
//   id : 1
// }

// const handler = {

//   get : ((obj , prop) =>{
//       if(prop in obj){
//         return obj[prop]
//       }else{
//         return obj[prop] = "j"
//       }
    
//   }),

// }

// const proxy1 = new Proxy(obj,handler)

// console.log(proxy1.check)
// console.log(proxy1)

"============================================================"

const obj = {
  name : "rashmi",
  age : 20,
  id : 1
}

const handler = {
  get : ((obj , prop) =>{
      if(prop == "id"){
          return "sorry you cant access id"
      }
      else {
          // return obj[prop]
      }
    }), 
  set : ((obj,prop,value) => {
    if(prop in obj){
      return obj[prop]
    }
    else{
      return obj[prop] = value
    }
  })
}
  
  

const proxy1 = new Proxy(obj,handler)
console.log(proxy1)
// proxy1.surname = "k"
proxy1.skill = "dance"
console.log(proxy1)

