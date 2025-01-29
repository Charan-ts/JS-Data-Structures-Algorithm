/*  Binary Search
    Binary search is an efficient algorithm for finding a target value in a sorted array. 
    It works by repeatedly dividing the search interval in half, discarding the half where the target cannot lie. 
    Binary search is highly efficient with a time complexity of O(log n), but it requires the dataset to be sorted.

    Use Cases:
    1. Large, sorted datasets.
    2. Applications requiring fast search operations, such as databases.
    3. Situations where multiple searches are performed on static data.
*/

// Binary Search
function binarySearch(array, num) {
  // Checking array length
  if (array.length === 0) return -1
  // Setting start and end index based on array length
  let start = 0
  let end = array.length - 1
  // Looping until start index is less than or equal to end index
  while (start <= end) {
    // Splitting the array into two halves in each iteration
    let mid = Math.floor((start + end) / 2)
    // If the number is found at mid index, return mid index
    if (array[mid] === num) return mid
    // If the number is greater than mid element, search in the right half
    else if (num > array[mid]) start = mid + 1
    // If the number is less than mid element, search in the left half
    else end = mid - 1
  }
  return -1 // If the number is not found, return -1
}

// Recursive Binary Search
function binaryRecursive(array, num, start, end) {
  // Checking if start index is less than or equal to end index
  if (start <= end) {
    // Splitting the array into two halves in each iteration
    const mid = Math.floor((start + end) / 2)
    // If the number is found at mid index, return mid index
    if (num === array[mid]) return mid
    // If the number is greater than mid element, search in the right half
    else if (num > array[mid]) return binaryRecursive(array, num, mid + 1, end)
    // If the number is less than mid element, search in the left half
    else return binaryRecursive(array, num, start, mid - 1)
  }
  // If the number is not found, return -1
  return -1
}

console.log(binarySearch([1, 2, 3, 4, 5], 2)) // 1
console.log(binarySearch([1, 2, 3, 4, 5], 3)) // 2
console.log(binarySearch([1, 2, 3, 4, 5], 5)) // 4
console.log(binarySearch([1, 2, 3, 4, 5], 6)) // -1
console.log(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    10
  )
) // 2
console.log(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    95
  )
) // 16
console.log(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    100
  )
) // -1

console.log(binaryRecursive([1, 2, 3, 4, 5], 2, 0, 4)) // 1
console.log(binaryRecursive([1, 2, 3, 4, 5], 3, 0, 4)) // 2
