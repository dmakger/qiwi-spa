const SLICE = 3;

const getSymbol = (money) => {
    if (money < 0)
        return '-'
    return ''
}

export const moneyInText = (money) => {
    let s = `${Math.abs(money)}`
    let strMoney = ""
    let counter = 1
    for (let i = s.length - 1; i > -1; i--) {
        strMoney += s[i]
        if (counter++ % SLICE === 0)
            strMoney += '.'
    }
    strMoney = strMoney.split('').reverse().join('')
    if (strMoney[0] === '.')
        strMoney = strMoney.substring(1)
    return `${getSymbol(money)}${strMoney}`
}