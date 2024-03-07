import calculateRoot from './calculate-root.js'
import errorMessages from '../../common/error-messages.js'

describe('root', () => {
    test.concurrent('square root of 4 should be 2', () => {
        expect(calculateRoot(4, 2)).toBe(2)
    })

    test.concurrent('cube root of 5.3 should be 2', () => {
        expect(calculateRoot(5.3, 3)).toBe(1.7435134012651763)
    })

    test.concurrent('root of 7 of 18.1 should be 1.5124059171748776', () => {
        expect(calculateRoot(18.1, 7)).toBe(1.5124059171748776)
    })

    test.concurrent('root of 1.42 of 5.5 should be 3.321866506', () => {
        expect(calculateRoot(5.5, 1.42)).toBe(3.321866505882948)
    })

    test.concurrent('root of 1 of -34 should be -34', () => {
        expect(calculateRoot(-34, 1)).toBe(-34)
    })

    test.concurrent('throw error when calculations takes more then 1000ms', () => {
        try {
            expect(calculateRoot(43242432423, 42442142)).toBe(1.000000577)
        } catch (e) {
            expect(e).toEqual(new Error(errorMessages.cannotFindRoot))
        }
    })

    test.concurrent('square root of negative number should throw error', () => {
        expect(() => calculateRoot(-4, 2)).toThrow(errorMessages.negativeRoot)
    })

    test('root of negative number with odd power should throw error', () => {
        expect(() => calculateRoot(-43, 12)).toThrow(errorMessages.negativeRoot)
    })
})
