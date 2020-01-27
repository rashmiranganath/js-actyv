const handler = {
  get: (obj, prop) => {
    if (prop == "id"){
      return "Cant access it private id"
    }
    else{
      if (prop in obj) {
        return obj[prop]
      }
      else {
        return "error"
      }
    }
  },
  set: (obj, prop, value) => {

    if (prop in obj) {
      return obj[prop] = value;
    }
    else {
      return obj[prop] = value
    }

  }

}


const obj = {
  name : "rashmi",
  age : 20,
  id : 1
}

const proxyTrail = new Proxy (obj , handler)



// console.log(proxyTrail)
// console.log(proxyTrail.address)
// console.log(proxyTrail.address = "kormangla")
// console.log(proxyTrail.passion = "idk")
console.log(proxyTrail.id)





