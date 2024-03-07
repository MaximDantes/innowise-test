import calculateFactorial from './calculate-factorial.js'
import errorMessages from '../../common/error-messages.js'

describe('factorial', () => {
    test('0! should be 1', () => {
        expect(calculateFactorial(0)).toBe(1)
    })

    test('1! should be 1', () => {
        expect(calculateFactorial(0)).toBe(1)
    })

    test('-1! should be 1', () => {
        expect(calculateFactorial(-1)).toBe(-1)
    })

    test('4! should be 64', () => {
        expect(calculateFactorial(4)).toBe(24)
    })

    test('-4! should be -24', () => {
        expect(calculateFactorial(-4)).toBe(-24)
    })

    test('1000! should be Infinity', () => {
        expect(calculateFactorial(1000)).toBe(Infinity)
    })

    test('-1000! should be -Infinity', () => {
        expect(calculateFactorial(-1000)).toBe(-Infinity)
    })

    test('float number should throw error', () => {
        expect(() => calculateFactorial(0.4)).toThrow(errorMessages.floatFactorial)
    })
})
