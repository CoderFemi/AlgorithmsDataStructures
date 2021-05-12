const bubbleSort = (arr) => {
    let count = 0
    for (let i = arr.length - 1; i > 0; i--) {
        let noSwap = true
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
                noSwap = false
            }
        }
        count++
        if (noSwap) break
    }
    console.log(count)
    return arr
}

const result = bubbleSort([96, 24, 15, 7, 1, 17, 45, 8, 2, 9, 11, 55, 87])
console.log(result)