import simpleCalculations from './simple-calculations.js'
import errorMessages from '../../common/error-messages.js'

describe('plus', () => {
    test('2 + 2 should be 4', () => {
        expect(simpleCalculations.plus(2, 2)).toBe(4)
    })

    test('-2 + -22 should be -24', () => {
        expect(simpleCalculations.plus(-2, -22)).toBe(-24)
    })

    test('0 + 0 should be 0', () => {
        expect(simpleCalculations.plus(0, 0)).toBe(0)
    })

    test('432.12 + -54542342.165 should be -54541910.045', () => {
        expect(simpleCalculations.plus(432.12, -54542342.165)).toBe(-54541910.045)
    })

    test('1.5 + 1 should be 2.5', () => {
        expect(simpleCalculations.plus(1.5, 1)).toBe(2.5)
    })
})

describe('minus', () => {
    test('2 - 2 should be 0', () => {
        expect(simpleCalculations.minus(2, 2)).toBe(0)
    })

    test('-2 - -22 should be 20', () => {
        expect(simpleCalculations.minus(-2, -22)).toBe(20)
    })

    test('0 - 0 should be 0', () => {
        expect(simpleCalculations.minus(0, 0)).toBe(0)
    })

    test('432.12 - 54542342.165 should be -54541910.045', () => {
        expect(simpleCalculations.minus(432.12, 54542342.165)).toBe(-54541910.045)
    })

    test('1.5 - 1 should be 0.5', () => {
        expect(simpleCalculations.minus(1.5, 1)).toBe(0.5)
    })
})

describe('mul', () => {
    test('2 * 2 should be 4', () => {
        expect(simpleCalculations.mul(2, 2)).toBe(4)
    })

    test('-2 * -22 should be 44', () => {
        expect(simpleCalculations.mul(-2, -22)).toBe(44)
    })

    test('0 * 3 should be 0', () => {
        expect(simpleCalculations.mul(0, 3)).toBe(0)
    })

    test('432.12 * 54542342.165 should be 23568836896.339798', () => {
        expect(simpleCalculations.mul(432.12, 54542342.165)).toBe(23568836896.339798)
    })

    test('1.5 * 3 should be 4.5', () => {
        expect(simpleCalculations.mul(1.5, 3)).toBe(4.5)
    })
})

describe('div', () => {
    test('2 / 2 should be 1', () => {
        expect(simpleCalculations.div(2, 2)).toBe(1)
    })

    test('-2 / -22 should be 0.09090909090909091', () => {
        expect(simpleCalculations.div(-2, -22)).toBe(0.09090909090909091)
    })

    test('0 * 3 should be 0', () => {
        expect(simpleCalculations.div(0, 3)).toBe(0)
    })

    test('432.12 / 54542342.165 should be 0.000007922652068969873', () => {
        expect(simpleCalculations.div(432.12, 54542342.165)).toBe(0.000007922652068969873)
    })

    test('1.5 / 3 should be 0.5', () => {
        expect(simpleCalculations.div(1.5, 3)).toBe(0.5)
    })

    test('div by zero should throw error', () => {
        expect(() => simpleCalculations.div(1, 0)).toThrow(errorMessages.divByZero)
    })
})

describe('percent', () => {
    test('percent of 100 should be 1', () => {
        expect(simpleCalculations.percent(100)).toBe(1)
    })

    test('percent of -100 should be -1', () => {
        expect(simpleCalculations.percent(-100)).toBe(-1)
    })

    test('percent of 0 should be 0', () => {
        expect(simpleCalculations.percent(0)).toBe(0)
    })

    test('percent of -1 should be -0.01', () => {
        expect(simpleCalculations.percent(-1)).toBe(-0.01)
    })

    test('percent of -23 should be -0.023', () => {
        expect(simpleCalculations.percent(-23)).toBe(-0.23)
    })

    test('percent of 3234.99 should be 32.3499', () => {
        expect(simpleCalculations.percent(3234.99)).toBe(32.3499)
    })

    test('percent of Infinity should be Infinity', () => {
        expect(simpleCalculations.percent(Infinity)).toBe(Infinity)
    })
})
