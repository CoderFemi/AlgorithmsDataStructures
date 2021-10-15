const queensAttack = (
    squareSize: number,
    numObstacles: number,
    pointY: number,
    pointX: number,
    obstacles: number[][]
) => {

    let possibleMoves = 0
    let diagonalMoves = 0
    const verticalMoves = squareSize - 1
    const horizontalMoves = squareSize - 1

    const isEven = squareSize % 2 === 0
    const mid = Math.ceil(squareSize / 2)
    const stopOne = isEven ? mid : mid - 1
    const stopTwo = mid + 1
    let y = 1, x = squareSize

    while (true) {
        // console.log(y, x)
        if (pointY == y || pointY == x && (pointX >= y && pointX <= x)) {
            // console.log('HERE')
            diagonalMoves = squareSize - 1 + (2 * (y - 1))
            break
        }
        if (y === stopOne || x === stopTwo) {
            if (!isEven) {
                if (pointY === mid && pointX === mid) {
                    diagonalMoves = squareSize - 1 + (2 * (mid - 1))
                }
            }
            break
        }
        y++, x--
    }

    const totalMoves = diagonalMoves + verticalMoves + horizontalMoves

    let blockedCells = 0
    const counter = {}
    for (let obstacle of obstacles) {
        // console.log(counter)
        let prevCount = 0
        let count = 0
        const obstacleY = obstacle[0]
        const obstacleX = obstacle[1]

        if (obstacleY === pointY) {
            if (obstacleX < pointX) {
                count = obstacleX
                prevCount = counter['xDown']
                if (!prevCount || prevCount < count) {
                    counter['xDown'] = count
                }
                // blockedCells += obstacleX
            } else {
                count = squareSize - (obstacleX - 1)
                prevCount = counter['xUp']
                if (!prevCount || prevCount < count) {
                    counter['xUp'] = count
                }
                // blockedCells += (squareSize - (obstacleX - 1))
            }

        } else if (obstacleX == pointX) {
            if (obstacleY < pointY) {
                count = obstacleY
                prevCount = counter['yDown']
                if (!prevCount || prevCount < count) {
                    counter['yDown'] = count
                }
                // blockedCells += obstacleY
            } else {
                count = squareSize - (obstacleY - 1)
                prevCount = counter['yUp']
                if (!prevCount || prevCount < count) {
                    counter['yUp'] = count
                }
                // blockedCells += (squareSize - (obstacleY - 1))
            }

        } else {
            count = 0
            const is_diagonal = Math.abs(pointY - obstacleY) === Math.abs(pointX - obstacleX)
            if (is_diagonal) {
                let yIndex = obstacleY, xIndex = obstacleX
                if (obstacleY < pointY && obstacleX > pointX) {
                    while (true) {
                        // blockedCells++
                        count++
                        if (yIndex == 1 || xIndex == squareSize) break
                        yIndex--
                        xIndex++
                    }
                    prevCount = counter['bottomRight']
                    if (!prevCount || prevCount < count) {
                        counter['bottomRight'] = count
                    }
                } else if (obstacleY < pointY && obstacleX < pointX) {
                    while (true) {
                        // blockedCells++
                        count++
                        if (yIndex == 1 || xIndex == 1) break
                        yIndex--
                        xIndex--
                    }
                    prevCount = counter['bottomLeft']
                    if (!prevCount || prevCount < count) {
                        counter['bottomLeft'] = count
                    }
                } else if (obstacleY > pointY && obstacleX > pointX) {
                    while (true) {
                        // blockedCells++
                        count++
                        if (yIndex == squareSize || xIndex == squareSize) break
                        yIndex++
                        xIndex++
                    }
                    prevCount = counter['topRight']
                    if (!prevCount || prevCount < count) {
                        counter['topRight'] = count
                    }
                } else if (obstacleY > pointY && obstacleX < pointX) {
                    while (true) {
                        // blockedCells++
                        count++
                        if (yIndex == squareSize || xIndex == 1) break
                        yIndex++
                        xIndex--
                    }
                    prevCount = counter['topLeft']
                    if (!prevCount || prevCount < count) {
                        counter['topLeft'] = count
                    }
                }
            }
        }
    }
    console.log(counter)
    for (let key in counter) {
        const val = counter[key]
        blockedCells += val
    }
    console.log(diagonalMoves, verticalMoves, horizontalMoves, blockedCells, totalMoves)
    possibleMoves = totalMoves - blockedCells
    return possibleMoves
}

// console.log(queensAttack(8, 1, 4, 4, [[3, 5]]))
// console.log(queensAttack(4, 0, 4, 4, []))
// console.log(queensAttack(5, 3, 4, 3, [[5, 5], [4, 2], [2, 3]]))
// console.log(queensAttack(1, 0, 1, 1, []))
const test_case_queen = [[54, 87], [64, 97], [42, 75], [32, 65], [42, 87], [32, 97], [54, 75], [64, 65], [48, 87], [48, 75], [54, 81], [42, 81], [45, 17], [14, 24], [35, 15], [95, 64], [63, 87], [25, 72], [71, 38], [96, 97], [16, 30], [60, 34], [31, 67], [26, 82], [20, 93], [81, 38], [51, 94], [75, 41], [79, 84], [79, 65], [76, 80], [52, 87], [81, 54], [89, 52], [20, 31], [10, 41], [32, 73], [83, 98], [87, 61], [82, 52], [80, 64], [82, 46], [49, 21], [73, 86], [37, 70], [43, 12], [94, 28], [10, 93], [52, 25], [50, 61], [52, 68], [52, 23], [60, 91], [79, 17], [93, 82], [12, 18], [75, 64], [69, 69], [94, 74], [61, 61], [46, 57], [67, 45], [96, 64], [83, 89], [58, 87], [76, 53], [79, 21], [94, 70], [16, 10], [50, 82], [92, 20], [40, 51], [49, 28], [51, 82], [35, 16], [15, 86], [78, 89], [41, 98], [70, 46], [79, 79], [24, 40], [91, 13], [59, 73], [35, 32], [40, 31], [14, 31], [71, 35], [96, 18], [27, 39], [28, 38], [41, 36], [31, 63], [52, 48], [81, 25], [49, 90], [32, 65], [25, 45], [63, 94], [89, 50], [43, 41]]
console.log(queensAttack(100, 100, 48, 81, test_case_queen))