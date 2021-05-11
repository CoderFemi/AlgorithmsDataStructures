const reverse = (str) => {
    if (str.length === 0) return ""
    return str[str.length - 1] + reverse(str.slice(0, str.length - 1))
}
// const result = reverse('awesome') // 'emosewa'
// console.log(result)
// reverse('rithmschool') // 'loohcsmhtir'




const isPalindrome = (str) => {

    const helper = (str) => {
        if (str.length === 0) return ""
        return str[str.length - 1] + helper(str.slice(0, str.length - 1))
    }
    return helper(str) === str
}
// const result = isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// const result = isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false
// console.log(result)




const someRecursive = (arr, cb) => {
    const bool = cb(arr[0])
    if (!bool && arr.length <= 1) {
        return bool
    } else if (bool) {
        return bool
    } else return someRecursive(arr.slice(1), cb)
}
// The function returns true if a single value in the array returns true when passed into the callback. Otherwise it returns false.
// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;
// someRecursive([1,2,3,4], isOdd) // true
// const result = someRecursive([4,6,8,9], isOdd) // true
// const result = someRecursive([4,6,8], isOdd) // false
// const result = someRecursive([4,6,8], val => val > 10); // false
// console.log(result)



// const flatten = (arr) => {
//     if (arr.length === 0) return []
//     if (typeof arr[0] === 'object') {
//         const extract = arr.shift()
//         if (typeof extract === 'number') {
//             return [extract].concat(flatten(arr.slice(1)))
//         } else return flatten([...extract, ...arr])
//     }
//     return [arr[0]].concat(flatten(arr.slice(1)))
// }

const flatten = (arr) => {
    if (arr.length === 0) return []
    const extract = arr.shift()
    if (typeof extract === 'object') {
         return flatten([...extract, ...arr])
    }
    return [extract].concat(flatten(arr))
}

// const result = flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// const result = flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// const result = flatten([[1],[2],[3]]) // [1,2,3]
// const result = flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3
// console.log(result)



const capitalizeFirst = (arr) => {
    if (arr.length === 0) return []
    const firstUpper = arr[0].charAt(0).toUpperCase() + arr[0].slice(1)
    return [firstUpper].concat(capitalizeFirst(arr.slice(1)))
}
// const result = capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
// console.log(result)




const nestedEvenSum = (obj) => {
    const objValues = Object.values(obj)
    if (objValues.length === 0) return 0
    const extractVal = objValues.shift()
    if (typeof extractVal === 'object') {
        return nestedEvenSum({ ...extractVal, ...objValues })
    }
    if (typeof extractVal !== 'object' && typeof extractVal !== 'number') {
        return nestedEvenSum({ ...objValues })
    }
    if (typeof extractVal === 'number' && extractVal % 2 !== 0) {
        return nestedEvenSum({ ...objValues })
    }
    return extractVal + nestedEvenSum({ ...objValues })
}
var obj1 = {
    outer: 2,
    obj: {
        inner: 2,
        otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: "yup"
        }
    }
}
var obj2 = {
    a: 2,
    b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
    c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
    d: 1,
    e: { e: { e: 2 }, ee: 'car' }
}
// const result = nestedEvenSum(obj1) // 6
// const result = nestedEvenSum(obj2); // 10
// console.log(result)


const capitalizeWords = (arr) => {
    if (arr.length === 0) return []
    const strUpper = arr[0].toUpperCase()
    return [strUpper].concat(capitalizeWords(arr.slice(1)))
}
// let words = ['i', 'am', 'learning', 'recursion']
// const result = capitalizeWords(words) // ['I', 'AM', 'LEARNING', 'RECURSION']
// console.log(result)



const stringifyNumbers = (obj) => {
    
}
// Find all the values which are numbers and convert them to strings.
/*
let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}
/*

stringifyNumbers(obj)

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/



const collectStrings = (obj) => {
    const objValues = Object.values(obj)
    if (objValues.length === 0) return []
    const extractVal = objValues.shift()
    if (typeof extractVal === 'object') {
        return collectStrings({ ...extractVal, ...objValues })
    }
    if (typeof extractVal !== 'object' && typeof extractVal !== 'string') {
        return collectStrings({ ...objValues })
    }
    return [extractVal].concat(collectStrings({ ...objValues })) 
}
// Return an array of all the values that are strings.
const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

const result = collectStrings(obj) // ["foo", "bar", "baz"])
console.log(result)