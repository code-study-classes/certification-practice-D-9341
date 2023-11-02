export const isPositive = (numby) => {
    if (numby === 0) return false
    return true ? numby === Math.abs(numby) : false
}

export const isOdd = (numby) => {
    if (numby === 0) return false
    return true ? numby % 2 !== 0 : false
}