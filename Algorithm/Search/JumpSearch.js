/*  Jump Search
    Jump search is a searching algorithm for sorted arrays. 
    It works by jumping ahead by fixed steps and then performing a linear search within a smaller segment. 
    The optimal step size is usually the square root of the array length. 
    Jump search offers a time complexity of O(√n), making it a good compromise between linear and binary search.

    Use Cases:
    1. Sorted datasets where binary search is too complex.
    2. Cases where an efficient search algorithm is needed without the overhead of binary search.
*/

const jumpSearch = (arr, target) => {
  // Get the length of the array, If the array is empty, return -1
  const n = arr.length
  if (n === 0) return -1

  // Calculate the optimal step size based on the square root of the array length
  const step = Math.floor(Math.sqrt(n))
  // Initialize the previous and current steps
  let prevStep = 0
  let currStep = step

  // Perform a linear search within the smaller segment
  while (arr[Math.min(currStep, n) - 1] < target) {
    // Update the previous and current steps
    prevStep = currStep
    // Increment the current step by the step size
    currStep += step

    // If the previous step is greater than or equal to the length of the array, return -1
    if (prevStep >= n) return -1
  }

  // Perform a linear search within the smaller segment once the target is found in between the previous and current steps
  for (let i = prevStep; i < Math.min(currStep, n); i++) {
    if (arr[i] === target) return i
  }

  // If the target is not found return -1,
  return -1
}

const jumpSearchRecursive = (
  arr,
  target,
  prev = 0,
  step = Math.floor(Math.sqrt(arr.length)) // Calculate the optimal step size based on the square root of the array length
) => {
  // Get the length of the array, If the previous step is greater than or equal to the length of the array, return -1
  const n = arr.length
  if (prev >= n) return -1

  // when the target is found in between the previous and current steps
  if (arr[Math.min(step, n) - 1] >= target) {
    // Perform a linear search within the smaller segment once the target is found in between the previous and current steps
    for (let i = prev; i < Math.min(step, n); i++) {
      if (arr[i] === target) return i
    }
    return -1
  }

  // Update the previous and current steps and call the function recursively
  return jumpSearchRecursive(arr, target, step, step + Math.floor(Math.sqrt(n)))
}

console.log(
  jumpSearch([0, 1, 1, 2, 3, 5, 8, 13, 21, 55, 77, 89, 101, 201, 256, 780], 77)
) // 10 (index)
console.log(jumpSearch([0, 1, 2, 3, 6, 8, 13, 20, 40, 55, 60, 68, 90, 96], 96)) // 13 (index)
console.log(jumpSearch([1, 2, 4, 4, 6, 8], 4)) // 2 (index)
console.log(jumpSearch([0, 1, 2, 3], 4)) // -1 (index)
