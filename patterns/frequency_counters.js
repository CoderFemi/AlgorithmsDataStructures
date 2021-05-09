// function validAnagram(strOne, strTwo) {
//     // compare the length of both strings, if equal continue, else stop
//     if (strOne.length !== strTwo.length) {
//         return false
//     }
//     // define two objects for storing frequencies for each string
//     const counterOne = {}
//     const counterTwo = {}

//     // use first loop to loop through first string and assign the frequencies
//     for (let val of strOne) {
//         counterOne[val] = (counterOne[val] || 0) + 1
//     }

//     // use second loop to loop through second string and assign the frequencies
//     for (let val of strTwo) {
//         counterTwo[val] = (counterTwo[val] || 0) + 1
//     }
//     console.log(counterOne)
//     console.log(counterTwo)
//     // use third loop to compare items in both objects and return boolean
//     for (let key in counterOne) {
//         if (counterOne[key] !== counterTwo[key]) {
//             return false
//         }
//     }
//     // return boolean
//     return true
// }

// const isValid = validAnagram('anagram', 'agamran')

const sameFrequency = (numOne, numTwo) => {
    if (numOne.length !== numTwo.length) {
        return false
    }
    const counterOne = {}
    const counterTwo = {}
    const strOne = numOne.toString()
    const strTwo = numTwo.toString()

    for (let i = 0; i < strOne.length; i++) {
        counterOne[strOne[i]] = (counterOne[strOne[i]] || 0) + 1
    }
    for (let i = 0; i < strTwo.length; i++) {
        counterTwo[strTwo[i]] = (counterTwo[strTwo[i]] || 0) + 1
    }
    for (let key in counterOne) {
        if (counterOne[key] !== counterTwo[key]) {
            return false
        }
    }
    return true
}

// const bool = sameFrequency(125182718512, 215817281521)
const bool = sameFrequency(22, 222)

console.log(bool)