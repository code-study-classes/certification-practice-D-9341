export const countUppercaseLetters = (text) => {
    let count = 0
    for(let i = 0; i < text.length; i += 1) {
        if (text[i] === text[i].toLowerCase()) {
            count += 1
        }
    }
    return text.length - count
}

export const combineStrings = () => {
    
}