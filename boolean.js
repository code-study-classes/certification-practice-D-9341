export const isPositive = (numby) => {
    if (numby === 0) return false
    return true ? numby === Math.abs(numby) : false
}
