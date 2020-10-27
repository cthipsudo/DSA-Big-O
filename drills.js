'use strict';

// function getRandomItem(array) {
//   let ticks = 0;
//   // Get a random number and access that element in the array
//   const item = array[Math.floor(Math.random() * array.length)];
//   ticks++;
//   return {
//     result: item,
//     ticks: ticks
//   };
// }

// console.log(getRandomItem([1, 2, 3]));
// console.log(getRandomItem([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]));

// function howManyLessThanNitems(arr, n) {
//   let ticks = 0;
//   /* If the 1st element in the array is greater than `n`, return 0,
//      because no items in the array are less than `n`. */
//   if (!arr.length || arr[0] >= n) {
//     ticks++;
//     return 0;
//   }

//   let lowIndex = 0, highIndex = arr.length;

//   while (highIndex > lowIndex) {
//     // Find midpoint
//     let midIndex = Math.floor((highIndex + lowIndex) / 2);
//     /* If `midIndex` element is greater than `n`, that means all elements
//        to the right of `midIndex` are also greater than `n`, so
//        we only need to focus on elements to the left of `midIndex`.
//        We set `highIndex` to the current value of `midIndex` so next time
//        through the loop, we'll only look at the left half */
//     if (arr[midIndex] >= n) {
//       highIndex = midIndex;
//       ticks++;
//     }

//     /* If the element to the right of `midIndex` is less than `n`, then we
//        know that we need to check the items to the right of `midIndex`, so
//        we set `lowIndex` to the current value of `midIndex`, so that next
//        time through the loop we only look at the right side */
//     else if (arr[midIndex + 1] < n) {
//       lowIndex = midIndex;
//       ticks++;
//     }

//     /* Otherwise, if the element to the right of `midIndex` is greater
//        than or equal to `n`, we know that the item at `midIndex` is the last
//        item that's less than `n`, so we return `midIndex +  1` to get the total
//        number of items that are less than `n` */
//     else {
//       ticks++;
//       return {
//         result: midIndex + 1,
//         ticks: ticks
//       };
//     }
//   }
// }

// console.log(howManyLessThanNitems([1, 2, 3], 2));
// console.log(howManyLessThanNitems([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100], 99));

// function findMin(array) {
//   let min = array[0], ticks = 1;
//   for (let i = 1; i < array.length; i++) {
//     ticks++;
//     if (array[i] < min) {
//       min = array[i];
//     } 
//   }
//   return {
//     result: min,
//     ticks: ticks
//   };
// }

// console.log(findMin([1, 2, 3]));
// console.log(findMin([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// findMin([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]);


// 1) Determine the Big O for the following algorithm: You are sitting in a room with 15 people. You want to find a playmate for your dog, preferably of the same breed. So you want to know if anyone out of the 15 people have the same breed as your dog. You stand up and yell out, who here has a golden retriever and would like to be a playdate for my golden. Someone yells - "I do, be happy to bring him over"

// Big O: O(1)
// Best, Worst, Average: All cases.

// 2) Determine the Big O for the following algorithm: You are sitting in a room with 15 people. You want to find a playmate for your dog who is of the same breed. So you want to know if anyone out of the 15 people have the same breed as your dog. You start with the first person and ask him if he has a golden retriever. He says no, then you ask the next person, and the next, and the next until you find someone who has a golden or there is no one else to ask.

// Big O: O(n)

function isEven(value) {
  if (value % 2 === 0) {
    return true;
  }
  else {
    return false;
  }
}

// O(1)

function areYouHere(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    const el1 = arr1[i];
    for (let j = 0; j < arr2.length; j++) {
      const el2 = arr2[j];
      if (el1 === el2) return true;
    }
  }
  return false;
}

// O(n^2)

function doubleArrayValues(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] *= 2;
  }
  return array;
}

// O(n)

function naiveSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return i;
    }
  }
}

// O(n) Simple sequitial search 

function createPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(arr[i] + ", " + arr[j]);
    }
  }
}

// O(n^2) Makes two numbers after each other

function compute(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {

    if (i === 1) {
      result.push(0);
    }
    else if (i === 2) {
      result.push(1);
    }
    else {
      result.push(result[i - 2] + result[i - 3]);
    }
  }
  return result;
}

// O(n) Fibonnaci numbers

function efficientSearch(array, item) {
  let minIndex = 0;
  let maxIndex = array.length - 1;
  let currentIndex;
  let currentElement;

  while (minIndex <= maxIndex) {
    currentIndex = Math.floor((minIndex + maxIndex) / 2);
    currentElement = array[currentIndex];

    if (currentElement < item) {
      minIndex = currentIndex + 1;
    }
    else if (currentElement > item) {
      maxIndex = currentIndex - 1;
    }
    else {
      return currentIndex;
    }
  }
  return -1;
}

// O(log(n)); Splits the search and 

function findRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// O(1)

function isWhat(n) {
  if (n < 2 || n % 1 !== 0) {
    return false;
  }
  for (let i = 2; i < n; ++i) {
    if (n % i === 0) return false;
  }
  return true;
}

// O(n) if prime or O(log(n)) if not prime

function makeHanoi() {
  return [
    [1, ' ', ' '],
    [2, ' ', ' '],
    [3, ' ', ' ']
  ];
}

// A 'disk' greater than a number can't move on 'top' of it. 

const toH = (arr) => {
  console.log(arr);
  let diskOne = arr[0][0];
  let diskTwo = arr[1][0];
  let diskThree = arr[2][0];
  let game = arr;
  
  //Game is finished when arr is 
  // [[' ', ' ', '1'], [' ', ' ', '2'], [' ', ' ', '3']];

  return diskOne + ' ' + diskTwo + ' ' + diskThree;
};

//console.log(toH(makeHanoi()));



const countSheep = (num) => {
  //if (num === 0) return 'All sheep jumped over the fence';
  //return `${num}: Another sheep jumps over the fence\n` + countSheep(num - 1);
  let result = "";
  for(let i = 0; i < num; i++  ){
    result += `${i+1}: Another sheep jumps over the fence\n`;
  }
  return result;
};

// Big O

console.log(countSheep(2));

const powerCalculator = (num, exp) => {
  if (exp < 0) return 0;
  if (exp === 0) return 1;
  if (exp === 1) return num;
  // let answer = powerCalculator(num, exp - 1);
  // return answer * num;
  let result = num;
  for(let i = 1; i < exp; i++){
    result*=result;
  }
  return result;
};
console.log(powerCalculator(10, 2));

const reverse= (str) => {
  if (str.length === 1 || 0) return str;
  let arr = [];
  for(let i = str.length; i >= 0; i--){
    arr.push(str[i]);
  }
  return arr.join('');
};
console.log(reverse('123-456'));

const triangulate = (num) => {
  if (num <= 0) return 0;
  if (num === 1) return num;
  //return num + triangulate(num - 1);
  let numHold = 0; 
  for(let i = 0; i < num; i++){
    numHold = numHold + (i + 1);
  }
  return numHold;
};
console.log(triangulate(5));

const strSplit = (str, char, result = []) => {
  if (str.indexOf(char) === -1) {
    result.push(str);
    return result;
  }
  let slice;
  let remaining = str;
  let index = str.indexOf(char);
  while(index !== -1){
    slice = remaining.slice(0, index);
    remaining = remaining.slice(index + 1);
    result.push(slice);
    slice = remaining;
    index = remaining.indexOf(char);
  }
  result.push(remaining);
  return result; 
};

console.log(strSplit('02/20/2020', '/'));

const fibber = (num) => {
  if (num === 0) return [0];
  if (num === 1) return [0, 1];
  // let seq = fibber(num - 1);
  // const num1 = seq[seq.length - 1];
  // const num2 = seq[seq.length - 2];
  // seq.push(num1 + num2);
  // return seq;
  let arr = [0, 1];
  for(let i = 2; i < num; i++){
    arr.push(arr[i-1]+arr[i-2]);
  }
  return arr;
};
console.log(fibber(10));

const factorial = (num) => {
  if (num === 0) return 0;
  if (num === 1) return num;
  let answer = num;
  // return answer * num;

  for(let i = num-1; i > 0; i--){
    console.log(i);
    answer = answer * (i);
  }
  console.log(answer);
  return answer;
};
console.log(factorial(5));
