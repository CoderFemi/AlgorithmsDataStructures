const power = (num, pow) => {
    if (pow <= 0) return 1
    return num * power(num, pow - 1)
}
// power(2,0) // 1
// power(2,2) // 4
// const result = power(2, 4) // 16
// console.log(result)



const factorial = (num) => {
    if (num <= 1) return 1
    return num * factorial(num - 1)
}
//factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
const result = factorial(7) // 5040
console.log(result)



const productOfArray = (arr) => {
    if (arr.length === 0) return 1
    return arr[0] * productOfArray(arr.slice(1))
}
// productOfArray([1,2,3]) // 6
// const result = productOfArray([1, 2, 3, 10]) // 60
// console.log(result)

// const productNonRecursive = (arr) => {
//     return arr.reduce((product, num) => {
//         return product * num
//     })
// }
// const result = productNonRecursive([1, 2, 3, 10]) // 60
// console.log(result)




function recursiveRange(num) {
    if (num <= 0) return 0
    return num + recursiveRange(num - 1)
}
// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// const result = recursiveRange(10) // 55 
// console.log(result)


// Return the nth number in the fibonnaci sequence
const fib = (num) => {
    let prev = 0
    let next = 1
    let temp = 0
    let n = 1
    const helper = (num) => {
        if (n === num) return next
        n++
        temp = next
        next += prev
        prev = temp
        return helper(num)
    }
    return helper(num)
}

// SHORTER IMPLEMENTATION
function fib(n) {
    if (n <= 2) return 1;
    return fib(n - 1) + fib(n - 2);
}

// console.time('fib')
// fib(4) // 3
// const result = fib(10) // 55
// console.log(result)
// fib(28) // 317811
// fib(35) // 9227465
// console.timeEnd('fib')