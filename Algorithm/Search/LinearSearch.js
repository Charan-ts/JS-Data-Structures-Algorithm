/*  Linear Search
    Linear search is the simplest searching algorithm. 
    It sequentially checks each element in a list until it finds the target value or reaches the end of the list. 
    Linear search works on both sorted and unsorted lists, making it versatile but inefficient for large datasets due to its O(n) time complexity.
    
    Use Cases:
    1. Small, unsorted datasets.
    2. Situations where simplicity is more important than efficiency..
    3. Lists that are frequently updated, making sorting impractical.
*/

function linearSearch(array, num) {
  // Loop through each element in the array
  for (let i = 0; i < array.length; i++) {
    // If the element is equal to the number, return the index
    if (array[i] === num) return i
  }
  // If the number is not found, return -1
  return -1
}

console.log(linearSearch([10, 15, 20, 25, 30], 15)) // 1
console.log(linearSearch([100], 100)) // 0
console.log(linearSearch([1, 2, 3, 4, 5], 6)) // -1
console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4)) // 5
console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10)) // -1
console.log(linearSearch([100], 200)) // -1
