import { test_case_palindrome, test_case_palindrome_result } from './test_case_data'


const highestValuePalindrome = (str: string, strLen: number, numChanges: number): string => {
    const strArr = str.split('')
    const isOddStr = strLen % 2 === 1
    const mid = Math.floor(strLen / 2)
    let start = mid - 1
    let end = mid
    if (isOddStr) {
        end = mid + 1
    }

    let startIndex = 0
    let endIndex = strLen - 1
    while (true) {
        const isOddChanges = numChanges % 2 === 1
        const left = str[startIndex]
        const right = str[endIndex]
        const isNine = left !== '9' || right !== '9'
        const isEqual = left === right

        if (isOddStr && isEqual && numChanges === 1) {
            strArr[mid] = '9'
            numChanges--
            break
        }

        if (isNine) {
            if (left === '9') {
                strArr[endIndex] = '9'
                numChanges--
            } else if (right === '9') {
                strArr[startIndex] = '9'
                numChanges--
            } else if (isEqual && numChanges >= 2) {
                strArr[startIndex] = '9'
                strArr[endIndex] = '9'
                numChanges -= 2
            } else if (left > right) {
                if (numChanges >= 2) {
                    strArr[startIndex] = '9'
                    strArr[endIndex] = '9'
                    numChanges -= 2
                } else {
                    strArr[endIndex] = left
                    numChanges--
                }
            } else if (right > left) {
                if (numChanges >= 2) {
                    strArr[startIndex] = '9'
                    strArr[endIndex] = '9'
                    numChanges -= 2
                } else {
                    strArr[startIndex] = right
                    numChanges--
                }
            }

        }

        if (numChanges === 0 || startIndex === start || endIndex === end) {
            if (numChanges > 0) {
                if (isOddChanges && isOddStr) {
                    strArr[mid] = '9'
                    numChanges--
                }

                if (!isOddChanges) {
                    while (numChanges > 0) {
                        strArr[start] = '9'
                        strArr[end] = '9'
                        numChanges--
                        start--
                        end++
                    }
                }
            }
            break
        }

        startIndex++
        endIndex--
    }

    const reversedArr = [...strArr].reverse()
    const isPalindrome = strArr.every((char, index) => char === reversedArr[index])
    if (isPalindrome) {
        return strArr.join('')
    }

    return '-1'
}



// const highestValuePalindrome = (str: string, strLen: number, numChanges: number): string => {
//     const strArr = str.split('')
//     const isOddStr = strLen % 2 === 1
//     const mid = Math.floor(strLen / 2)
//     let start = mid - 1
//     let end = mid
//     if (isOddStr) end = mid + 1

//     let startIndex = start
//     let endIndex = end
//     while (true) {
//         if (numChanges === 0 || startIndex < 0 || endIndex > strLen - 1) break

//         const left = str[startIndex]
//         const right = str[endIndex]
//         const isEqual = left === right

//         if (numChanges === 1) {
//             if (isEqual) {
//                 // console.log('HERE1')
//                 if (isOddStr) {
//                     strArr[mid] = '9'
//                     numChanges--
//                 }
//             } else {
//                 if (left > right) {
//                     // console.log('HERE2')
//                     strArr[endIndex] = left
//                     numChanges--
//                 } else if (right > left) {
//                     // console.log('HERE3')
//                     strArr[startIndex] = right
//                     numChanges--
//                 }
//             }
//         } else if (numChanges === 2) {
//             if (left !== '9') {
//                 // console.log('HERE10')
//                 strArr[startIndex] = '9'
//                 numChanges--
//             }
//             if (right !== '9') {
//                 // console.log('HERE11')
//                 strArr[endIndex] = '9'
//                 numChanges--
//             }
//         } else if (numChanges > 2) {
//             // console.log('HERE4')
//             // if (!isEqual) {
//             if (left > right) {
//                 // console.log('HERE5')
//                 strArr[endIndex] = left
//                 numChanges--
//             } else if (right > left) {
//                 // console.log('HERE6')
//                 strArr[startIndex] = right
//                 numChanges--
//             }
//             // }
//         }


//         startIndex--
//         endIndex++
//     }

//     startIndex = 0
//     endIndex = strLen - 1
//     while (true) {
//         if (numChanges === 0 || startIndex > start || endIndex < end) break

//         const left = str[startIndex]
//         const right = str[endIndex]
//         const isEqual = left === right

//         if (isEqual) {
//             if (numChanges < 2) {
//                 // console.log('HERE7')
//                 if (isOddStr) {
//                     strArr[mid] = '9'
//                     numChanges--
//                 }

//             } else {
//                 if (left !== '9') {
//                     // console.log('HERE10')
//                     strArr[startIndex] = '9'
//                     numChanges--
//                 }
//                 if (right !== '9') {
//                     // console.log('HERE11')
//                     strArr[endIndex] = '9'
//                     numChanges--
//                 }
//             }

//         } else {
//             if (numChanges < 2) {
//                 if (left > right) {
//                     // console.log('HERE8')
//                     strArr[endIndex] = left
//                     numChanges--
//                 } else if (right > left) {
//                     // console.log('HERE9')
//                     strArr[startIndex] = right
//                     numChanges--
//                 }
//             } else {
//                 if (left !== '9') {
//                     // console.log('HERE10')
//                     strArr[startIndex] = '9'
//                     numChanges--
//                 }
//                 if (right !== '9') {
//                     // console.log('HERE11')
//                     strArr[endIndex] = '9'
//                     numChanges--
//                 }
//             }
//         }
//         startIndex++
//         endIndex--
//     }

//     const reversedArr = [...strArr].reverse()
//     const isPalindrome = strArr.every((char, index) => char === reversedArr[index])

//     if (isPalindrome) {
//         const result = strArr.join('')
//         return result
//     }

//     return '-1'
// }


console.log(highestValuePalindrome('1231', 4, 3))
console.log('===================')
console.log(highestValuePalindrome('12321', 5, 1))
console.log('===================')
console.log(highestValuePalindrome('3943', 4, 1))
console.log('===================')
console.log(highestValuePalindrome('092282', 6, 3))
console.log('===================')
console.log(highestValuePalindrome('0011', 4, 1))
console.log('===================')
console.log(highestValuePalindrome('932239', 6, 2))
console.log('===================')
console.log(highestValuePalindrome('11119111', 8, 4))
console.log('===================')

// const result = highestValuePalindrome(test_case_palindrome[0], test_case_palindrome[0].length, 58343)
// let count = 0
// for (let i = 0; i < result.length; i++) {
//     const char = result[i]
//     // if (char !== '9') {
//     //     count++
//     // }
//     const charTwo = test_case_palindrome_result[0][i]
//     if (char !== charTwo) {
//         // console.log(char, charTwo, i)
//         // break
//         count++
//     }
// }
// console.log('count:', count)

// const sliced = test_case_palindrome_result[0].substr(26070, 500)
// const slicedTwo = result.substr(26070, 500)
// const sliced = test_case_palindrome_result[0].substr(11720, 500)
// const slicedTwo = result.substr(11720, 500)
// console.log(sliced)
// console.log(slicedTwo)