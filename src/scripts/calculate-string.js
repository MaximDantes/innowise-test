//fractional part after section of ${fractionalAccuracy} zeros will be discarded
export const round = (num, fractionalAccuracy = 6) => {
    const zeroSection = new Array(fractionalAccuracy).fill('0').join('')

    const split = String(num).split('.')

    if (split.length === 1) {
        return num
    }

    const newFractional = split[1].split(zeroSection)[0]

    return +`${split[0]}.${newFractional}`
}

const calculateString = (str) => {
    //TODO remove eval
    str = str.replaceAll('%', '*0.01')
    const result = eval(str)
    return String(round(result, 6))
}

export default calculateString
