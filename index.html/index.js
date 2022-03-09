
// Date of solution 2022.02.01


// function openOrSenior(data) {
//     var result = [];
//     for (let i = 0; i < data.length; i++) {
//         result[i] = (data[i][0] >= 55 && data[i][0] > 7) ? 'Senior' : 'Open';
//     }

//     return result;
// }

// console.log(
//     openOrSenior([
//         [18, 20],
//         [45, 2],
//         [61, 12],
//         [37, 6],
//         [21, 21],
//         [78, 9],
//     ])
// );

// Date of solution 2022.02.11

// let reverseWords = (str) => {
//     let reverseWordArr = str.split(' ').map(word => word.split("").reverse().join(""));
//     return reverseWordArr.join(' ');
// }

// console.log(reverseWords('First string'));

// Date of solution 2022.02.19

// let zeroArray = (arr, arr2) => {
//     let newArr = [];
//     for (let i = 0; i < arr; i++){
//         let row = [];
//         for (let j = 0; j < arr2; j++){
//             row.push(0);
//         }
//         newArr.push(row);
//     }
//     return newArr;
// }

// console.log(zeroArray(4,4));

// Date of solution 2022.02.20

// let greeting = () => {
//     var olleh = '!DLROW OLLEH';
//     return olleh.split("").reverse().join("").toLowerCase();
// }

// console.log(greeting());


// Date of solution 2022.03.01

// function filter_list(arr) {
//   for (var i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === 'string') {
//       arr.splice(i, 1);
//       i--;
//     }
//   }
//   return arr;
// }

// Date of solution 2022.03.04

// let users = {
//   Alan: {
//     age: 27,
//     online: true,
//   },
//   Jeff: {
//     age: 32,
//     online: true,
//   },
//   Sarah: {
//     age: 48,
//     online: true,
//   },
// };

// const countOnline = (usersObj) => {
//   let result = 0;
//   for (let users in usersObj) {
//     if (usersObj[users].online === true) {
//       result++;
//     }
//   }
//   return result;
// };

// console.log(countOnline(users));

// function filter_list(arr) {
//   for (var i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === 'string') {
//       arr.splice(i, 1);
//       i--;
//     }
//   }
//   return arr;
// }

// Date of Solution 2022.03.10 Return Largest Numbers in Array 

function largestOfFour(arr) {
  let results = [];
  for (let i = 0; i < arr.length; i++) {
    let largestNumber = arr[i][0];
    // console.log(largestNumber);
    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > largestNumber) {
        largestNumber = arr[i][j];
      }
    }
    results[i] = largestNumber;
  }
  return results;
}


console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);





