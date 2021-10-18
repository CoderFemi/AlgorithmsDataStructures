const bomberMan = (numSeconds: number, grid: string[]): string[] => {

    const explodeBombs = (initialGrid: string[][]): string[][] => {
        for (let rowIndex = 0; rowIndex < initialGrid.length; rowIndex++) {
            const row = initialGrid[rowIndex]

            for (let colIndex = 0; colIndex < row.length; colIndex++) {
                const char = row[colIndex]
                const nextChar = row[colIndex + 1]
                const downChar = rowIndex < initialGrid.length - 1 ? initialGrid[rowIndex + 1][colIndex] : undefined

                if (char === 'O') {
                    initialGrid[rowIndex][colIndex] = '.'
                    if (nextChar !== undefined && nextChar !== 'O') {
                        initialGrid[rowIndex][colIndex + 1] = 'X'
                    }
                    if (downChar !== undefined && downChar !== 'O') {
                        initialGrid[rowIndex + 1][colIndex] = 'X'
                    }

                } else if (char === 'X' || nextChar === 'O' || downChar === 'O') {
                    initialGrid[rowIndex][colIndex] = '.'

                } else {
                    initialGrid[rowIndex][colIndex] = 'O'
                }
            }
        }

        return initialGrid
    }

    const gridArr = grid.map(str => str.split(''))
    const plantedGrid = grid.map(str => {
        const strBombs = 'O'.repeat(grid[0].length)
        return strBombs
    })
    const isFirstOdd = (numSeconds - 3) % 4 === 0
    const isSecondOdd = (numSeconds - 5) % 4 === 0
    let finalGrid: string[] = []

    if (numSeconds === 1) {
        finalGrid = grid
        return finalGrid
    }

    if (numSeconds % 2 === 0) {
        finalGrid = plantedGrid
    }

    if (isFirstOdd) {
        const initialGrid = explodeBombs(gridArr)
        finalGrid = initialGrid.map(arr => arr.join(''))
    }

    if (isSecondOdd) {
        const initialGrid = explodeBombs(explodeBombs(gridArr))
        finalGrid = initialGrid.map(arr => arr.join(''))
    }

    return finalGrid
}

// const bomberMan = (numSeconds: number, grid: string[]): string[] => {
//     if (numSeconds === 1) return grid

//     const gridArr = grid.map(str => str.split(''))
//     const plantedGrid = grid.map(str => {
//         const strBombs = 'O'.repeat(grid[0].length)
//         return strBombs
//     })

//     if (numSeconds % 2 === 0) return plantedGrid

//     const explodeBombs = (numExplosions: number, updatedGrid: string[][]): string[] => {
//         for (let rowIndex = 0; rowIndex < updatedGrid.length; rowIndex++) {
//             const row = updatedGrid[rowIndex]

//             for (let colIndex = 0; colIndex < row.length; colIndex++) {
//                 const char = row[colIndex]
//                 const nextChar = row[colIndex + 1]
//                 const downChar = rowIndex < updatedGrid.length - 1 ? updatedGrid[rowIndex + 1][colIndex] : undefined

//                 if (char === 'O') {
//                     updatedGrid[rowIndex][colIndex] = '.'
//                     if (nextChar !== undefined && nextChar !== 'O') {
//                         updatedGrid[rowIndex][colIndex + 1] = 'X'
//                     }
//                     if (downChar !== undefined && downChar !== 'O') {
//                         updatedGrid[rowIndex + 1][colIndex] = 'X'
//                     }

//                 } else if (char === 'X' || nextChar === 'O' || downChar === 'O') {
//                     updatedGrid[rowIndex][colIndex] = '.'

//                 } else {
//                     updatedGrid[rowIndex][colIndex] = 'O'
//                 }
//             }
//         }
//         // const final = updatedGrid.map(arr => arr.join(''))
//         // return final

//         numExplosions--

//         if (numExplosions === 0) {
//             const finalGrid = updatedGrid.map(arr => arr.join(''))
//             return finalGrid

//         } else return explodeBombs(numExplosions, updatedGrid)
//     }

//     const numExplosions = (numSeconds - 1) / 2
//     return explodeBombs(numExplosions, gridArr)
// }

console.log(bomberMan(3, ['.......', '...O...', '....O..', '.......', 'OO.....', 'OO.....']))
// console.log(bomberMan(5, ['.......', '...O.O.', '....O..', '..O....', 'OO...OO', 'OO.O...']))