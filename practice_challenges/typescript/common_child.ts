
const commonChild = (strOne: string, strTwo: string): number => {
    interface Counter {
        [key: string]: number[]
    }
    const counter: Counter = {}
    for (let index = 0; index < strTwo.length; index++) {
        const char = strTwo[index]
        if (counter[char] === undefined) counter[char] = []
        counter[char] = [...counter[char], index]
    }
    let counterCopy: Counter = JSON.parse(JSON.stringify(counter))
    let subStrArr: string[] = []
    let subStr: string[] = []
    let prevIndexTwo = 0
    const arr = counterCopy[strOne[0]]
    let subStrStartIndex = 0
    if (arr !== undefined) subStrStartIndex = arr[0]
    let isStart = true
    let count = 0
    let lastStop = 0
    let indexOne = 0

    while (true) {
        if (indexOne === strOne.length) {
            subStrArr.push(subStr.join(''))
            break
        }

        const charOne = strOne[indexOne]
        let matchIndex = -1
        let searchIndex = -1
        let searchArr = counterCopy[charOne]

        if (searchArr !== undefined) {
            for (let index in searchArr) {
                if (searchArr[index] !== -1) {
                    matchIndex = searchArr[index]
                    searchIndex = parseInt(index)
                    break
                }
            }
        }

        // console.log('prev:', prevIndexTwo, 'last:', lastStop, 'subst:', subStrStartIndex)

        if (searchIndex !== -1) counterCopy[charOne][searchIndex] = -1
        if (matchIndex !== -1) {
            if (matchIndex < prevIndexTwo && matchIndex >= subStrStartIndex) {
                const char = subStr.pop()
                subStr.push(charOne)

                searchArr = counter[char]
                let searchIndex = -1
                for (let index in searchArr) {
                    if (searchArr[index] === prevIndexTwo) {
                        searchIndex = parseInt(index)
                        break
                    }
                }
                counterCopy[char][searchIndex] = prevIndexTwo

            } else if (matchIndex > prevIndexTwo) {
                if (isStart) {
                    if (count === 0) {
                        lastStop = matchIndex
                    }
                    if (count === 1) {
                        isStart = false
                    }
                }
                subStr.push(charOne)

            } else if (matchIndex === prevIndexTwo) {
                if (indexOne !== matchIndex) {
                    const matchIndexNext = searchArr[searchIndex + 1]
                    if (matchIndex) {
                        subStr.push(charOne)
                        counterCopy[charOne][searchIndex + 1] = -1
                        matchIndex = matchIndexNext
                    }
                } else subStr.push(charOne)
            }
            // console.log(charOne, lastStop, prevIndexTwo)
            if (count > 1 && matchIndex > prevIndexTwo) {
                for (let i = lastStop; i <= prevIndexTwo; i++) {
                    const char = strTwo[i]
                    searchArr = counterCopy[char]
                    let searchIndex = -1
                    for (let index in searchArr) {
                        if (searchArr[index] === i) {
                            searchIndex = parseInt(index)
                            break
                        }
                    }
                    if (searchIndex !== -1) counterCopy[char][searchIndex] = -1
                }

                // if (!isLowerIndex) lastStop = prevIndexTwo
                lastStop = prevIndexTwo
            }

            if (matchIndex < subStrStartIndex && matchIndex > 0) {
                subStrArr.push(subStr.join(''))
                subStr = [charOne]
                subStrStartIndex = matchIndex
                lastStop = subStrStartIndex
                count = 0
                isStart = true
                counterCopy = JSON.parse(JSON.stringify(counter))
            }
            // console.log(subStrStartIndex)
            // if (!isLowerIndex) prev/IndexTwo = matchIndex
            if (matchIndex !== prevIndexTwo) prevIndexTwo = matchIndex
        }

        // console.log(charOne, 'match:', matchIndex)
        // console.log(counterCopy)
        // console.log(subStr)
        count++
        indexOne++
    }

    // console.log(subStrArr)
    let maxLen = 0
    subStrArr.forEach(str => str.length > maxLen ? maxLen = str.length : maxLen)

    return maxLen
}


// const commonChild = (strOne: string, strTwo: string): number => {
//     interface Counter {
//         [key: string]: number[]
//     }
//     const counterOne: Counter = {}
//     const counterTwo: Counter = {}
//     let counterOneCopy: Counter = {}
//     let counterTwoCopy: Counter = {}
//     let diffOneStr = ''
//     let diffTwoStr = ''
//     let prevIndexOne = 0
//     let prevIndexTwo = 0
//     const subStrArrOne: string[] = []
//     const subStrArrTwo: string[] = []
//     let strTestOne = '', strTestTwo = ''

//     for (let index = 0; index < strOne.length; index++) {
//         const charOne = strOne[index]
//         if (counterOne[charOne] === undefined) counterOne[charOne] = []
//         counterOne[charOne] = [...counterOne[charOne], index]
//         if (counterOneCopy[charOne] === undefined) counterOneCopy[charOne] = []
//         counterOneCopy[charOne] = [...counterOneCopy[charOne], index]

//         const charTwo = strTwo[index]
//         if (counterTwo[charTwo] === undefined) counterTwo[charTwo] = []
//         counterTwo[charTwo] = [...counterTwo[charTwo], index]
//         if (counterTwoCopy[charTwo] === undefined) counterTwoCopy[charTwo] = []
//         counterTwoCopy[charTwo] = [...counterTwoCopy[charTwo], index]
//     }

//     for (let index = 0; index < strOne.length; index++) {
//         let matchIndex = -1
//         let searchIndex = 0
//         let searchArr = []

//         const charOne = strOne[index]
//         searchArr = counterTwoCopy[charOne]
//         if (searchArr !== undefined) {
//             strTestOne += charOne
//             for (let index in searchArr) {
//                 if (searchArr[index] !== -1) {
//                     matchIndex = searchArr[index]
//                     searchIndex = parseInt(index)
//                     break
//                 }
//             }
//         }
//         // console.log(charOne, matchIndex, prevIndexOne)
//         // console.log(counterTwoCopy)
//         if (matchIndex !== -1) {
//             if (matchIndex < prevIndexOne) {
//                 subStrArrOne.push(diffOneStr)
//                 diffOneStr = ''
//                 counterTwoCopy = counterTwo
//             }
//             diffOneStr += charOne
//             prevIndexOne = matchIndex
//             counterTwoCopy[charOne][searchIndex] = -1
//         }
//         // console.log(diffOneStr, subStrArrOne)

//         matchIndex = -1
//         searchIndex = 0
//         searchArr = []

//         const charTwo = strTwo[index]
//         searchArr = counterOneCopy[charTwo]
//         if (searchArr !== undefined) {
//             strTestTwo += charTwo
//             for (let index in searchArr) {
//                 if (searchArr[index] !== -1) {
//                     matchIndex = searchArr[index]
//                     searchIndex = parseInt(index)
//                     break
//                 }
//             }
//         }
//         // console.log(charTwo, matchIndex, prevIndexTwo)
//         // console.log(counterOneCopy)
//         if (matchIndex !== -1) {
//             if (matchIndex < prevIndexTwo) {
//                 subStrArrTwo.push(diffTwoStr)
//                 diffTwoStr = ''
//                 counterOneCopy = counterOne
//             }
//             diffTwoStr += charTwo
//             prevIndexTwo = matchIndex
//             counterOneCopy[charTwo][searchIndex] = -1
//         }
//         // console.log(diffTwoStr, subStrArrTwo)



//     }
//     subStrArrOne.push(diffOneStr)
//     subStrArrTwo.push(diffTwoStr)
//     console.log(strTestOne, strTestTwo)
//     console.log(subStrArrOne, subStrArrTwo)
//     let maxLen = 0
//     subStrArrOne.forEach(str => str.length > maxLen ? maxLen = str.length : maxLen)
//     subStrArrTwo.forEach(str => str.length > maxLen ? maxLen = str.length : maxLen)

//     return maxLen
// }



// console.log(commonChild('ABCD', 'ABDC'))
// console.log(commonChild('HARRY', 'SALLY'))
// console.log(commonChild('SHINCHAN', 'NOHARAAA'))
// console.log(commonChild('ABCDEF', 'FBDAMN'))
console.log(commonChild('WEWOUCUIDGCGTRMEZEPXZFEJWISRSBBSYXAYDFEJJDLEBVHHKS', 'FDAGCXGKCTKWNECHMRXZWMLRYUCOCZHJRRJBOAJOQJZZVUYXIC'))
console.log(commonChild('ELGGYJWKTDHLXJRBJLRYEJWVSUFZKYHOIKBGTVUTTOCGMLEXWDSXEBKRZTQUVCJNGKKRMUUBACVOEQKBFFYBUQEMYNENKYYGUZSP', 'FDAGCXGKCTKWNECHMRXZWMLRYUCOCZHJRRJBOAJOQJZZVUYXIC'))

// const strOne = 'WEWOUCUIDGCGTRMEZEPXZFEJWISRSBBSYXAYDFEJJDLEBVHHKS'
// const strTwo = 'FDAGCXGKCTKWNECHMRXZWMLRYUCOCZHJRRJBOAJOQJZZVUYXIC'
// const counter = {}
// for (let i = 0; i < strOne.length; i++) {
//     const charOne = strOne[i]
//     const charTwo = strTwo[i]
//     if (counter[charOne] === undefined) {
//         counter[charOne] = [0, 0]
//     }
//     if (counter[charTwo] === undefined) {
//         counter[charTwo] = [0, 0]
//     }
//     counter[charOne][0] = counter[charOne][0] + 1
//     counter[charTwo][1] = counter[charTwo][1] + 1
// }

// console.log(counter)

// const setOne = [...new Set(strOne)]
// const setTwo = [...new Set(strTwo)]

// const countOne = setOne.map(char => {
//     let count = 0
//     for (let letter of strOne) {
//         if (letter === char) count++
//     }
//     return count
// })
// const countTwo = setTwo.map(char => {
//     let count = 0
//     for (let letter of strTwo) {
//         if (letter === char) count++
//     }
//     return count
// })
