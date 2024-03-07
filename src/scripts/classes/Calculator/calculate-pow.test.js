import calculatePow from './calculate-pow.js'
import errorMessages from '../../common/error-messages.js'

describe('pow', () => {
    test('0 ^ 10 should be 0', () => {
        expect(calculatePow(0, 10)).toBe(0)
    })

    test('1 ^ 1 should be 1', () => {
        expect(calculatePow(1, 1)).toBe(1)
    })

    test('1 ^ 0 should be 1', () => {
        expect(calculatePow(1, 0)).toBe(1)
    })

    test('2 ^ 2 should be 4', () => {
        expect(calculatePow(2, 2)).toBe(4)
    })

    test('2 ^ -2 should be 0.25', () => {
        expect(calculatePow(2, -2)).toBe(0.25)
    })

    test('2 ^ -3 should be 0.125', () => {
        expect(calculatePow(2, -3)).toBe(0.125)
    })

    test('-2 ^ -3 should be -0.125', () => {
        expect(calculatePow(-2, -3)).toBe(-0.125)
    })

    test('10 ^ 10 should be 10000000000', () => {
        expect(calculatePow(10, 10)).toBe(10000000000)
    })

    test('10 ^ 100000 should be Infinity', () => {
        expect(calculatePow(10, 100000)).toBe(Infinity)
    })

    test('10 ^ 100000 should be ', () => {
        expect(calculatePow(10, -100000)).toBe(0)
    })

    test('float pow should throw error', () => {
        expect(() => calculatePow(1, 0.2)).toThrow(errorMessages.floatPow)
    })
})
