
const activityNotifications = (expenditure: number[], days: number): number => {

    let notifications = 0
    const maxNum = Math.max(...expenditure)
    const counter = Array(maxNum + 1).fill(0)
    const cumulative = expenditure.slice(0, days).sort((a, b) => a - b)
    const midPoint = Math.floor(days / 2)
    let cumFrequency = 0
    for (let num of cumulative) {
        counter[num] += 1
        if (cumFrequency < midPoint) {
            cumFrequency += counter[num]
        }
    }
    let medianOne = cumulative[midPoint]
    let medianTwo = cumulative[midPoint - 1]
    let startCumIndex = 0
    let currentExpIndex = days

    for (currentExpIndex; currentExpIndex < expenditure.length; currentExpIndex++) {
        const currentExp = expenditure[currentExpIndex]
        const startCumExpense = expenditure[startCumIndex]
        let median = 0

        if (days % 2 === 0) {
            median = (medianOne + medianTwo) / 2
        } else {
            median = medianOne
        }

        if (currentExp >= median * 2) notifications++

        // console.log(counter)
        // console.log(medianTwo, medianOne, cumFrequency)

        if (currentExp > medianOne) {
            // const frequency = counter[medianOne]
            medianTwo = medianOne
            if (cumFrequency <= midPoint) {
                let index = medianOne + 1
                while (index < counter.length) {
                    const num = counter[index]
                    if (num !== 0) {
                        medianOne = index
                        break
                    }
                    index++
                }
            }
            cumFrequency -= 1

        } else if (currentExp === medianOne) {
            cumFrequency += 1

        } else {
            if (currentExp > medianTwo) {
                let index = medianTwo + 1
                while (index < counter.length) {
                    const num = counter[index]
                    if (num !== 0) {
                        medianTwo = index
                        break
                    }
                    index++
                }
            }
            cumFrequency += 1
        }

        counter[startCumExpense] -= 1
        counter[currentExp] += 1
        startCumIndex++
    }

    return notifications
}


// const activityNotifications = (expenditure: number[], days: number): number => {

//     let notifications = 0
//     const maxNum = Math.max(...expenditure)
//     const counter = Array(maxNum + 1).fill(0)
//     const cumulative = expenditure.slice(0, days).sort((a, b) => a - b)
//     for (let num of cumulative) {
//         counter[num] += 1
//     }
//     const midPoint = Math.ceil(days / 2)
//     let medianOne = 0
//     let medianTwo = 0
//     let startCumIndex = 0
//     let currentExpIndex = days

//     for (currentExpIndex; currentExpIndex < expenditure.length; currentExpIndex++) {
//         const currentExp = expenditure[currentExpIndex]
//         const startCumExpense = expenditure[startCumIndex]
//         let median = 0
//         let cumFrequency = 0
//         let hasOccured = false

//         for (let index in counter) {
//             const num = counter[index]
//             if (num !== 0) {
//                 cumFrequency += num
//                 if (days % 2 === 1) {
//                     if (cumFrequency >= midPoint) {
//                         medianOne = parseInt(index)
//                         break
//                     }
//                 } else {
//                     if (cumFrequency > midPoint - 1) {
//                         if (!hasOccured) {
//                             medianTwo = parseInt(index)
//                             hasOccured = true
//                         }
//                     }
//                     if (cumFrequency > midPoint) {
//                         medianOne = parseInt(index)
//                         break
//                     }
//                 }
//             }
//         }

//         if (days % 2 === 0) {
//             median = (medianOne + medianTwo) / 2
//         } else {
//             median = medianOne
//         }

//         if (currentExp >= median * 2) notifications++

//         counter[startCumExpense] -= 1
//         counter[currentExp] += 1
//         startCumIndex++
//     }

//     return notifications
// }

// const activityNotifications = (expenditure: number[], days: number): number => {

//     let notifications = 0
//     const cumulative = expenditure.slice(0, days).sort((a, b) => a - b)

//     // console.log(cumulative)
//     for (let index = days; index < expenditure.length; index++) {
//         const currentExp = expenditure[index]
//         const midIndex = Math.floor(cumulative.length / 2)
//         let median = cumulative[midIndex]

//         if (cumulative.length % 2 === 0) {
//             median = (median + cumulative[midIndex - 1]) / 2
//         }

//         if (currentExp >= median * 2) notifications++

//         cumulative.push(currentExp)
//         const removeNum = expenditure[index - days]
//         let isRemoved = false

//         for (let index = cumulative.length - 1; index > 0; index--) {
//             const num = cumulative[index]
//             const prevNum = cumulative[index - 1]

//             if (num < prevNum) {
//                 cumulative[index] = prevNum
//                 cumulative[index - 1] = num
//             }

//             if (!isRemoved && removeNum === prevNum) {
//                 cumulative.splice(index - 1, 1)
//                 isRemoved = true
//             }
//         }
//         // console.log(cumulative)
//     }

//     return notifications
// }


console.log(activityNotifications([2, 3, 4, 2, 3, 6, 8, 4, 5], 5))
console.log('===========================')
console.log(activityNotifications([1, 2, 3, 4, 4], 4))
console.log('===========================')
console.log(activityNotifications([10, 20, 30, 40, 50], 3))