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