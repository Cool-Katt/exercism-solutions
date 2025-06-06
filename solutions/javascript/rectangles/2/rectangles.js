export function count(diagram) {
    let num = 0;
    for (let top = 0; top < diagram.length; top++) {
        for (let left = 0; left < diagram[0].length; left++) {
            if (diagram[top][left] === CORNER) {
                for (let bottom = top + 1; bottom < diagram.length; bottom++) {
                    for (let right = left + 1; right < diagram[0].length; right++) {
                        if (diagram[bottom][right] === CORNER) {
                            num += Number(isRectangle(diagram, left, top, right, bottom));
                        }
                    }
                }
            }
        }
    }
    return num;
}

const isRectangle = (diagram, left, top, right, bottom) => {
    return isCorner(diagram, left, top, right, bottom) &&
        isLine(diagram, left, right, top) &&
        isLine(diagram, left, right, bottom) &&
        isColumn(diagram, top, bottom, left) &&
        isColumn(diagram, top, bottom, right);
}

const isCorner = (diagram, left, top, right, bottom) => {
    return diagram[top][left] === CORNER &&
        diagram[top][right] === CORNER &&
        diagram[bottom][left] === CORNER &&
        diagram[bottom][right] === CORNER;
}

const isLine = (diagram, left, right, row) => {
    return diagram[row]
        .split('')
        .map((char, index) => (index > left && index < right) ? char : null)
        .filter(char => char !== null)
        .every(cell => [HORIZONTAL, CORNER].includes(cell));
}

const isColumn = (diagram, top, bottom, column) => {
    return diagram
        .map(row => row[column])
        .map((cell, index) => (index > top && index < bottom) ? cell : null)
        .filter(cell => cell !== null)
        .every(cell => [VERTICAL, CORNER].includes(cell));
}

const CORNER = '+';
const HORIZONTAL = '-';
const VERTICAL = '|';
