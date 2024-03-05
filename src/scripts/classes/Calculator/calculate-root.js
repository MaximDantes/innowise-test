import errorMessages from '../../common/error-messages.js'

const calculateRoot = (number, power) => {
    const startTime = Date.now()

    const abs = (number) => {
        return number < 0 ? number * -1 : number
    }

    const root = (number, n) => {
        if (number < 0 && n % 2 === 0) {
            throw new Error(errorMessages.negativeRoot)
        }

        let guess = number / 2
        const epsilon = 1e-12

        while (abs(guess ** n - number) > epsilon) {
            //break loop when it takes too long
            if (Date.now() - startTime > 1000) {
                throw new Error(errorMessages.cannotFindRoot)
            }
            guess = (1 / n) * ((n - 1) * guess + number / guess ** (n - 1))
        }

        return guess
    }

    return root(number, power)
}

export default calculateRoot
