import errorMessages from '../../common/error-messages.js'

const calculateFactorial = (number) => {
    if (!Number.isInteger(number)) {
        throw new Error(errorMessages.floatFactorial)
    }

    let result = number >= 0 ? 1 : -1

    const absNumber = number >= 0 ? number : number * -1

    for (let i = 1; i <= absNumber; i++) {
        result *= i
    }

    return result
}

export default calculateFactorial
