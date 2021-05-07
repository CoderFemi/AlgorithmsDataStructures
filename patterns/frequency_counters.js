function validAnagram(strOne, strTwo) {
    // compare the length of both strings, if equal continue, else stop
    if (strOne.length !== strTwo.length) {
        return false
    }
    // define two objects for storing frequencies for each string
    const counterOne = {}
    const counterTwo = {}

    // use first loop to loop through first string and assign the frequencies
    for (let val of strOne) {
        counterOne[val] = (counterOne[val] || 0) + 1
    }

    // use second loop to loop through second string and assign the frequencies
    for (let val of strTwo) {
        counterTwo[val] = (counterTwo[val] || 0) + 1
    }
    console.log(counterOne)
    console.log(counterTwo)
    // use third loop to compare items in both objects and return boolean
    for (let key in counterOne) {
        if (counterOne[key] !== counterTwo[key]) {
            return false
        }
    }
    // return boolean
    return true
}

const isValid = validAnagram('anagram', 'agamran')

console.log(isValid)