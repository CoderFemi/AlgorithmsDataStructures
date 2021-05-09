// const countUniqueValues = (arr) => {
//     if (arr.length === 0) {
//         return arr.length
//     }
//     let i = 0
//     let j = 1
//     while (j < arr.length) {
//         if (arr[i] !== arr[j]) {
//             i++
//             arr[i] = arr[j]
//         }
//         console.log(i, j)
//         console.log(arr)
//         j++
//     }
//     return i + 1
// }

// // This solution uses a frequency counter. Not suitable for this pattern.
// const countUniqueValuesAlternative = (arr) => {
//     if (arr.length === 0) {
//         return arr.length
//     }
//     const pointer = {}
//     let count = 0
//     let i = 0
//     while (i < arr.length) {
//         const num = arr[i]
//         if (pointer[num] === undefined) {
//             count++
//         }
//         pointer[num] = pointer[num] + 1 || 1
//         i++
//     }
//     return count
// }

// const length = countUniqueValues([1, 1, 1, 1, 2, 2, 3, 4, 5, 5, 5, 6, 6, 6, 6, 7, 8, 9, 9, 9, 9, 10])

const areThereDuplicates = function () {
    // Check if there are any duplicates among the arguments passed in
    // TC and SC O(n), Also possible TC and SC O(log n), O(1) respectively.
    // return boolean
    // also possible using frequency counters
    if (arguments.length === 0) {
        return null
    }
    const counter = {}
    for (let arg of arguments) {
        counter[arg] = (counter[arg] || 0) + 1
        if (counter[arg] > 1) {
            return true
        }
    }
    return false
}

// function areThereDuplicates() {
//     let collection = {}
//     for (let val in arguments) {
//         collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
//     }
//     for (let key in collection) {
//         if (collection[key] > 1) return true
//     }
//     console.log(collection)
//     return false;
// }

const bool = areThereDuplicates('man', 'boy', 123, true, 'girl')

console.log(bool)

// SOLUTION
// function averagePair(arr, num) {
//     let start = 0
//     let end = arr.length - 1;
//     while (start < end) {
//         let avg = (arr[start] + arr[end]) / 2
//         if (avg === num) return true;
//         else if (avg < num) start++
//         else end--
//     }
//     return false;
// }

const averagePair = (arr, targetAvg) => {
    // Determine if there is a pair of values in the array where the average of the pair equals the target avrage. There may be more than one pair that matches the average target.
    // TC O(n), SC O(1)
    // return boolean
}

averagePair([1,3,3,5,6,7,10,12,19],8)

// SOLUTION
// function isSubsequence(str1, str2) {
//     var i = 0;
//     var j = 0;
//     if (!str1) return true;
//     while (j < str2.length) {
//         if (str2[j] === str1[i]) i++;
//         if (i === str1.length) return true;
//         j++;
//     }
//     return false;
// }

const isSubsequence = (strOne, strTwo) => {
    // Check wether the characters in the first string appear in the second string (subsequence) but without thier ordering changing
    // TC O(n + m) SC O(1)
    // return boolean
}

isSubsequence('sing', 'string')