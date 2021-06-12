// Implemented recursively with memoization
const fib = (n, memo = []) => {
    if (memo[n] !== undefined) return memo[n]
    if (n <= 2) return 1
    const result = fib(n - 1, memo) + fib(n - 2, memo)
    memo[n] = result
    return result
} 

// Implemented with tabulation
const fib = (n) => {
    if (n <= 2) return 1
    const fibNums = [0, 1, 1]
    for (let i = 3; i <= n; i++) {
        fibNums[i] = fibNums[i - 1] + fibNums[i - 2]
    }
    return fibNums[n]
}