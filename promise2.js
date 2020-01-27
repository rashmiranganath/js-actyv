// var goal = new Promise (function (resolve ,reject){
//   if(false){
//     resolve("goal scored")
//   }
//   else{
//     reject("not a goal")
//   }
// })

// goal
//   .then((data,err)=>console.log(err))
//   // .catch((err)=>console.log(err))




// const getData = async() => { 
//   var y = await "Hello World"; 
//   console.log(y); 

// } 
// getData(); 

// console.log(1); 
// console.log(2);

"========================================================================="


var movie = new Promise((resolve, reject) => {
  if (true) {
    resolve("got ticket")
  } else {
    reject("no ticket")
  }
})


var coolDrink = movie.then((result) => {
  console.log(result)
  return new Promise((resolve, reject) => {
    if (false) {
      resolve("got cool drink")
    } else {
      reject("sorry no cool drink ")
    }
  })
})

var movieOver = coolDrink.then((msg) => console.log(msg), (rej) => {
  console.log(rej)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("hurray Nice movie")
    }, 5000)
  })
})

movieOver.then((exit)=>{
  console.log(exit)
})


