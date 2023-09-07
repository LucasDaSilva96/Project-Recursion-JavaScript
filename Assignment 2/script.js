/* Merge sort
This is the recursive mergeSort function.
The function splits the array as evenly as possible, then select the left and right
subarray, then split the subarray as evenly ass possible, then select the left and right subarray until
the subarray.length is <= 2, then the merge is ready to occur, the merge
select the minimum of the two values, then add the value to the sorted array in the right order
*/
function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

// This function is for merge the array in the right order
function merge(leftArr, rightArr) {
  const sortArr = [];

  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortArr.push(leftArr.shift());
    } else {
      sortArr.push(rightArr.shift());
    }
  }

  return [...sortArr, ...leftArr, ...rightArr];
}

const ARR = [5, 4, 8, 6, 3, 4, 1, 2];

console.log(mergeSort(ARR));
