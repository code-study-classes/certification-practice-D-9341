export const isPositive = (numby) => {
    if (numby === 0) return false
    return true ? numby === Math.abs(numby) : false
}

export const isOdd = (numby) => {
    if (numby === 0) return false
    return true ? numby % 2 !== 0 : false
}

export const checkInequality = (a, b) => {
    return true ? a > 2 && b <= 3 : false
}

export const checkInequality2 = (a, b) => {
    return true ? a >= 0 || b < -2 : false
}

export const checkBetweenNumbers = (a, b, c) => {
    if (a > b && b > c) return true
    else if (a < b && b < c) return true
    else return false
}

export const checkOddThreeDigitNumber = (numby) => {
    if (numby < 100) return false
    else if (numby % 2 !== 0) return true
    else return false
}

export const checkUniqueDigits = (numby) => {
    let final = numby.toString().split('')

}

export const isSecondQuadrant = (x, y) => {
    if (x < 0 && y > 0) return true
    else return false
}

export const isIsoscelesTriangle = (a, b, c) => {
    if ((a === b || b === c || c === a) && !(a === b && b === c && c === a)) return true
    else return false
}