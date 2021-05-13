
const pivot = (arr, start = 0, end = arr.length - 1) => {
    const swap = (arr, indexOne, indexTwo) => {
        [arr[indexOne], arr[indexTwo]] = [arr[indexTwo], arr[indexOne]]
    }
    // Assuming the pivot is always the first element
    let pivot = arr[start]
    let swapIdx = start

    for (let i = start + 1; i <= end; i++) {
        if (pivot > arr[i]) {
            swapIdx++
            swap(arr, swapIdx, i)
        }
    }
    // Swap the pivot from the start to the swapPoint
    swap(arr, start, swapIdx)
    return swapIdx
}


function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right)
        quickSort(arr, left, pivotIndex - 1)
        quickSort(arr, pivotIndex + 1, right)
    }
    return arr
}
const numbers = [48,84,67,5,18,5,7,2,68,15,7,6,3,1,4,57,83,248,38,4,5,3,548,35,41,93,3,1,8,2,5,8,16,85423]
const result = quickSort(numbers)
console.log(result)