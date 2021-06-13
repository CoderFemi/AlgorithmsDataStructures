const nonDivisibleSet = (divisor, arr) => {
    const sets = []
    const counter = {}
    let start = 0
    let next = 0
    // let maxLength = 0
    while (true) {
        if (start === arr.length - 1) break
        next++
        const numOne = arr[start]
        const numTwo = arr[next]
        const isNotDivisible = ((numOne + numTwo) % divisor) !== 0
        if (isNotDivisible) {
            if (!counter[numOne]) {
                let boolOne = true
                for (num in counter) {
                    if (((numOne + num) % divisor) === 0) {
                        boolOne = false
                    }
                }
                console.log(boolOne)
                if (boolOne) {
                    sets.push(numOne)
                }
                counter[numOne] = numOne
            }
            if (!counter[numTwo]) {
                let boolTwo = true
                for (num in counter) {
                    if (((numTwo + num) % divisor) === 0) {
                        boolTwo = false
                    }
                }
                if (boolTwo) {
                    sets.push(numTwo)
                }
                counter[numTwo] = numTwo
            }
        }
        if (next === arr.length - 1) {
            start++
            next = start
        }
    }
    console.log(sets)
    console.log(counter)
    return sets.length
}
// const nonDivisibleSet = (divisor, arr) => {
//     const sets = []
//     const counter = {}
//     let subSet = []
//     let start = 0
//     let next = 0
//     let maxLength = 0
//     while (true) {
//         if (start === arr.length - 1) break
//         next++
//         const numOne = arr[start]
//         const numTwo = arr[next]
//         const isNotDivisible = ((numOne + numTwo) % divisor) !== 0
//         if (isNotDivisible) {
//             if (sets.length) {
//                 sets.forEach(set => {
//                     if (next === start + 1) {
//                         const boolOne = set.every(setNum => (numOne !== setNum && ((numOne + setNum) % divisor) !== 0))
//                         if (boolOne && !counter[numOne]) {
//                             counter[numOne] = numOne
//                             set.push(numOne)
//                         } else if (!boolOne && !counter[numOne]) {
//                             // counter[numOne] = numOne
//                             subSet.push(numOne)
//                         }
//                     }
//                     const boolTwo = set.every(setNum => (numTwo !== setNum && ((numTwo + setNum) % divisor) !== 0))
//                     if (boolTwo && !counter[numTwo]) {
//                         counter[numTwo] = numTwo
//                         set.push(numTwo)
//                     } else if (!boolTwo && !counter[numTwo]) {
//                         // counter[numTwo] = numTwo
//                         subSet.push(numTwo)
//                     }
//                     if (set.length > maxLength) {
//                         maxLength = set.length
//                     }
//                 })
//             } else {
//                 sets.push([numOne, numTwo])
//             }
//         }
//         if (subSet.length) {
//             sets.push(subSet)
//             subSet = []
//         }
//         if (next === arr.length - 1) {
//             start++
//             next = start
//         }
//     }
//     console.log(sets)
//     return maxLength
// }

// console.log(nonDivisibleSet(4, [19, 10, 12, 10, 24, 25, 22]))
console.log(nonDivisibleSet(7, [278, 576, 496, 727, 410, 124, 338, 149, 209, 702, 282, 718, 771, 575, 436]))
// console.log(nonDivisibleSet(3, [1, 7, 2, 4]))

// const nonDivisibleSet = (divisor, arr) => {
//     let sets = []
//     for (let i = 0; i < arr.length - 1; i++) {
//         const subSet = []
//         let counter = {}
//         for (let j = i + 1; j < arr.length; j++) {
//             const numOne = arr[i]
//             const numTwo = arr[j]
//             const notDivisible = (numOne + numTwo) % divisor !== 0
//             if (notDivisible) {
//                 if (counter[numOne] === undefined) {
//                     counter[numOne] = numOne
//                     subSet.push(numOne)
//                 }
//                 if (counter[numTwo] === undefined) {
//                     counter[numTwo] = numTwo
//                     subSet.push(numTwo)
//                 }
//             }
//         }
//         sets[i] = subSet
//     }
// }

