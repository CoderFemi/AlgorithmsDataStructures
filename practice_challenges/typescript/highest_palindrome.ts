import { test_case_palindrome, test_case_palindrome_result } from './test_case_data'

const highestValuePalindrome = (str: string, strLen: number, numChanges: number): string => {
    const strArr = str.split('')
    const isOddStr = strLen % 2 === 1
    const mid = Math.floor(strLen / 2)
    let start = mid - 1
    let end = mid
    if (isOddStr) end = mid + 1

    let startIndex = 0
    let endIndex = strLen - 1
    while (true) {
        const isOddChanges = numChanges % 2 === 1
        const left = str[startIndex]
        const right = str[endIndex]
        const isEqual = left === right

        if (numChanges === 0 || startIndex > start || endIndex < end) {
            if (numChanges > 0) {
                if (isOddChanges && isOddStr) {
                    strArr[mid] = '9'
                    numChanges--
                }
            }
            break

        } else if (numChanges <= 2) {
            if (isOddStr && isEqual && numChanges === 1) {
                strArr[mid] = '9'
                numChanges--
                break
            }
            if (isEqual && numChanges === 2 && str[start] == str[end]) {
                if (left !== '9') {
                    strArr[startIndex] = '9'
                    numChanges--
                }
                if (right !== '9') {
                    strArr[endIndex] = '9'
                    numChanges--
                }
            } else if (!isEqual || startIndex === start || endIndex === end) {
                if (left === '9') {
                    // console.log('HERE1')
                    strArr[endIndex] = '9'
                    numChanges--
                } else if (right === '9') {
                    // console.log('HERE2')
                    strArr[startIndex] = '9'
                    numChanges--
                } else if (left > right) {
                    // console.log('HERE4')
                    strArr[endIndex] = left
                    numChanges--
                } else {
                    // console.log('HERE5')
                    strArr[startIndex] = right
                    numChanges--
                }
            }
        } else if (numChanges > 2) {
            // console.log('HERE6')
            if (left !== '9') {
                strArr[startIndex] = '9'
                numChanges--
            }
            if (right !== '9') {
                strArr[endIndex] = '9'
                numChanges--
            }
        }
        // console.log(startIndex, endIndex, numChanges)
        // console.log(strArr)



        startIndex++
        endIndex--
    }

    const reversedArr = [...strArr].reverse()
    const isPalindrome = strArr.every((char, index) => char === reversedArr[index])

    const result = strArr.join('')
    return result
    if (isPalindrome) {
    }

    return '-1'
}


// console.log(highestValuePalindrome('1231', 4, 3))
// console.log('===================')
// console.log(highestValuePalindrome('12321', 5, 1))
// console.log('===================')
// console.log(highestValuePalindrome('3943', 4, 1))
// console.log('===================')
// console.log(highestValuePalindrome('092282', 6, 3))
// console.log('===================')
// console.log(highestValuePalindrome('0011', 4, 1))
// console.log('===================')
// console.log(highestValuePalindrome('932239', 6, 2))
// console.log('===================')
// console.log(highestValuePalindrome('11119111', 8, 4))
// console.log('===================')

const result = highestValuePalindrome(test_case_palindrome[0], test_case_palindrome[0].length, 58343)
let count = 0
for (let i = 0; i < result.length; i++) {
    const char = result[i]
    // if (char !== '9') {
    //     count++
    // }
    const charTwo = test_case_palindrome_result[0][i]
    if (char !== charTwo) {
        // console.log(char, charTwo, i)
        // break
        count++
    }
}
console.log('count:', count)

const sliced = test_case_palindrome_result[0].substr(26070, 500)
const slicedTwo = result.substr(26070, 500)
console.log(sliced)
console.log(slicedTwo)