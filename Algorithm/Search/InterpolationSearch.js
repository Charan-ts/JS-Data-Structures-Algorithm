/*  Interpolation Search
    Interpolation search is an algorithm for searching in uniformly distributed sorted arrays. 
    It improves upon binary search by estimating the position of the target based on the values at the low and high indices. 
    Interpolation search can outperform binary search for large, uniformly distributed datasets, with a time complexity of O(log log n) in the best case.

    Use Cases:
    1. Searching in large, uniformly distributed datasets.
    2. Applications where binary search is not efficient due to uniform distribution.

    The Formula for this is ***derived from the equation of a straight line*** in the slope-intercept form:
    
             (x - x1) * (y2 - y1)
    y = y1 + --------------------
                  (x2 - x1)


    target = x, pos = y, low = y1, high = y2, arr[low] = x1, arr[high] = x2

                (target - arr[low]) * (high - low)
    pos = low + ----------------------------------
                    (arr[high] - arr[low])
*/

const interpolationSearch = (arr, target) => {
  // set low and high indices
  let low = 0
  let high = arr.length - 1

  // Perform interpolation search in while loop check if the target is in the range of low and high indices
  while (low <= high && arr[low] <= target && arr[high] >= target) {
    // Avoid division by zero
    if (arr[low] === arr[high]) {
      if (arr[low] === target) return low
      else return -1
    }

    // Calculate the position using the formula equation of a straight line
    const pos =
      low +
      Math.floor(((target - arr[low]) * (high - low)) / (arr[high] - arr[low]))

    // If the target is found at the calculated position, return the position
    if (arr[pos] === target) return pos
    // If the target is greater than the value at the calculated position, update the low index
    else if (arr[pos] < target) low = pos + 1
    // If the target is less than the value at the calculated position, update the high index
    else high = pos - 1
  }
  // If the target is not found, return -1
  return -1
}

const interpolationSearchRecursive = (
  arr,
  target,
  low = 0,
  high = arr.length - 1
) => {
  // Perform interpolation search in recursive function check if the target is in the range of low and high indices
  if (low > high || arr[low] > target || arr[high] < target) return -1

  // Avoid division by zero
  if (arr[low] === arr[high]) {
    return arr[low] === target ? low : -1
  }

  // Calculate the position using the formula equation of a straight line
  const pos =
    low +
    Math.floor(((target - arr[low]) * (high - low)) / (arr[high] - arr[low]))

  // If the target is found at the calculated position, return the position
  if (arr[pos] === target) return pos
  // If the target is greater than the value at the calculated position, call the recursive function by updating the low index
  if (arr[pos] < target)
    return interpolationSearchRecursive(arr, target, pos + 1, high)
  // If the target is less than the value at the calculated position, call the recursive function by updating the high index
  return interpolationSearchRecursive(arr, target, low, pos - 1)
}

const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90]
console.log(interpolationSearch(arr, 40)) // Output: 3 (index)
console.log(interpolationSearch(arr, 95)) // Output: -1 (not found)
console.log(interpolationSearch(arr, 10)) // Output: 0 (first index)
console.log(interpolationSearch(arr, 90)) // Output: 8 (last index)
console.log(interpolationSearch([1, 2, 4, 8, 16, 32, 64, 128], 32)) // Output: 5
