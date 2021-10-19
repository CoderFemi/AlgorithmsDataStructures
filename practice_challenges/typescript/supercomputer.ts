const twoPluses = (grid: string[]): number => {

    let goodExists = false
    const goodCrosses: { area: number, positions: number[] }[] = []
    // const goodCrosses: { [key: number]: number[] } = {}

    for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
        const row = grid[rowIndex]

        for (let colIndex = 0; colIndex < row.length; colIndex++) {
            const char = row[colIndex]
            if (!goodExists) {
                if (char === 'G') {
                    goodExists = true
                    break
                }
            }

            const isWithin = rowIndex > 0 && rowIndex < grid.length - 1 && colIndex > 0 && colIndex < row.length - 1
            if (isWithin) {
                let crossArea = 1
                let prevIndex = colIndex - 1, nextIndex = colIndex + 1, topIndex = rowIndex - 1, bottomIndex = rowIndex + 1
                const getCharPosition = (rowIndexTwo: number, charIndex: number): number => (rowIndexTwo * grid.length) + charIndex + 1
                let charPositions = [getCharPosition(rowIndex, colIndex)]

                while (true) {
                    const prevChar = row[prevIndex]
                    const nextChar = row[nextIndex]
                    const topChar = grid[topIndex][colIndex]
                    const bottomChar = grid[bottomIndex][colIndex]

                    const chars = [char, prevChar, nextChar, topChar, bottomChar]
                    const isGoodCross = chars.every(char => char === 'G')


                    if (isGoodCross) {
                        crossArea += 4
                        const charIndices = [[rowIndex, prevIndex], [rowIndex, nextIndex], [topIndex, colIndex], [bottomIndex, colIndex]]
                        const addPositions = charIndices.map(charIndex => getCharPosition(charIndex[0], charIndex[1]))
                        charPositions = charPositions.concat(addPositions)
                        goodCrosses.push({ area: crossArea, positions: charPositions })

                    } else break

                    prevIndex--, nextIndex++, topIndex--, bottomIndex++
                    if (prevIndex < 0 || nextIndex == row.length || topIndex < 0 || bottomIndex === grid.length) break
                }

            }
        }
    }

    if (goodCrosses.length === 0 && goodExists) return 1
    if (goodCrosses.length === 1) return goodCrosses[0].area
    goodCrosses.sort((a, b) => b.area - a.area)
    let maxArea = 0

    for (let index = 0; index < goodCrosses.length - 1; index++) {
        const crossOneArea = goodCrosses[index]['area']
        const crossOnePositions = goodCrosses[index]['positions']
        let nextIndex = index + 1

        for (nextIndex; nextIndex < goodCrosses.length; nextIndex++) {
            let isOverlap = false
            const crossTwoArea = goodCrosses[nextIndex]['area']
            const crossTwoPositions = goodCrosses[nextIndex]['positions']

            for (let num of crossOnePositions) {
                let breakOuter = false
                for (let numTwo of crossTwoPositions) {
                    if (num === numTwo) {
                        breakOuter = true
                        isOverlap = true
                        break
                    }
                }
                if (breakOuter) break
            }

            const area = crossOneArea * crossTwoArea
            if (!isOverlap && area > maxArea) {
                maxArea = area
            }
        }
    }

    return maxArea > 0 ? maxArea : goodCrosses[0].area
}



console.log(twoPluses(['GGGGGG', 'GBBBGB', 'GGGGGG', 'GGBBGB', 'GGGGGG']))
console.log(twoPluses(['BGBBGB', 'GGGGGG', 'BGBBGB', 'GGGGGG', 'BGBBGB', 'BGBBGB']))
console.log(twoPluses(['GBGBGGB', 'GBGBGGB', 'GBGBGGB', 'GGGGGGG', 'GGGGGGG', 'GBGBGGB', 'GBGBGGB']))
console.log(twoPluses(['GGGGGGG', 'BGBBBBG', 'BGBBBBG', 'GGGGGGG', 'GGGGGGG', 'BGBBBBG']))
console.log(twoPluses(['GGGGGGGG', 'GBGBGGBG', 'GBGBGGBG', 'GGGGGGGG', 'GBGBGGBG', 'GGGGGGGG', 'GBGBGGBG', 'GGGGGGGG']))
console.log(twoPluses(['GGGGGGGGGGGG', 'GBGGBBBBBBBG', 'GBGGBBBBBBBG', 'GGGGGGGGGGGG', 'GGGGGGGGGGGG', 'GGGGGGGGGGGG', 'GGGGGGGGGGGG', 'GBGGBBBBBBBG', 'GBGGBBBBBBBG', 'GBGGBBBBBBBG', 'GGGGGGGGGGGG', 'GBGGBBBBBBBG']))