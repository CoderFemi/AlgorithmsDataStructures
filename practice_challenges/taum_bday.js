const taumBday = (b, w, bc, wc, z) => {
    const bigB = BigInt(b)
    const bigW = BigInt(w)
    const bigBC = BigInt(bc)
    const bigWC = BigInt(wc)
    const bigZ = BigInt(z)
    const totalPossibleA = (bigB * bigBC) + (bigW * bigWC)
    const totalPossibleB = (bigB * (bigWC + bigZ)) + (bigW * bigWC)
    const totalPossibleC = (bigB * bigBC) + (bigW * (bigBC + bigZ))
    const totalPossibleD = (bigB * (bigWC + bigZ)) + (bigW * (bigBC + bigZ))
    const possibleCosts = [totalPossibleA, totalPossibleB, totalPossibleC, totalPossibleD]
    const minimalCost = possibleCosts.reduce((a, b) => b < a ? b : a)
    return minimalCost.toString().length < 16 ? Number(minimalCost) : minimalCost
}

// const result = taumBday(742407782, 90529439, 847666641, 8651519, 821801924)
// const result = taumBday(10, 10, 1, 1, 1)
const result = taumBday(142640749, 652432197, 701695848, 936714099, 324221606)
console.log(result)