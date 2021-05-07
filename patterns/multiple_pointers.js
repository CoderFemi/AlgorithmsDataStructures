const countUniqueValues = (arr) => {
    if (arr.length === 0) {
        return arr.length
    }
    let i = 0
    let j = 1
    while (j < arr.length) {
        if (arr[i] !== arr[j]) {
            i++
            arr[i] = arr[j]
        }
        j++
    }
    return i + 1
}

// This solution uses a frequency counter. Not suitable for this pattern.
const countUniqueValuesAlternative = (arr) => {
    if (arr.length === 0) {
        return arr.length
    }
    const pointer = {}
    let count = 0
    let i = 0
    while (i < arr.length) {
        const num = arr[i]
        if (pointer[num] === undefined) {
            count++
        }
        pointer[num] = pointer[num] + 1 || 1
        i++
    }
    return count
}

const length = countUniqueValues([1, 1, 1, 1, 2, 2, 3, 4, 5, 5, 5, 6, 6, 6, 6, 7, 8, 9, 9, 9, 9, 10])

console.log(length)