// Merge helper function
const merge = (arrOne, arrTwo) => {
    let results = []
    let i = 0
    let j = 0
    while (i < arrOne.length && j < arrTwo.length) {
        if (arrTwo[j] > arrOne[i]) {
            results.push(arrOne[i])
            i++
        } else {
            results.push(arrTwo[j])
            j++
        }
    }
    while (i < arrOne.length) {
        results.push(arrOne[i])
        i++
    }
    while (j < arrTwo.length) {
        results.push(arrTwo[j])
        j++
    }
    return results
}

// Recursive Merge Sort
const mergeSort = (arr) => {
    if (arr.length <= 1) return arr
    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right)
}

const numbers = [5,9,3,6,8,28,28,7,2,8,585,2,852,5,245,55,55,278,25,74,25,15,95,18,68,8,565,55,358,2,6,2,8,56]
const result = mergeSort(numbers)
console.log(result)
