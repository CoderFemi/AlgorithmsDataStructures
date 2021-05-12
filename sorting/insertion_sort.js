const insertionSort = (arr) => {
    let currentVal
    for (let i = 1; i < arr.length; i++) {
        currentVal = arr[i]
        let j
        for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j]
        }
        arr[j + 1] = currentVal
    }
    return arr
}

const result = insertionSort([96, 24, 15, 7, 1, 17, 45, 8, 2, 9, 11, 55, 87])
console.log(result)