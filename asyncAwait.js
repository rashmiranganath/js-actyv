// var movie = new Promise((resolve, reject) => {
//   if (true) {
//     resolve("got ticket")
//   } else {
//     reject("no ticket")
//   }
// })


// var coolDrink = movie.then((result) => {
//   console.log(result)
//   return new Promise((resolve, reject) => {
//     if (false) {
//       resolve("got cool drink")
//     } else {
//       reject("sorry no cool drink ")
//     }
//   })
// })

// var movieOver = coolDrink.then((msg) => console.log(msg), (rej) => {
//   console.log(rej)
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("hurray Nice movie")
//     }, 5000)
//   })
// })

// movieOver.then((exit)=>{
//   console.log(exit)
// })


var asyncdemo = async () => {
 

  

  var movie = new Promise((resolve, reject) => {
    if (true) {
      resolve("got ticket")
    }
  }).then((msg) => console.log(msg))


  const getPopcorn = new Promise((resolve, reject) => {
      setTimeout(()=>{
        resolve("i got popcorn ")
      })
    }).then((msg) => console.log(msg))
  

  // return ticket
}
asyncdemo()