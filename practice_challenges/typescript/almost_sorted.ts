import { test_case_almostsorted } from "./test_case_data"

const almostSorted = (arr: number[]): void => {
    const arrSort = [...arr]
    arrSort.sort((a, b) => a - b)
    let index = 0, isStart = false, lIndex = arr.length, rIndex = arr.length, swapNum = 0

    while (index < arr.length - 1) {
        const nextIndex = index + 1
        const num = arr[index]
        const nextNum = arr[nextIndex]

        if (num > nextNum) {
            if (!isStart) {
                lIndex = index
                swapNum = num
                isStart = true
            }
        }

        if (isStart && nextNum > swapNum) {
            rIndex = index
            break
        }

        index++
    }

    const isSorted = JSON.stringify(arr) === JSON.stringify(arrSort)
    if (isSorted) {
        console.log('yes')
        return
    }

    if (isStart && rIndex === arr.length) rIndex--
    let testArr = [...arr]
    testArr[lIndex] = arr[rIndex]
    testArr[rIndex] = arr[lIndex]

    const isSwap = JSON.stringify(testArr) === JSON.stringify(arrSort)
    if (isSwap) {
        console.log('yes')
        console.log(`swap ${lIndex + 1} ${rIndex + 1}`)
        return
    }

    testArr = arr.slice(0, lIndex)
        .concat(arr.slice(lIndex, rIndex + 1).reverse())
        .concat(arr.slice(rIndex + 1))

    const isReverse = JSON.stringify(testArr) === JSON.stringify(arrSort)
    if (isReverse) {
        console.log('yes')
        console.log(`reverse ${lIndex + 1} ${rIndex + 1}`)
        return
    }

    console.log('no')
}

// const almostSorted = (arr: number[]): void => {
//     const arrSort = [...arr]
//     let index = 1
//     let isStart = false
//     let lIndex = arr.length
//     let rIndex = arr.length
//     let swapNum = 0

//     while (index < arrSort.length) {
//         let currentIndex = index
//         let prevIndex = index - 1

//         while (prevIndex >= 0) {
//             const num = arrSort[currentIndex]
//             const prevNum = arrSort[prevIndex]
//             if (num < prevNum) {
//                 // console.log(num, prevNum, isStart)
//                 if (!isStart) {
//                     lIndex = prevIndex
//                     swapNum = prevNum
//                     isStart = true
//                 }
//                 arrSort[currentIndex] = prevNum
//                 arrSort[prevIndex] = num

//             } else {
//                 if (isStart && prevNum === swapNum) rIndex = prevIndex
//                 break
//             }

//             prevIndex--
//             currentIndex--
//         }

//         index++
//     }
//     const isSorted = JSON.stringify(arr) === JSON.stringify(arrSort)
//     if (isSorted) {
//         console.log('yes')
//         return
//     }

//     if (isStart && rIndex === arr.length) rIndex--
//     let testArr = [...arr]
//     testArr[lIndex] = arr[rIndex]
//     testArr[rIndex] = arr[lIndex]

//     // console.log(lIndex + 1, rIndex + 1)
//     // console.log(arr[lIndex])

//     const isSwap = JSON.stringify(testArr) === JSON.stringify(arrSort)
//     if (isSwap) {
//         console.log('yes')
//         console.log(`swap ${lIndex + 1} ${rIndex + 1}`)
//         return
//     }

//     testArr = arr.slice(0, lIndex).concat(arr.slice(lIndex, rIndex + 1).reverse()).concat(arr.slice(rIndex + 1))
//     const isReverse = JSON.stringify(testArr) === JSON.stringify(arrSort)
//     // console.log(testArr)
//     if (isReverse) {
//         console.log('yes')
//         console.log(`reverse ${lIndex + 1} ${rIndex + 1}`)
//         return
//     }

//     console.log('no')
// }


console.log(almostSorted([4, 2]))
console.log(almostSorted([3, 1, 2]))
console.log(almostSorted([1, 5, 4, 3, 2, 6]))
console.log(almostSorted(test_case_almostsorted))