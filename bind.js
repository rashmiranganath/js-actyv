// for (var i = 0;i < 5 ; i++ ){
//   // var  a = ()=>{
//   //   console.log(i)
//   // }
//   setTimeout(console.log.bind({},i),1000)

// }
// "=========================="

// var num =[ 10,20,30]
// function myfunc(total,num){
//     return total + num
// }

// console.log(num.reduce(myfunc))

// "=============================="

// var officers = [
//   { id: 20, name: 'Captain Piett' },
//   { id: 24, name: 'General Veers' },
//   { id: 56, name: 'Admiral Ozzel' },
//   { id: 88, name: 'Commander Jerjerrod' }
// ];
// var officersIds = officers.map(function (officer) {
//   return officer.id
// });
// console.log(officersIds)


"==================================================="

var array = [1, 2, 3, [1, 2, [3, 4, [8, 9]]]]

var newArray = []

function flatArray(array) {
  for (var i = 0; i < array.length; i++) {
    if (typeof array[i] === "object") {
      array[i] = flatArray(array[i])
      
    }
    else {
      newArray.push(array[i])
    }

  }
  return newArray

}



console.log(flatArray(array ))









