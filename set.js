// for(let i = 0 ; 0<i; i++){
//     setTimeout((i)=>{
//       console.log(i*2)
//     },1000)
// }
"===================================="

// async function dosome(){
//   console.log("1");
//   await 1;
//   console.log("2");
//   await 2 
//   console.log("3")
//   }

// console.log("0")
// dosome()
// console.log("4")


// var a = async()=>{
//   setTimeout(() =>{
//     console.log(this)
//   },1000)
// }
// a()
"==================================="

// function resolveAfter2Seconds(x) {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve(x)
//       console.log(x);
//     }, 2000);
//   });

//   }
// resolveAfter2Seconds(5)
"======================================"

// function mk(location) {
//   return new Promise((resolve, reject) => {
//     if (location === "google") {
//       resolve("google say hi ")
//     }
//     else { reject("sorry") }
//   }
//   )
// }


// function pr(response) {
//   return new Promise((resolve, reject) => {
//     console.log("processing response")
//     resolve(`extra information + ${response}`)
//   })
// }

// // mk("google").then(response => {
// //   console.log(response)
// //   pr(response).then(response => { console.log(response) })
// // })



// async function doWork() {
//   try {
//     const first = await mk("goe")
//     console.log(first)
//     const second = await pr(first)
//     console.log(second)
//   } catch (err) {
//     console.log(err)
//   }
// }


// doWork()
"==================================="


// async function firstAsync() {
//   let promise = new Promise((res, rej) => {
//       setTimeout(() => res("Now it's done!"), 1000)
//   });

//   // wait until the promise returns us a value
//   let result = await promise; 

//   // "Now it's done!"
//   console.log(result); 
//   }
// firstAsync();

"================================================="


// async function firstAsync() {
//   let promise = Promise.resolve(10);
//   let result = await promise; // Syntax error
//   console.log(result)
// }


// firstAsync()

"===================================================="


// function job() {
//   return new Promise(function(resolve, reject) {
//       reject();
//   });
// }

// let promise = job();

// promise

// .then(function() {
//   console.log('Success 1');
// })

// .then(function() {
//   console.log('Success 2');
// })

// .then(function() {
//   console.log('Success 3');
// })

// .catch(function() {
//   console.log('Error 1');
// })

// .then(function() {
//   console.log('Success 4');
// });


"========================================"


function makeFunc() {
  var name = [];
  function displayName() {
    name.push(1);
    console.log(name);
  }
  return displayName;
}

var myFunc = makeFunc();

myFunc();
myFunc();
myFunc();
myFunc();


const my = makeFunc();
my();


// array = [1,2]


// istru = (element) =>{
// return element > 1;
// }

// console.log(array.every(istru));