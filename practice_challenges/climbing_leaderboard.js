
// CLIMBING LEADERBOARD

// WORKING SOLUTION

const climbingLeaderboard = (rankings, player) => {
    const playerRankings = []
    const leaderBoard = [...new Set(rankings)]
    let start = leaderBoard.length - 1
    let position = leaderBoard.length
    for (let score of player) {
        for (let i = start; i >= 0; i--) {
            const item = leaderBoard[i]
            if (score < item) {
                playerRankings.push(position + 1)
                start = i
                break
            } else if (score === item) {
                playerRankings.push(position)
                start = i
                break
            } else if (i === 0 && score > item) {
                playerRankings.push(position)
            }
            position--
        }
    }
    return playerRankings
}

const rankings = [100,100,50,40,40,20,10]
const player = [5, 25, 50, 120]

// const rankings = [295, 294, 291, 287, 287, 285, 285, 284, 283, 279, 277, 274, 274, 271, 270, 268, 268, 268, 264, 260, 259, 258, 257, 255, 252, 250, 244, 241, 240, 237, 236, 236, 231, 227, 227, 227, 226, 225, 224, 223, 216, 212, 200, 197, 196, 194, 193, 189, 188, 187, 183, 182, 178, 177, 173, 171, 169, 165, 143, 140, 137, 135, 133, 130, 130, 130, 128, 127, 122, 120, 116, 114, 113, 109, 106, 103, 99, 92, 85, 81, 69, 68, 63, 63, 63, 61, 57, 51, 47, 46, 38, 30, 28, 25, 22, 15, 14, 12, 6, 4]
// const player = [5, 5, 6, 14, 19, 20, 23, 25, 29, 29, 30, 30, 32, 37, 38, 38, 38, 41, 41, 44, 45, 45, 47, 59, 59, 62, 63, 65, 67, 69, 70, 72, 72, 76, 79, 82, 83, 90, 91, 92, 93, 98, 98, 100, 100, 102, 103, 105, 106, 107, 109, 112, 115, 118, 118, 121, 122, 122, 123, 125, 125, 125, 127, 128, 131, 131, 133, 134, 139, 140, 141, 143, 144, 144, 144, 144, 147, 150, 152, 155, 156, 160, 164, 164, 165, 165, 166, 168, 169, 170, 171, 172, 173, 174, 174, 180, 184, 187, 187, 188, 194, 197, 197, 197, 198, 201, 202, 202, 207, 208, 211, 212, 212, 214, 217, 219, 219, 220, 220, 223, 225, 227, 228, 229, 229, 233, 235, 235, 236, 242, 242, 245, 246, 252, 253, 253, 257, 257, 260, 261, 266, 266, 268, 269, 271, 271, 275, 276, 281, 282, 283, 284, 285, 287, 289, 289, 295, 296, 298, 300, 300, 301, 304, 306, 308, 309, 310, 316, 318, 318, 324, 326, 329, 329, 329, 330, 330, 332, 337, 337, 341, 341, 349, 351, 351, 354, 356, 357, 366, 369, 377, 379, 380, 382, 391, 391, 394, 396, 396, 400]

console.log(climbingLeaderboard(rankings, player))


// NAIVE SOLUTIONS WITH RUNTIME ERROR ------------------------------------------

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
//             if (score >= arr[0]) return position
//             if (arr.length <= 1) return position + 1
//             let mid = Math.floor(arr.length / 2)
//             console.log(arr)
//             console.log(position, mid)
//             let leftSide = arr.slice(0, mid)
//             let rightSide = arr.slice(mid)
//             if (score > arr[mid]) {
//                 return helper(leftSide, score)
//             } else if (score < arr[mid]) {
//                 position += mid
//                 return helper(rightSide, score)
//             } else {
//                 return position + mid
//             }
//         })(arr, score)
//     }
//     for (let score of player) {
//         const position = scoreRanking(leaderBoard, score)
//         playerRankings.push(position)
//     }

// ALTERNATIVE LOOP
// for (let score of player) {
    //     let position
    //     if (memo[score] !== undefined) {
    //         position = memo[score]
    //         playerRankings.push(position)
    //     } else {
    //         position = scoreRanking(leaderBoard, score)
    //         memo[score] = position
    //         playerRankings.push(position)
    //     }

    // }

//     return playerRankings
// }

// const climbingLeaderboard = (rankings, player) => {
//     const playerRankings = []
//     for (let score of player) {
//         const counter = {}
//         let position = 1
//         const leaderBoard = rankings.concat([])
//         leaderBoard.push(score)
//         for (let item of leaderBoard) {
//             if (score > item) {
//                 playerRankings.push(position)
//                 break
//             } else if (!counter[item]) {
//                 counter[item] = position
//                 if (score === item) {
//                     playerRankings.push(position)
//                     break
//                 }
//                 position++
//             }
//         }
//     }
//     return playerRankings
// }