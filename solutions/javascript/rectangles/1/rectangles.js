//
// This is only a SKELETON file for the 'Rectangles' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export function count(diagram) {
    let num = 0
    for (let top = 0; top < diagram.length - 1; top++) {
        for (let left = 0; left < diagram[0].length - 1; left++) {
            for (let bottom = top + 1; bottom < diagram.length; bottom++) {
                for (let right = left + 1; right < diagram[0].length; right++) {
                    num += Number(isRectangle(diagram, left, top, right, bottom))
                }
            }
        }
    }
    return num
}

const isRectangle = (diagram, left, top, right, bottom) => {
    return isCorner(diagram, left, top, right, bottom) &&
        isLine(diagram, left, right, top) &&
        isLine(diagram, left, right, bottom) &&
        isColumn(diagram, top, bottom, left) &&
        isColumn(diagram, top, bottom, right)
}

const isCorner = (diagram, left, top, right, bottom) => {
    return diagram[top][left] === CORNER &&
        diagram[bottom][left] === CORNER &&
        diagram[top][right] === CORNER &&
        diagram[bottom][right] === CORNER
}

const isLine = (diagram, left, right, row) => {
    const regex = new RegExp(`[${CORNER}${HORIZONTAL}]*`)
    return regex.test(diagram[row].slice(left + 1, right))
}

const isColumn = (diagram, top, bottom, column) => {
    return diagram.map(row => row[column])
        .filter((_, i) => i > top && i < bottom)
        .every(cell => [CORNER, VERTICAL].includes(cell))
}

const CORNER = '+'
const HORIZONTAL = '-'
const VERTICAL = '|'
