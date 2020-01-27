// const flip = new Promise((resolve, reject) => {
//   if (true ) {
//     resolve('success');
//   } else {
//     reject('failure');
//   }
// });

// flip
//   // .then(result => console.log('result', result))
//   .catch(error => console.log('error', error));

// // console.log('after flip');

"============================================================================================"

let promise = new Promise(function(resolve,reject) {
  // the function is executed automatically when the promise is constructed

  // after 1 second signal that the job is done with the result "done"
  (setTimeout(() => resolve("done"), 1000))
})

promise.then((value)=>{console.log(value)})
        .catch((err)=>{console.log(err)})


"=============================================================================================="


// const value = new Promise(function(resolve, reject){
//   if(true) {
//     setTimeout(() => {
//       resolve('Resolving')
//     }, 1000)
//   } else {
//     reject(new Error());
//   }
// })


// value.then((dummi) => {
//   console.log(dummi);
// }).catch( err => console.log(err))



