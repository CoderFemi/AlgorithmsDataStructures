const queensAttack = (
    squareSize: number,
    numObstacles: number,
    pointY: number,
    pointX: number,
    obstacles: number[][]
) => {

    let possibleMoves = 0
    const keys = ['up', 'down', 'left', 'right', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight']
    const counter: { [index: string]: number } = {}

    for (let key of keys) {
        counter[key] = squareSize
    }

    for (let obstacle of obstacles) {
        const obstacleY = obstacle[0]
        const obstacleX = obstacle[1]

        const isUp = obstacleX === pointX && obstacleY > pointY
        const isDown = obstacleX === pointX && obstacleY < pointY
        const isLeft = obstacleY === pointY && obstacleX < pointX
        const isRight = obstacleY === pointY && obstacleX > pointX

        const isDiagonal = Math.abs(pointY - obstacleY) === Math.abs(pointX - obstacleX)

        const isTopLeft = obstacleY > pointY && obstacleX < pointX && isDiagonal
        const isTopRight = obstacleY > pointY && obstacleX > pointX && isDiagonal
        const isBottomLeft = obstacleY < pointY && obstacleX < pointX && isDiagonal
        const isBottomRight = obstacleY < pointY && obstacleX > pointX && isDiagonal

        if (isUp) {
            const minCellsOpen = counter[keys[0]]
            const countCells = obstacleY - pointY - 1
            if (minCellsOpen > countCells) {
                counter[keys[0]] = countCells
            }

        } else if (isDown) {
            const minCellsOpen = counter[keys[1]]
            const countCells = pointY - obstacleY - 1
            if (minCellsOpen > countCells) {
                counter[keys[1]] = countCells
            }

        } else if (isLeft) {
            const minCellsOpen = counter[keys[2]]
            const countCells = pointX - obstacleX - 1
            if (minCellsOpen > countCells) {
                counter[keys[2]] = countCells
            }

        } else if (isRight) {
            const minCellsOpen = counter[keys[3]]
            const countCells = obstacleX - pointX - 1
            if (minCellsOpen > countCells) {
                counter[keys[3]] = countCells
            }

        } else if (isTopLeft) {
            const minCellsOpen = counter[keys[4]]
            const countCells = pointX - obstacleX - 1
            if (minCellsOpen > countCells) {
                counter[keys[4]] = countCells
            }

        } else if (isTopRight) {
            const minCellsOpen = counter[keys[5]]
            const countCells = obstacleX - pointX - 1
            if (minCellsOpen > countCells) {
                counter[keys[5]] = countCells
            }

        } else if (isBottomLeft) {
            const minCellsOpen = counter[keys[6]]
            const countCells = pointX - obstacleX - 1
            if (minCellsOpen > countCells) {
                counter[keys[6]] = countCells
            }

        } else if (isBottomRight) {
            const minCellsOpen = counter[keys[7]]
            const countCells = obstacleX - pointX - 1
            if (minCellsOpen > countCells) {
                counter[keys[7]] = countCells
            }
        }
    }

    for (let key in counter) {
        const minCellsOpen = counter[key]

        if (minCellsOpen !== squareSize) {
            possibleMoves += minCellsOpen

        } else {
            if (key === keys[0]) {
                const cellsOpen = squareSize - pointY
                possibleMoves += cellsOpen

            } else if (key === keys[1]) {
                const cellsOpen = pointY - 1
                possibleMoves += cellsOpen

            } else if (key === keys[2]) {
                const cellsOpen = pointX - 1
                possibleMoves += cellsOpen

            } else if (key === keys[3]) {
                const cellsOpen = squareSize - pointX
                possibleMoves += cellsOpen

            } else {
                let startX = pointX, startY = pointY
                if (key === keys[4]) {
                    while (true) {
                        const endLoop = startX === 1 || startY === squareSize
                        if (endLoop) break
                        possibleMoves++
                        startX--
                        startY++
                    }

                } else if (key === keys[5]) {
                    while (true) {
                        const endLoop = startX === squareSize || startY === squareSize
                        if (endLoop) break
                        possibleMoves++
                        startX++
                        startY++
                    }
                } else if (key === keys[6]) {
                    while (true) {
                        const endLoop = startX === 1 || startY === 1
                        if (endLoop) break
                        possibleMoves++
                        startX--
                        startY--
                    }

                } else if (key === keys[7]) {
                    while (true) {
                        const endLoop = startX === squareSize || startY === 1
                        if (endLoop) break
                        possibleMoves++
                        startX++
                        startY--
                    }
                }
            }
        }
    }

    return possibleMoves
}


// const queensAttack = (
//     squareSize: number,
//     numObstacles: number,
//     pointY: number,
//     pointX: number,
//     obstacles: number[][]
// ) => {

//     let possibleMoves = 0
//     const keys = ['up', 'down', 'left', 'right', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight']
//     const counter: { [index: string]: number } = {}

//     for (let key of keys) {
//         counter[key] = squareSize
//     }

//     for (let obstacle of obstacles) {
//         const obstacleY = obstacle[0]
//         const obstacleX = obstacle[1]
//         let diff = Math.abs(pointX - obstacleX)

//         const isUp = obstacleX === pointX && obstacleY > pointY
//         const isDown = obstacleX === pointX && obstacleY < pointY
//         const isLeft = obstacleY === pointY && obstacleX < pointX
//         const isRight = obstacleY === pointY && obstacleX > pointX

//         const isDiagonal = Math.abs(pointY - obstacleY) === Math.abs(pointX - obstacleX)

//         const isTopLeft = obstacleY > pointY && obstacleX < pointX && isDiagonal
//         const isTopRight = obstacleY > pointY && obstacleX > pointX && isDiagonal
//         const isBottomLeft = obstacleY < pointY && obstacleX < pointX && isDiagonal
//         const isBottomRight = obstacleY < pointY && obstacleX > pointX && isDiagonal

//         if (isUp) {
//             const minDiff = counter[keys[0]]
//             diff = Math.abs(pointY - obstacleY)
//             if (minDiff > diff) {
//                 counter[keys[0]] = diff
//                 const cellsOpen = obstacleY - pointY - 1
//                 possibleMoves += cellsOpen
//             }

//         } else if (isDown) {
//             const minDiff = counter[keys[1]]
//             diff = Math.abs(pointY - obstacleY)
//             if (minDiff > diff) {
//                 counter[keys[1]] = diff
//                 const cellsOpen = pointY - obstacleY - 1
//                 possibleMoves += cellsOpen
//             }

//         } else if (isLeft) {
//             const minDiff = counter[keys[2]]
//             if (minDiff > diff) {
//                 counter[keys[2]] = diff
//                 const cellsOpen = pointX - obstacleX - 1
//                 possibleMoves += cellsOpen
//             }

//         } else if (isRight) {
//             const minDiff = counter[keys[3]]
//             if (minDiff > diff) {
//                 counter[keys[3]] = diff
//                 const cellsOpen = obstacleX - pointX - 1
//                 possibleMoves += cellsOpen
//             }

//         } else if (isTopLeft) {
//             const minDiff = counter[keys[4]]
//             if (minDiff > diff) {
//                 counter[keys[4]] = diff
//                 const cellsOpen = pointX - obstacleX - 1
//                 possibleMoves += cellsOpen
//             }

//         } else if (isBottomLeft) {
//             const minDiff = counter[keys[5]]
//             if (minDiff > diff) {
//                 counter[keys[5]] = diff
//                 const cellsOpen = pointX - obstacleX - 1
//                 possibleMoves += cellsOpen
//             }

//         } else if (isTopRight) {
//             const minDiff = counter[keys[6]]
//             if (minDiff > diff) {
//                 counter[keys[6]] = diff
//                 const cellsOpen = obstacleX - pointX - 1
//                 possibleMoves += cellsOpen
//             }

//         } else if (isBottomRight) {
//             const minDiff = counter[keys[7]]
//             if (minDiff > diff) {
//                 counter[keys[7]] = diff
//                 const cellsOpen = obstacleX - pointX - 1
//                 possibleMoves += cellsOpen
//             }
//         }
//     }

//     for (let key in counter) {
//         const minDiff = counter[key]
//         if (minDiff === squareSize) {

//             if (key === keys[0]) {
//                 const cellsOpen = squareSize - pointY
//                 possibleMoves += cellsOpen

//             } else if (key === keys[1]) {
//                 const cellsOpen = pointY - 1
//                 possibleMoves += cellsOpen

//             } else if (key === keys[2]) {
//                 const cellsOpen = pointX - 1
//                 possibleMoves += cellsOpen

//             } else if (key === keys[3]) {
//                 const cellsOpen = squareSize - pointX
//                 possibleMoves += cellsOpen

//             } else {
//                 let startX = pointX, startY = pointY
//                 if (key === keys[4]) {
//                     while (true) {
//                         const endLoop = startX === 1 || startY === squareSize
//                         if (endLoop) break
//                         possibleMoves++
//                         startX--
//                         startY++
//                     }

//                 } else if (key === keys[5]) {
//                     while (true) {
//                         const endLoop = startX === squareSize || startY === squareSize
//                         if (endLoop) break
//                         possibleMoves++
//                         startX++
//                         startY++
//                     }

//                 } else if (key === keys[6]) {
//                     while (true) {
//                         const endLoop = startX === 1 || startY === 1
//                         if (endLoop) break
//                         possibleMoves++
//                         startX--
//                         startY--
//                     }

//                 } else if (key === keys[7]) {
//                     while (true) {
//                         const endLoop = startX === squareSize || startY === 1
//                         if (endLoop) break
//                         possibleMoves++
//                         startX++
//                         startY--
//                     }
//                 }
//             }
//         }
//     }

//     return possibleMoves
// }



// const queensAttack = (
//     squareSize: number,
//     numObstacles: number,
//     pointY: number,
//     pointX: number,
//     obstacles: number[][]
// ) => {

//     let possibleMoves = 0
//     let diagonalMoves = 0
//     const verticalMoves = squareSize - 1
//     const horizontalMoves = squareSize - 1

//     const isEven = squareSize % 2 === 0
//     const mid = Math.ceil(squareSize / 2)
//     const stopOne = isEven ? mid : mid - 1
//     const stopTwo = mid + 1
//     let y = 1, x = squareSize

//     while (true) {
//         // console.log(y, x)
//         if (pointY == y || pointY == x && (pointX >= y && pointX <= x)) {
//             // console.log('HERE')
//             diagonalMoves = squareSize - 1 + (2 * (y - 1))
//             break
//         }
//         if (y === stopOne || x === stopTwo) {
//             if (!isEven) {
//                 if (pointY === mid && pointX === mid) {
//                     diagonalMoves = squareSize - 1 + (2 * (mid - 1))
//                 }
//             }
//             break
//         }
//         y++, x--
//     }

//     const totalMoves = diagonalMoves + verticalMoves + horizontalMoves

//     let blockedCells = 0
//     const counter = {}
//     for (let obstacle of obstacles) {
//         // console.log(counter)
//         let prevCount = 0
//         let count = 0
//         const obstacleY = obstacle[0]
//         const obstacleX = obstacle[1]

//         if (obstacleY === pointY) {
//             if (obstacleX < pointX) {
//                 count = obstacleX
//                 prevCount = counter['xDown']
//                 if (!prevCount || prevCount < count) {
//                     counter['xDown'] = count
//                 }
//                 // blockedCells += obstacleX
//             } else {
//                 count = squareSize - (obstacleX - 1)
//                 prevCount = counter['xUp']
//                 if (!prevCount || prevCount < count) {
//                     counter['xUp'] = count
//                 }
//                 // blockedCells += (squareSize - (obstacleX - 1))
//             }

//         } else if (obstacleX == pointX) {
//             if (obstacleY < pointY) {
//                 count = obstacleY
//                 prevCount = counter['yDown']
//                 if (!prevCount || prevCount < count) {
//                     counter['yDown'] = count
//                 }
//                 // blockedCells += obstacleY
//             } else {
//                 count = squareSize - (obstacleY - 1)
//                 prevCount = counter['yUp']
//                 if (!prevCount || prevCount < count) {
//                     counter['yUp'] = count
//                 }
//                 // blockedCells += (squareSize - (obstacleY - 1))
//             }

//         } else {
//             count = 0
//             const is_diagonal = Math.abs(pointY - obstacleY) === Math.abs(pointX - obstacleX)
//             if (is_diagonal) {
//                 let yIndex = obstacleY, xIndex = obstacleX
//                 if (obstacleY < pointY && obstacleX > pointX) {
//                     while (true) {
//                         // blockedCells++
//                         count++
//                         if (yIndex == 1 || xIndex == squareSize) break
//                         yIndex--
//                         xIndex++
//                     }
//                     prevCount = counter['bottomRight']
//                     if (!prevCount || prevCount < count) {
//                         counter['bottomRight'] = count
//                     }
//                 } else if (obstacleY < pointY && obstacleX < pointX) {
//                     while (true) {
//                         // blockedCells++
//                         count++
//                         if (yIndex == 1 || xIndex == 1) break
//                         yIndex--
//                         xIndex--
//                     }
//                     prevCount = counter['bottomLeft']
//                     if (!prevCount || prevCount < count) {
//                         counter['bottomLeft'] = count
//                     }
//                 } else if (obstacleY > pointY && obstacleX > pointX) {
//                     while (true) {
//                         // blockedCells++
//                         count++
//                         if (yIndex == squareSize || xIndex == squareSize) break
//                         yIndex++
//                         xIndex++
//                     }
//                     prevCount = counter['topRight']
//                     if (!prevCount || prevCount < count) {
//                         counter['topRight'] = count
//                     }
//                 } else if (obstacleY > pointY && obstacleX < pointX) {
//                     while (true) {
//                         // blockedCells++
//                         count++
//                         if (yIndex == squareSize || xIndex == 1) break
//                         yIndex++
//                         xIndex--
//                     }
//                     prevCount = counter['topLeft']
//                     if (!prevCount || prevCount < count) {
//                         counter['topLeft'] = count
//                     }
//                 }
//             }
//         }
//     }
//     console.log(counter)
//     for (let key in counter) {
//         const val = counter[key]
//         blockedCells += val
//     }
//     console.log(diagonalMoves, verticalMoves, horizontalMoves, blockedCells, totalMoves)
//     possibleMoves = totalMoves - blockedCells
//     return possibleMoves
// }

console.log(queensAttack(8, 1, 4, 4, [[3, 5]]))
console.log(queensAttack(4, 0, 4, 4, []))
console.log(queensAttack(5, 3, 4, 3, [[5, 5], [4, 2], [2, 3]]))
console.log(queensAttack(1, 0, 1, 1, []))
const test_case_queen = [[54, 87], [64, 97], [42, 75], [32, 65], [42, 87], [32, 97], [54, 75], [64, 65], [48, 87], [48, 75], [54, 81], [42, 81], [45, 17], [14, 24], [35, 15], [95, 64], [63, 87], [25, 72], [71, 38], [96, 97], [16, 30], [60, 34], [31, 67], [26, 82], [20, 93], [81, 38], [51, 94], [75, 41], [79, 84], [79, 65], [76, 80], [52, 87], [81, 54], [89, 52], [20, 31], [10, 41], [32, 73], [83, 98], [87, 61], [82, 52], [80, 64], [82, 46], [49, 21], [73, 86], [37, 70], [43, 12], [94, 28], [10, 93], [52, 25], [50, 61], [52, 68], [52, 23], [60, 91], [79, 17], [93, 82], [12, 18], [75, 64], [69, 69], [94, 74], [61, 61], [46, 57], [67, 45], [96, 64], [83, 89], [58, 87], [76, 53], [79, 21], [94, 70], [16, 10], [50, 82], [92, 20], [40, 51], [49, 28], [51, 82], [35, 16], [15, 86], [78, 89], [41, 98], [70, 46], [79, 79], [24, 40], [91, 13], [59, 73], [35, 32], [40, 31], [14, 31], [71, 35], [96, 18], [27, 39], [28, 38], [41, 36], [31, 63], [52, 48], [81, 25], [49, 90], [32, 65], [25, 45], [63, 94], [89, 50], [43, 41]]
const test_case_queen_two = [[48, 36], [38, 46], [60, 24], [70, 14], [54, 36], [54, 24], [60, 30], [48, 30], [71, 50], [14, 97], [47, 31], [29, 68], [90, 10], [36, 85], [63, 24], [32, 13], [64, 57], [45, 57], [86, 19], [43, 86], [68, 72], [29, 25], [48, 59], [38, 78], [45, 16], [40, 92], [76, 85], [40, 10], [65, 16], [71, 18], [90, 40], [65, 45], [10, 37], [19, 82], [42, 56], [46, 60], [94, 14], [34, 36], [95, 49], [78, 67], [86, 23], [28, 12], [95, 57], [38, 19], [61, 49], [67, 42], [28, 25], [38, 28], [91, 20], [90, 86], [81, 19], [18, 43], [29, 69], [36, 20], [72, 75], [39, 50], [17, 92], [48, 25], [20, 79], [82, 57], [58, 50], [94, 70], [17, 19], [73, 20], [45, 12], [19, 89], [45, 12], [59, 74], [63, 71], [32, 23], [67, 85], [24, 25], [18, 61], [97, 50], [70, 37], [30, 10], [39, 90], [75, 58], [58, 34], [47, 62], [28, 28], [79, 34], [73, 80], [93, 36], [25, 45], [48, 75], [42, 13], [18, 69], [35, 21], [18, 87], [57, 19], [26, 92], [94, 34], [84, 48], [61, 95], [62, 89], [59, 74], [50, 40], [36, 37], [95, 62]]
console.log(queensAttack(100, 100, 48, 81, test_case_queen))
console.log(queensAttack(100, 100, 54, 30, test_case_queen_two))