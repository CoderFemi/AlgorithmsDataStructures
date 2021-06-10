
// const string = 'UDDDUDUU'
// const stringTwo = 'DDUUUUDD'

// function countingValleys(n, s) {
//     return s.match(/([D]+(?=[U]+))/g).length
// }

// function countingValleys(n, s) {
//     const min = 2;
//     const max = 1000000;
//     let isInValley = false;
//     let valleys = 0;     s = (typeof s === "string") ? s.split('') : s;

//     if (s.length >= min
//          && s.length <= max
//          && n === parseInt(n, 0)
//          && n >= min
//          && n <= max 
//          && n === s.length) {
         
//          s.map(steps => ((steps === "U") ? 1 : -1))
//               .reduce((prev, next) => {
//                    if (prev < 0 && !isInValley) {
//                         isInValley = true;
//                    }
//                    if ((prev + next) === 0 && isInValley) {
//                         valleys++;
//                         isInValley = false;
//                    }

//                    return prev + next;    
//               });
//     } 
    
//     return valleys; 
// }

// function countingValleys(n, s) {
//     let height = 0
//     let valleys = 0
//     const steps = s.split('')
//     steps.forEach((step) => {
//         if (step === 'D') {
//             height--
//         } else if (step === 'U') {
//             height++
//             if (height === 0) {
//                 valleys++
//             } 
//         }
//     })
    
//     return valleys
// }

// console.log(countingValleys(8, string))


// const colors = [10, 20, 20, 10, 10, 30, 50, 10, 20]

// function sockMerchant(n, ar) {
//     const colors = [...ar] 
//     const uniqueColors = [...new Set(colors)]
    
//     const sortedColours = uniqueColors.map((item, index) => {
//         let count = 0
        
//         colors.forEach((val) => {
//             if (item === val) {
//                 count++
//             }
//         })
//         return count
//     })

//     return sortedColours.reduce((total, num) => {
//         return total + Math.floor(num / 2)
//     }, 0)
// }

// console.log(sockMerchant(9, colors))
// console.log(Math.floor(0.5))



// const grades = [73, 67, 38, 33]

// function gradingStudents(grades) {
//     // Write your code
//     const newArray = []

//     for (let i = 0; i < grades.length; i++) {
//         const rounded =  Math.ceil(grades[i] / 5) * 5
//         const diff = rounded - grades[i]

//         if (diff < 3 && grades[i] >= 38 ) {
//             newArray.push(rounded)
//         } else newArray.push(grades[i])
//     }
//     return newArray
// }

// function gradingStudents(grades) {
//     // Write your code
//     return grades.map((grade) => {
//         const rounded =  Math.ceil(grade / 5) * 5
//         const diff = rounded - grade
        
//         if (diff < 3 && grade >= 38 ) {
//             return rounded
//         } else return grade
//     })
// }

// console.log(gradingStudents(grades))



// SUM ALL PRIMES

// function sumPrimes(num) {

//   const divisors = []
//   const newArr = []
//   let i = 2
//   while (i <= num) {
//     divisors.push(i)
//     i++
//   }
  
//   divisors.forEach((divisor, index) => {
//   const primeRange = divisors.slice(0, index)
//   const bool = primeRange.every((item) => divisor % item !== 0 )
//   if (bool) {
//     newArr.push(divisor) 
//   }
//   })
//   return newArr.reduce((sum, num) => sum + num, 0)
// }

// console.log(sumPrimes())






// DNA PAIRING

// const pairscore = (str) => {
//   const newArray = []
  
//   for (let i = 0; i < str.length; i++) {
    
//     if (str[i] === 'A') {
//       newArray.push(['A', 'T'])
//     } else if (str[i] === 'T') {
//       newArray.push(['T', 'A'])
//     } else if (str[i] === 'C') {
//       newArray.push(['C', 'G'])
//     } else if (str[i] === 'G') {
//       newArray.push(['G', 'C'])
//     }
    
//   }
//   return newArray;
// }

// console.log(pairscore("GCG"))





// PIG LATIN
// const translatePigLatin = (str) => {
//   const consonant = str.match(/[^aeiou]+/)
//   const vowel = str[0].match(/[aeiou]/)
//   if (vowel) {
//     return str.concat('way')
//   } else {
//     return str.substr(consonant[0].length).concat(consonant[0], 'ay')
//   }
// }

// const result = translatePigLatin("consonant");
// console.log(result)



// SEEK AND DESTROY
// function destroyer(arr) {
//   const newArr = Object.scores(arguments)
//   const arr1 = newArr[0]
//   const arr2 = newArr.slice(1)
//   const arr3 = [...arr1]
  
//   arr1.forEach((item) => {
//     arr2.forEach((val) => {
//       if (item === val) {
//         arr3.splice(arr3.indexOf(item), 1)
//       }
//     })
//   })
//   return arr3
 
// }

// const result = destroyer([1, 2, 3, 1, 2, 3], 2, 3);
// console.log(result)



// SUM RANGE OF NUMBERS

// function sumAll(arr) {
//   const newArr = [...arr]
//   newArr.sort((a,b) => a - b)
//   for (let i = 1; i < newArr[newArr.length-1]-newArr[0]; i++) {
//     newArr.splice(i, 0, newArr[0] + i)
//   }
//   return newArr.reduce((sum, num) => sum + num, 0)
// }

// const result = sumAll([9, 1]);
// console.log(result)




// WHERE DO I BELONG

// const getIndexToIns = (arr, num) => {
//   arr.sort((a, b) => a - b)
//   if (arr.length === 0) {
//     arr.push(num)
//   }
//   const numIndex = arr.findIndex((digit) => {
//     return digit >= num
//   })

//   if (numIndex === -1) {
//     return arr.length
//   } else return numIndex
// }

// const result = getIndexToIns([40, 60, 65, 69], 70)
// console.log(result)






// TRUNCATE STRING

// const truncateString = (str, num) => {
//   let newStr = ''
//   str.length > num ? newStr = str.slice(0, num).concat('...') : newStr = str
//   return newStr
// }

// const result = truncateString("A-tisket a-tasket A green and yellow basket", 8)
// console.log(result)





// FACTORIALIZE

// const factorialize = (num) => {
  
//   let range = []
//   for (let i = 1; i <= num; i++) {
//     const digit = num - (num - i)
//     range.push(digit)
//   }
//   return range.reduce((product, multiplier) => {
//     return product * multiplier
//   })
// }

// console.log(factorialize(5))



//NUMBER LINE JUMPS
// function kangaroo(x1, v1, x2, v2) {
    
//     let landing1 = x1
//     let landing2 = x2

//     if (v2 >= v1 && x2 > x1) {
//         return 'NO'
//     }

//     for (let i = 0; i < 10000; i++) {
//         landing1 += v1
//         landing2 += v2

//         if (landing1 === landing2) {
//             return 'YES'
//         } else if (landing1 > landing2) {
//             return 'NO'
//         }
//     }
    
// }


// console.log(kangaroo(0, 3, 0, 2))


// DIVISIBLE SUM PAIRS
// function divisibleSumPairs(n, k, ar) {
//     const intArray = [...ar]
//     let pairCount = 0
//     for (let i = 0; i < n; i++) {
//         intArray.splice(0, 1)
//         intArray.forEach(integer => {
//             const sumPair = integer + ar[i]
//             if (sumPair % k === 0) {
//                 pairCount++
//             }
//         })
//     }
    
//     return pairCount
// }

// console.log(divisibleSumPairs(6,3,[1,3,2,6,1,2]))




//MIGRATORY BIRDS
// const migratoryBirds = ((arr) => {
//     const uniqueNumbers = []
//     const frequency = []
//     for (let i = 0; i < arr.length; i++) {
//         if (!uniqueNumbers.includes(arr[i])) {
//             const count = arr.filter(num => num === arr[i])
//             uniqueNumbers.push(arr[i])
//             frequency.push(count.length)
//         }
//     }
//     const commonFreq = Math.max(...frequency)
//     const commonNum = []
//     frequency.forEach((freq, index) => {
//         if (freq === commonFreq) {
//             commonNum.push(uniqueNumbers[index])
//         }
//     })
//    const mostCommon = Math.min(...commonNum)
//    return mostCommon
// })

// console.log(migratoryBirds([1,2,3,4,5,4,3,2,1,3,4]))



// PICKING NUMBERS
// function pickingNumbers(a) {
//     //a.sort((x,y) => x - y)
//     const newArray = a.map(num => {
//         const newArray2 = a.filter(int => (Math.abs(num - int) <= 1))
//         const diff = Math.max(...newArray2) - Math.min(...newArray2)
//         const doubleNum = newArray2.filter(int2 => num === int2)
//         if (doubleNum.length > 1 && diff > 1) {
//             const newArray3 =  newArray2.filter(int3 => int3 !== Math.min(...newArray2))
//             return newArray3.length
//         }
//         return diff <= 1 ? newArray2.length : 0
//     })
    
//     return Math.max(...newArray)
// }

// const long = [84,43,11,41,2,99,31,32,56,53,42,14,98,27,64,57,16,33,48,21,46,61,87,90,28,12,62,49,29,77,82,70,80,89,95,52,13,19,9,79,35,67,51,39,7,1,66,8,17,85,71,97,34,73,75,6,91,40,96,65,37,74,20,68,23,47,76,55,24,3,30,22,55,5,69,86,54,50,10,59,15,4,36,38,83,60,72,63,78,58,88,93,45,18,94,44,92,81,25,26]
// const shortOne = [1,2,2,3,1,2]
// const shortTwo = [4,6,5,3,3,1]
// console.log(pickingNumbers(long))



// CLIMBING LEADERBOARD

// Naive Solution with Runtime Error ------------------------------------------

// function climbingLeaderboard(scores, alice) {
    
//     let rank = 1
//     const rankings = [rank]
//     const aliceRankings = []
//     alice.forEach(play => {
//         for (let i = 1; i < scores.length; i++) {
//             if (play >= scores[i - 1]) {
//                 scores.unshift(play)
//             } else if (play < scores[i - 1] && play > scores[i + 1]) {
//                 scores.splice(i,0,play)
//             } else {
//                 scores.push(play)
//             }

//             const equalScores = scores[(i - 1)] === scores[i]
//             if (equalScores) {
//                 rankings.push(rank)
//             } else {
//                 rank++
//                 rankings.push(rank)
//             }

//             aliceRankings.push(rankings[i])
//         }

//     })
//     return rankings
// }

// const climbingLeaderboard = (rankings, player) => {
//     const playerRankings = []
//     const leaderBoard = [...new Set(rankings)]
//     const scoreRanking = (arr, score) => {
//         let position = 1
//         return (function helper(arr, score) {
//             if (score > arr[0]) return 0
//             if (arr.length <= 1) return position
//             let mid = Math.floor(arr.length / 2)
//             let leftSide = arr.slice(0, mid)
//             let rightSide = arr.slice(mid)
//             if (score > arr[mid]) {
//                 return helper(leftSide, score)
//             } else if (score < arr[mid]) {
//                 position += mid
//                 return helper(rightSide, score)
//             }
//             return position
//         })(arr, score)
//     }
//     for (let score of player) {
//         const position = scoreRanking(leaderBoard, score)
//         playerRankings.push(position + 1)
//     }
//     return playerRankings
// }

// const ranked = [100,100,50,40,40,20,10]
// const player = [5,25,50,120]

// console.log(climbingLeaderboard(ranked,player))


// Working Solution ------------------------------------

const climbingLeaderboard = (rankings, player) => {
    const playerRankings = []
    for (let score of player) {
        const counter = {}
        let position = 1
        const leaderBoard = rankings.concat([])
        leaderBoard.push(score)
        for (let item of leaderBoard) {
            if (score > item) {
                playerRankings.push(position)
                break
            } else if (!counter[item]) {
                counter[item] = position
                if (score === item) {
                    playerRankings.push(position)
                    break
                }
                position++
            }
        }
    }
    return playerRankings
}

const rankings = [100,100,50,40,40,20,10]
const player = [5,25,50,120]

console.log(climbingLeaderboard(rankings, player))




//DAY OF THE PROGRAMMER

// function dayOfProgrammer(year) {
//     const julianLeap = year % 4 === 0
//     const gregorianLeap = (year % 400 === 0) || ((year % 4 === 0) && (year % 100 !== 0))
    
//     if ((julianLeap && year < 1918)  || gregorianLeap) {
//         return `12.09.${year}`
//     } else if (year === 1918) {
//         return `26.09.${year}`
//     } else {
//         return `13.09.${year}`
//     }

// }

// console.log(dayOfProgrammer(2100))


// FORMING A MAGIC SQUARE


// function formingMagicSquare(s) {
//     const squareOne = [[8,1,6],[3,5,7],[4,9,2]]
//     const squareTwo = [[6,1,8],[7,5,3],[2,9,4]]
//     const squareThree = [[8,3,4],[1,5,9],[6,7,2]]
//     const squareFour = [[6,7,2],[1,5,9],[8,3,4]]
//     const squareFive = [[4,3,8],[9,5,1],[2,7,6]]
//     const squareSix = [[2,7,6],[9,5,1],[4,3,8]]
//     const squareSeven = [[4,9,2],[3,5,7],[8,1,6]]
//     const squareEight = [[2,9,4],[7,5,3],[6,1,8]]

//     const allSquares = [squareOne, squareTwo, squareThree, squareFour, squareFive, squareSix, squareSeven, squareEight]

//     const allCosts = allSquares.map(square => {
//         return square.map((row, rowIndex) => {
//             return row.map((num, numIndex) => {
//                 return Math.abs(num - s[rowIndex][numIndex])
//             }).reduce((total, num) => total + num, 0)
//         }).reduce((total, num) => total + num, 0)
//     })
//     return Math.min(...allCosts)
// }

// const matrix1 = [[5,3,4],[1,5,8],[6,4,2]]
// const matrix2 = [[4,8,2],[4,5,7],[6,1,6]]
// const matrix3 = [[4,5,8],[2,4,1],[1,9,7]]

// console.log(formingMagicSquare(matrix2))



//CLIMBING THE LEADERBOARD

// function climbingLeaderboard(scores, player) {
    
//     const rankings = []

//     player.forEach(play => {
//         scores.push(play)
//         const uniqueScores = [... new Set(scores)].sort((a,b) => b - a)
//         //const uniqueScores = scores.filter((v, i, a) => a.indexOf(v) === i).sort((a,b) => b - a)
//         const index = uniqueScores.findIndex(num => num === play)
//         rankings.push(index + 1)
//     })
//     return rankings
// }

// function climbingLeaderboard(scores, player) {
    
//     const rankings = []
//     scores.forEach((score, index) => {
//         const duplicate = scores.filter(mark => score === mark)
//         if (duplicate.length > 1) {
//             scores.splice(index, duplicate.length - 1)
//         }
//     })

//     player.forEach(play => {
//         scores.push(play)
//         scores.sort((a,b) => b - a)
//         const rank = scores.filter(num => num === play)
//         const index = scores.findIndex(num => num === play)
//         if (rank.length > 1) {
//             scores.splice(index, rank.length - 1)
//             rankings.push(index + 1)
//         } else {
//             rankings.push(index + 1)
//         }
//     })
//     return rankings
// }

// const result = climbingLeaderboard([100,90,90,80], [70,80,105])
// console.log(result)



// DESIGNER PDF VIEWER

// function designerPdfViewer(h, word) {
    
//     const alphabet = []
//     const letterHeights = []
//     for (let i = 0; i < 26; i++) {
//         const letter = String.fromCharCode(97 + i)
//         alphabet.push(letter)
//     }

//     const wordArray = word.split('')
//     wordArray.forEach(char => {
//         const wordIndex = alphabet.findIndex(letter => char === letter)
//         const height = h.find((height, index) => index === wordIndex)
//         letterHeights.push(height)
//     })

//     const wordArea = Math.max(...letterHeights) * letterHeights.length * 1
//     return wordArea
// }

// const list = [1,3,1,3,1,4,1,3,2,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]
// const word = 'abc'
// console.log(designerPdfViewer(list, word))



// UTOPIAN TREE

// function utopianTree(n) {
//     let height = 0
    
//     for (let i = 0; i <= n; i++) {
//         i === 0 ? height = 1 : i % 2 === 1 ? height *= 2 : height += 1
//     }
//     return height
// }

// console.log(utopianTree(3))



// ANGRY PROFESSOR

// function angryProfessor(k, a) {
//     let onTime = 0
//     let late = 0
//     a.forEach(time => time <= 0 ? onTime++ : late++)
//     return onTime >= k ? 'NO' : 'YES'
// }


// console.log(angryProfessor(3, [-1,-3,4,2]))



// SAVE THE PRISONER

// function saveThePrisoner(n, m, s) {
//     // const cycle = []
//     // for (let i = s; i <= (m + s - 1); i++) {
//     //     if (i % n === 0) {
//     //         cycle.push(n)
//     //     } else {
//     //         cycle.push(i % n)
//     //     }
//     // }
//     // return cycle[cycle.length - 1]

//     return (m  + s - 1) % n || n
// }

// console.log(saveThePrisoner(352926151,380324688,94730870))



// CIRCULAR ARRAY ROTATION

// function circularArrayRotation(a, k, queries) {
//     const rotatedscores = []
//     for (let i = 1; i <= k; i++) {
//         const rotate = a.pop()
//         a.unshift(rotate)
//     }
//     queries.forEach(query => rotatedscores.push(a[query]))
//     return rotatedscores
// }

// console.log(circularArrayRotation([3,4,5],2,[1,2]))



// SEQUENCE EQUATION

// function permutationEquation(p) {
//     const permutation = []
//     for (let i = 1; i <= p.length; i++) {
//         const x = p.findIndex(int => int === i )
//         const y = p.findIndex(int => int === x + 1)
//         permutation.push(y + 1)
//     }
//     return permutation
// }

// console.log(permutationEquation([5,2,1,3,4]))



// JUMPING ON CLOUDS

// function jumpingOnClouds(c, k) {
//     let e = 100
//     const n = c.length
//     let i = 0
    
//     while ((i + k) % n > 0) {
//         i+=k
//         if (c[i % n] === 0) {
//             e -= 1
//         } else {
//             e -= 3
//         }
//     }

//     if (c[0] === 0) {
//         e -= 1
//     } else {
//         e -= 3
//     }

//     return e
// }

// console.log(jumpingOnClouds([0,0,1,0,0,1,1,0], 2))
//console.log(jumpingOnClouds([1,1,1,0,1,1,0,0,0,0], 3))




// FIND DIGITS

// function findDigits(n) {
//     let countDivisors = 0
//     n.toString().split('').forEach(digit => {
//         if (n % digit === 0) {
//             countDivisors++
//         }
//     })
//     return countDivisors
// }

// console.log(findDigits(10))



// EXTRA LONG FACTORIALS

// function extraLongFactorials(n) {
//     let factorial = BigInt(n)
//     for (let i = n - 1; i > 0; i--) {
//         factorial *= BigInt(i)
//     }
//     console.log(BigInt(factorial).toString())
// }

// console.log(extraLongFactorials(25))



// APPEND AND DELETE

// function appendAndDelete(s, t, k) {
//     let newS = ''
//     let newT = ''
//     //const arrayS = s.split('')
//     //const arrayT = t.split('')

//     for (let i = 0; i < s.length; i++) {
//         if (s[i] !== t[i]) {
//             newS = s.substring(i)
//             newT = t.substring(i)
//             break
//         }
//     }
//     // arrayS.forEach((letter, index) => {
//     //     const char = arrayT[index]
//     //     if (char !== letter) {
//     //         newS = arrayS.subStr()
//     //         newT.push(char)
//     //     }
//     // })
    
//     // arrayS.forEach((letter, index) => {
//     //     const char = arrayT[index]
//     //     if (char !== letter || (char === letter && arrayS[index - 1] !== arrayT[index - 1])) {
//     //         newS.push(letter)
//     //         newT.push(char)
//     //     }
//     // })
//     console.log(newS,newT)
//     //const possible = newS.filter(letter => letter !== undefined).length + newT.filter(letter => letter !== undefined).length <= k
//     const possible = newS.length + newT.length <= k
//     if (possible) {
//         return 'Yes'
//     } else return 'No'
// }


// function appendAndDelete(s, t, k) {
//     let newS = ''
//     let newT = ''
//     let n = 0
//     s.length > t.length ? n = s.length : n = t.length

//     for (let i = 0; i < n; i++) {
//         if (s[i] !== t[i]) {
//             newS = s.substring(i)
//             newT = t.substring(i)
//             break
//         }
//     }
//     let possible = true
//     const diff = Math.abs(newS.length - newT.length)

//     if (diff === 0) {
//         possible = newS.length + newT.length + diff <= k
//     } else {
//         possible = newS.length + newT.length <= k
//     }
    
//     if (newT.length > newS.length) {
//         possible = newS.length + newT.length === k
//     }

//     if (k - diff === 2) {
//         possible = newS.length + newT.length + 2 === k
//     }
    
//     if (possible) {
//         return 'Yes'
//     } else return 'No'
// }


//console.log(appendAndDelete('hackerhappy','hackerrank',9))
//console.log(appendAndDelete('y','yu',2))
//console.log(appendAndDelete('ashley','ash',2))
//console.log(appendAndDelete('aaaaaaaaaa','aaaaa',7))
// console.log(appendAndDelete('zzzzz','zzzzzzz',4))



// SHERLOCK AND SQUARES

// function squares(a, b) {
//     let count = 0
//     for (let i = 1; i < b; i++) {
//         if (i*i >= a && i*i <= b) {
//             count++
//         }

//         if (i*i > b) {
//             break
//         }
//     }
//     return count
// }

// console.log(squares(3, 9))



// LIBRARY FINE

// function libraryFine(d1, m1, y1, d2, m2, y2) {
//     let fine = 0
//     if ((y2 === y1 && m2 > m1) || (y2 === y1 && m2 === m1 && d2 >= d1) || y2 > y1) {
//         return fine
//     } else if (y2 === y1 && m2 === m1 && d2 < d1) {
//         fine = (d1 - d2) * 15
//     }  else if (y2 === y1 && m2 < m1) {
//         fine = (m1 - m2) * 500
//     } else {
//         fine = 10000
//     }
//     return fine
// }

//console.log(libraryFine(9,6,2015,6,6,2015))
// console.log(libraryFine(28,6,2015,10,6,2015))
//console.log(libraryFine(9,10,2015,6,6,2015))
//console.log(libraryFine(14,5,2018,5,7,2018))
//console.log(libraryFine(14,5,2018,29,7,2018))
//console.log(libraryFine(2,7,1014,1,1,1015))
//console.log(libraryFine(2,7,1016,1,1,1015))
//console.log(libraryFine(2,5,2015,30,5,2015))



// CUT THE STICKS


// function cutTheSticks(arr) {
//     const countSticks = []
//     let cutSticks = [...arr]
//     while (cutSticks.length > 0) {
//         countSticks.push(cutSticks.length)
//         const shortest = Math.min(...cutSticks)
//         let reducedSticks = []
//         cutSticks.forEach(stick => {
//             const cutStick = stick - shortest
//             if (cutStick !== 0) {
//                 reducedSticks.push(cutStick)
//             }
//         })
//         cutSticks = reducedSticks
//     }
//     return countSticks
// }

// console.log(cutTheSticks([5,4,4,2,2,8]))
//console.log(cutTheSticks([1,2,3,4,3,3,2,1]))



// NON-DIVISIBLE SUBSET

// function nonDivisibleSubset(k, s) {
//     const subset = []
    
//     for (let i = 0; i < s.length - 1; i++) {
//         for (let j = i + 1; j < s.length; j++) {
//             const sum = s[i] + s[j]
//             if (sum % k !== 0) {
//                 if (!subset.includes(s[i])) {
//                     subset.push(s[i])
//                 }
//                 if (!subset.includes(s[j])) {
//                     subset.push(s[j])
//                 }
//             }
//         }
//     }
    
    //const uniqueSubset = [... new Set(subset)]
    //console.log(uniqueSubset)
    // return subset.length
    // if (uniqueSubset.length > 3) {
    //     if (uniqueSubset.length % 2 !== 0) {
    //         return Math.ceil(uniqueSubset.length / 2)
    //     } else {
    //         return uniqueSubset.length / 2
    //     }
    // } else return uniqueSubset.length
// }

//console.log(nonDivisibleSubset(3, [1,7,2,4]))
//console.log(nonDivisibleSubset(4, [19,10,12,10,24,25,22]))
// console.log(nonDivisibleSubset(7, [278,576,496,727,410,124,338,149,209,702,282,718,771,575,436]))



// REPEATED STRING

// function repeatedString(s, n) {
  
//     const index = n % s.length
//     const countLetter = s.split('').filter(letter => letter === 'a').length
//     const countCycle = Math.floor(n / s.length)
//     let count = countLetter * countCycle
     
//     for (let i = 0; i < (index); i++) {
//         if (s[i] === 'a') {
//             count++
//         }
//     }
//     return count
// }

// console.log(repeatedString('abcac', 10))
// console.log(repeatedString('a', 1000000000000))
// console.log(repeatedString('aba', 10))


// JUMPING ON CLOUDS 2

// function jumpingOnClouds(c) {
//     let jump = 0
//     for (let i = 0; i < c.length; i++) {
//         const safeJump = c[i + 1] === 1 && c[i + 2] === 0
//         const shortJump = c[i + 1] === 0 && c[i + 2] === 1
//         const longJump = c[i + 1] === 0 && c[i + 2] === 0
//         const lastJump = c[i + 1] === 0 && i === c.length - 2

//         if (safeJump || longJump) {
//             i++
//             jump++
//         } else if (shortJump || lastJump) {
//             jump++
//         }
//     }
//     return jump
// }

// console.log(jumpingOnClouds([0,1,0,0,0,1,0]))
// console.log(jumpingOnClouds([0,0,1,0,0,1,0]))
// console.log(jumpingOnClouds([0,0,0,0,1,0]))
// console.log(jumpingOnClouds([0,0,0,1,0,0]))



// EQUALIZE THE ARRAY

// function equalizeArray(arr) {
//     const uniqueArray = [... new Set(arr)]

//     const frequency = uniqueArray.map(number => {
//         const count = arr.filter(integer => integer === number)
//         return count.length
//     })
    
//     const highestFrequency = Math.max(...frequency)
//     const minimalDeletions = frequency.reduce((total,num) => total + num, 0) - highestFrequency
//     return minimalDeletions
// }

// console.log(equalizeArray([3,3,2,1,3]))
// console.log(equalizeArray([1,2,2,3]))



// QUEENS ATTACK

// function queensAttack(n, k, r_q, c_q, obstacles) {
//     let middleSquare = 0
//     const oddSquare = n % 2 === 1
//     const evenSquare = n % 2 === 0
//     let possibleMoves = (n - 1) * 3

//     for (let i = n; i > 0; i--) {
//         for (let j = 1; j <= n; j++) {
//             if (oddSquare) {
//                 middleSquare = Math.ceil(n / 2)
//                 if ((i === n || i === 1 || j === n || j === 1) && (r_q === i && c_q === j)) {
//                     possibleMoves += 0
//                 } else if ((i === middleSquare && j === middleSquare) && (r_q === i && c_q === j)) {
//                     possibleMoves += (n - middleSquare) * 2
//                 } else if ((i > middleSquare || i < middleSquare || j > middleSquare || j < middleSquare) && (r_q === i && c_q === j)) {
//                     possibleMoves += Math.abs(middleSquare - (r_q === middleSquare ? c_q : r_q)) * 2
//                 }
//             } else if (evenSquare) {
//                 middleSquare = n / 2
//                 if ((i === n || i === 1 || j === n || j === 1) && (r_q === i && c_q === j)) {
//                     possibleMoves += 0
//                 } else if (((i === middleSquare + 1) || (i === middleSquare) || (j === middleSquare + 1) || (j === middleSquare)) && (r_q === i && c_q === j)) {
//                     possibleMoves += (middleSquare - 1) * 2
//                 } else if (r_q > middleSquare + 1) {
//                     possibleMoves += (n - r_q) * 2
//                 } else if (r_q < middleSquare) {
//                     possibleMoves += (r_q - 1) * 2
//                 }
//             }
//         }
//     }
    
//     let blockedSquares = 0
    
//     if (k === 0) {
//         return possibleMoves
//     } else {
//         obstacles.forEach(obstacle => {
//             const sameRow = obstacle[0] - r_q === 0
//             const sameColumn = obstacle[1] - c_q === 0
//             const diagonal = Math.abs(obstacle[0] - r_q) <= 1 && Math.abs(obstacle[1] - c_q) <= 1

//             if (sameRow) {
//                 blockedSquares += c_q > obstacle[1] ? obstacle[1] - 1 + 1 : n - obstacle[1] + 1
//             } else if (sameColumn) {
//                 blockedSquares += r_q < obstacle[0] ? n - obstacle[0] + 1 : obstacle[0] - 1 + 1
//             } else if (diagonal) {
//                 const rightUp = r_q - obstacle[0] === -1 && c_q - obstacle[1] === -1
//                 const leftDown = r_q - obstacle[0] === 1 && c_q - obstacle[1] === 1
//                 const leftUp = r_q - obstacle[0] === -1 && c_q - obstacle[1] === 1
//                 const rightDown = r_q - obstacle[0] === 1 && c_q - obstacle[1] === -1

//                 if (rightUp) {
//                     blockedSquares += obstacle[0] > obstacle[1] ? n - obstacle[0] + 1 : n - obstacle[1] + 1
//                 } else if (leftDown) {
//                     blockedSquares += obstacle[0] < obstacle[1] ? obstacle[0] - 1 + 1 : obstacle[1] - 1 + 1
//                 } else if (leftUp) {
//                     blockedSquares += obstacle[0] > obstacle[1] ? n - obstacle[0] + 1 : obstacle[1] - 1 + 1
//                 } else if (rightDown) {
//                     blockedSquares += obstacle[0] < obstacle[1] ? obstacle[0] - 1 + 1 : n - obstacle[1] + 1
//                 }
//             }
//         })
        
//     }
//     possibleMoves -= blockedSquares
//     return possibleMoves
// }

//console.log(queensAttack(5,3,4,3,[[5,5],[4,2],[2,3]]))
//console.log(queensAttack(4,3,1,4,[[5,5],[4,2],[2,3]]))
// console.log(queensAttack(8,1,4,4,[[3,5]]))



// ACM ICPC TEAM

// function acmTeam(topic) {
//     const allTeams = []
//     for (let i = 0; i < topic.length - 1; i++) {
//         for (let j = i + 1; j < topic.length; j++) {
//             let teamKnows = 0
//             for (let index = 0; index < topic[0].length; index++) {
//                 if (topic[i][index] === '1' || topic[j][index] === '1') {
//                     teamKnows++
//                 }
//             }
//             allTeams.push(teamKnows)
//         }
//     }
//     const max = Math.max(...allTeams)
//     const maxFrequency = allTeams.filter(number => number === max).length
//     return [max, maxFrequency]
// }

// function acmTeam(topic) {
    
//     const allTeamSubjectsNotKnown = topic.map(subjects => {
//         const array = []
//         subjects.split('').forEach((subject, index) => {
//             if (subject === '0') {
//                 array.push(index)
//             }
//         })
//         return array
//     })

//     const allTeams = []
//     const n = allTeamSubjectsNotKnown.length
//     for (let i = 0; i < n - 1; i++) {
//         for (let j = i + 1; j < n; j++) {
//             let teamKnows = topic[0].length
//             allTeamSubjectsNotKnown[i].forEach(subjectIndex => {
//                 if (allTeamSubjectsNotKnown[j].includes(subjectIndex)) {
//                     teamKnows--
//                 }
//             })
//             allTeams.push(teamKnows)
//         }
//     }

//     const max = Math.max(...allTeams)
//     const maxFrequency = allTeams.filter(number => number === max).length
//     return [max, maxFrequency]
// }

// function acmTeam(topic) {
//     const allTeams = []
//     for (let i = 0; i < topic.length - 1; i++) {
//         const subjectsNotKnown = []
//         topic[i].split('').forEach((subject, index) => {
//             if (subject === '0') {
//                 subjectsNotKnown.push(index)
//             }
//         })
//         for (let j = i + 1; j < topic.length; j++) {
//             let teamKnows = topic[0].length
//             subjectsNotKnown.forEach(subjectIndex => {
//                 if (topic[j][subjectIndex] === '0') {
//                     teamKnows--
//                 }
//             })
//             allTeams.push(teamKnows)
//         }
//     }

//     const max = Math.max(...allTeams)
//     const maxFrequency = allTeams.filter(number => number === max).length
//     return [max, maxFrequency]
// }


// console.log(acmTeam(['10101','11100','11010','00101']))



// TAUM AND B'DAY

// function taumBday(b, w, bc, wc, z) {

//     const totalWhiteCost = wc > (bc + z) ? w * (bc + z) : w * wc
//     const totalBlackCost = bc > (wc + z) ? b * (wc + z) : b * bc
//     const totalCost = totalWhiteCost + totalBlackCost
    
//     return totalCost
// }

// console.log(taumBday(3,5,3,4,1))
// console.log(taumBday(10,10,1,1,1))
// console.log(taumBday(5,9,2,3,4))
// console.log(taumBday(3,6,9,1,1))
// console.log(taumBday(7,7,4,2,1))
// console.log(taumBday(3,3,1,9,2))
// console.log(taumBday(74240778,90529439,847666641,8651519,821801924))
//617318315833461267
// console.log(taumBday(142640749,652432197,701695848,936714099,324221606))
//711232858900355655



// ORGANISING CONTAINERS OF BALLS

// function organizingContainers(container) {
//     const containersSum = []
//     const typesSum = []
    
//     for (let i = 0; i < container.length; i++){
//         const sumRow = container[i].reduce((total, num) => {
//             return total + num
//         },0)
//         containersSum.push(sumRow)

//         const typesColumn = []
//         for (let j = 0; j < container.length; j++) {
//             typesColumn.push(container[j][i])
//         }
        
//         const sumColumn = typesColumn.reduce((total, num) => {
//             return total + num
//         },0)
//         typesSum.push(sumColumn)
//     }

//     const equal = containersSum.every((cSum, index) => {
//         const tSum = typesSum.find(tSum => tSum === cSum)
//         const tIndex = typesSum.findIndex(tSum => tSum === cSum)
//         const equal = tSum === cSum
//         if (equal) {
//             typesSum.splice(tIndex, 1)
//         }
//         return equal
//     })

//     return equal ? 'Possible' : 'Impossible'
// }

// console.log(organizingContainers([[1,3,1],[2,1,2],[3,3,3]]))
// console.log(organizingContainers([[0,2,1],[1,1,1],[2,0,0]]))
// console.log(organizingContainers([[0,2],[1,1]]))
// console.log(organizingContainers([[1,4],[2,3]]))


