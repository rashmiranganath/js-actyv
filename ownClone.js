const person = {
  name: 'john',
  age: 35,
  interests: { javascript: true }
};


function Clone(ob){
  var newOb = {}
  for (var i in ob){
    if(ob[i] != null && typeof(ob[i])=="object")
      newOb[i] =  Clone(ob[i]);
    else
      newOb[i] = ob[i]
        
  }
  console.log(newOb)

}

Clone(person)


// function cloneObject(obj) {
//   var clone = {};
//   for(var i in obj) {
//       if(obj[i] != null &&  typeof(obj[i])=="object")
//           clone[i] = cloneObject(obj[i]);
//       else
//           clone[i] = obj[i];
//   }
//   return clone;
// }

// console.log(cloneObject(person))




var obj = {
  name : "rash",
  dob : 6,
  age :20,
  hi :{
    hi :0
  }
}

function deepClone(obj){
  var newClone ={}
  for (var i in obj){
    if (obj[i]!= null && typeof obj[i]=="object")
      newClone[i] = deepClone(obj[i])
    else 
      newClone[i] = obj[i]
    
  }
      return newClone

  
}

  
console.log(deepClone(obj))