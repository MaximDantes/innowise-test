import errorMessages from '../../common/error-messages.js'

const simpleCalculations = {
    plus(a, b) {
        return a + b
    },

    minus(a, b) {
        return a - b
    },

    mul(a, b) {
        return a * b
    },

    div(a, b) {
        if (b === 0) {
            throw new Error(errorMessages.divByZero)
        }

        return a / b
    },

    percent(a) {
        return a / 100
    },
}

export default simpleCalculations
