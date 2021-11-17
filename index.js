// Code your solutions in this file



function writeCards(arr, gift) {
    let result = [];
    for (let i=0; i <  arr.length; i++) {
        result[i]= `Thank you, ${arr[i]}, for the wonderful surprise gift!`;
    }
    return result;
}

//More dynamic solution
/*
function writeCards( namesArray, event ) {
  let thankYouCards = []
  for ( let i = 0; i < namesArray.length; i++ ) {
    thankYouCards.push( `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!` )
  }
  return thankYouCards
}
*/



let arr = ["Lisa", "Emily", "Steve"]

console.log(writeCards(arr));



console.log("Hello");

function countDown(x) {
    for (let i=x;i>=0;i--) {
        console.log(i);
    }
}
//let array = [1,2,3,4,5,6,7,8,9,10]; Don't need array for this test!
countDown(7);

/* for (let countup = 0; countup < 10; countup++) {
    console.log(countup);
  } */

/*
console.log("Hello");
function countDown() {
    let arr2 = [];
    for (let i=10;i>=arr2.length;i--) {
        console.log(i);
    }
}

let arr2 = [1,2,3,4,5,6,7,8,9,10];
countDown(arr2);

*/