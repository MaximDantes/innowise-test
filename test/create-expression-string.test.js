/* eslint-disable no-undef */
import createExpressionString from '../src/scripts/create-expression-string.js'

describe('create expression string', () => {
    test('clear', () => {
        expect(createExpressionString('2+2', 'AC')).toBe('')
    })

    test('2 + 2 = 4', () => {
        expect(createExpressionString('2+2', '=')).toBe('4')
    })

    test('144% = 0.144', () => {
        expect(createExpressionString('144%', '=')).toBe('1.44')
    })

    test('add dot', () => {
        expect(createExpressionString('123', '.')).toBe('123.')
        expect(createExpressionString('-23', ',')).toBe('-23.')
    })

    test('add zero before dot', () => {
        expect(createExpressionString('', '.')).toBe('0.')
    })

    test('prevent setting dot after dot', () => {
        expect(createExpressionString('123.', '.')).toBe('123.')
        expect(createExpressionString('123.', ',')).toBe('123.')
    })

    test('prevent setting dot after math sign', () => {
        expect(createExpressionString('123-', '.')).toBe('123-')
        expect(createExpressionString('43.23*4%', ',')).toBe('43.23*4%')
    })

    test('prevent setting dot after fractional part of number', () => {
        expect(createExpressionString('123.23', '.')).toBe('123.23')
        expect(createExpressionString('4*128+123.23', '.')).toBe('4*128+123.23')
    })
})
