// // reverseArray = (arr) => {
// //   for (var i = 0; i < arr.length / 2; i++) {
// //     var temp = arr[i];
// //     arr[i] = arr[arr.length - 1 - i];
// //     arr[arr.length - 1 - i] = temp;
// //   }
// // };

// // var arr1 = [3, 2, 3, 5, 7, 8];
// // reverseArray(arr1);
// // console.log(arr1);

// // var result1 = [8,7,5,3,2,3]

// // var arr2 = [4,5-4,3,2]
// // var result2 = [2,3,-4,5,4]

// // rotateArr = (arr, moveBy) => {
// //   if (moveBy > 0) {
// //     // handle rotations to the right
// //     //loop through all the rotations
// //     for (var i = 0; i < moveBy; i++) {
// //       //handle the single rotation
// //       var temp = arr[arr.length - 1];
// //       //move everything to the right one index
// //       for (var k = arr.length - 2; k >= 0; k--) {
// //         arr[k + 1] = arr[k];
// //       }
// //       //put the temp at the beginning of the array
// //       arr[0] = temp;
// //     }
// //   } else {
// //     //handle rotations to the left
// //     console.log(arr);
// //     var numRotations = Math.abs(moveBy); // actual number of rotations (absolute value)
// //     for (var i = 0; i < Math.abs(moveBy); i++) {
// //       var temp = arr[0];
// //       //loop moves item to the left one index
// //       for (var k = 1; k < arr.length + 1; k++) {
// //         arr[k - 1] = arr[k];
// //         console.log(arr);
// //       }
// //       arr[arr.length - 1] = temp;
// //       console.log('Array after this rotation', arr);
// //     }
// //   }
// // };

// // var myArr1 = [1, 2, 3, 4, 5];
// // rotateArr(myArr1, -1);
// // console.log(myArr1);

// // const filterRange = (arr, minVal, maxVal) => {
// //   for (var i = 0; i < arr.length; i++) {
// //     if (arr[i] < minVal || arr[i] > maxVal) {
// //       for (var k = i + 1; k < arr.length; k++) {
// //         arr[k - 1] = arr[k];
// //       }
// //       arr.length--;
// //       i--;
// //     }
// //   }
// // };

// // var myArr1 = [5, 8, 4, 2, 3];
// // filterRange(myArr1, 3, 6);
// // console.log(myArr1);

// const concatArrays = (arr1, arr2) => {
//   var newArr = [];
//   var curInd = 0;
//   for (var i = 0; i < arr1.length; i++) {
//     newArr[curInd] = arr1[i];
//     curInd++;
//   }
//   for (var i = 0; i < arr2.length; i++) {
//     newArr[curInd] = arr2[i];
//     curInd++;
//   }
//   return newArr;
// };

// var result1 = concatArrays([1, 'Money', -5], [3, 'Hello']);
// console.log(result1);
