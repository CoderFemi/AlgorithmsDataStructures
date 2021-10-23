import { test_case_homework } from "./test_case_data"

const lilysHomework = (arr: number[]): number => {
    let numSwaps = 0
    let numSwapsTwo = 0
    const sortedArr = [...arr].sort((a, b) => a - b)
    const reversedArr = [...arr].reverse()
    const counterOne: { [key: number]: number } = {}
    const counterTwo: { [key: number]: number } = {}

    for (let index in arr) {
        const num = arr[index]
        counterOne[num] = parseInt(index)
        const numTwo = reversedArr[index]
        counterTwo[numTwo] = parseInt(index)
    }

    for (let index = 0; index < arr.length; index++) {
        const swapOne = sortedArr[index]
        const swapTwo = arr[index]
        const swapIndex = counterOne[swapOne]

        if (swapOne !== swapTwo) {
            arr[index] = swapOne
            arr[swapIndex] = swapTwo
            counterOne[swapOne] = index
            counterOne[swapTwo] = swapIndex
            numSwaps++
        }

        const swapThree = reversedArr[index]
        const swapIndexTwo = counterTwo[swapOne]

        if (swapOne !== swapThree) {
            reversedArr[index] = swapOne
            reversedArr[swapIndexTwo] = swapThree
            counterTwo[swapOne] = index
            counterTwo[swapThree] = swapIndexTwo
            numSwapsTwo++
        }
    }

    return numSwaps < numSwapsTwo ? numSwaps : numSwapsTwo
}

// const lilysHomework = (arr: number[]): number => {
//     let numSwaps = 0
//     const sortedArr = [...arr].sort((a, b) => a - b)
//     const counter: { [key: number]: number } = {}
//     for (let index in arr) {
//         const num = arr[index]
//         counter[num] = parseInt(index)
//     }

//     for (let index = 0; index < arr.length - 2; index++) {
//         const swapOne = sortedArr[index]
//         const swapTwo = arr[index]
//         const swapIndex = counter[swapOne]

//         if (swapOne !== swapTwo) {
//             arr[index] = swapOne
//             arr[swapIndex] = swapTwo
//             counter[swapOne] = index
//             counter[swapTwo] = swapIndex
//             numSwaps++
//         } else {
//             console.log('noswap:', swapOne, swapTwo)
//         }
//     }

//     return numSwaps
// }


console.log(lilysHomework([7, 15, 12, 3]))
console.log(lilysHomework([2, 5, 3, 1]))
console.log(lilysHomework(test_case_homework))