/* Suppose you have an array of 101 integers. This array is already sorted and all 
numbers in this array are consecutive. Each number only occurs once in the array 
except one number which occurs twice. Write a js code to find the repeated number.
*/const yourArray = [1, 1, 2, 3, 4, 5, 5]

let duplicates = []

const tempArray = [...yourArray].sort()

for (let i = 0; i < tempArray.length; i++) {
  if (tempArray[i + 1] === tempArray[i]) {
    duplicates.push(tempArray[i]);
  }
}

console.log(duplicates);