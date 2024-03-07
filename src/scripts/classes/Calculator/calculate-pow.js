import errorMessages from '../../common/error-messages.js'

const calculatePow = (number, power) => {
    if (!Number.isInteger(power)) {
        throw new Error(errorMessages.floatPow)
    }

    if (power > 100000) {
        return Infinity
    }

    if (power < -100000) {
        return 0
    }

    let result = 1

    if (power >= 0) {
        for (let i = 0; i < power; i++) {
            result *= number
        }
    } else {
        for (let i = 0; i > power; i--) {
            result /= number
        }
    }

    return result
}

export default calculatePow
