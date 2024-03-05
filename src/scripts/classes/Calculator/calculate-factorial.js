import errorMessages from '../../common/error-messages.js'

const calculateFactorial = (number) => {
    if (!Number.isInteger(number)) {
        throw new Error(errorMessages.floatFactorial)
    }

    let result = 1
    for (let i = 1; i <= number; i++) {
        result *= i
    }

    return result
}

export default calculateFactorial
