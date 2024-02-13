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

    test('prevent setting math sing after dot', () => {
        expect(createExpressionString('123.', '+')).toBe('123+')
    })

    test('change last math sign', () => {
        expect(createExpressionString('12*2-123+', '/')).toBe('12*2-123/')
        expect(createExpressionString('12*2-123*', '+')).toBe('12*2-123+')
        expect(createExpressionString('12*2-123-', '*')).toBe('12*2-123*')
    })

    test('set minus after math sign', () => {
        expect(createExpressionString('12-', '-')).toBe('12--')
        expect(createExpressionString('435/12+', '-')).toBe('435/12+-')
        expect(createExpressionString('234.22/', '-')).toBe('234.22/-')
        expect(createExpressionString('86*', '-')).toBe('86*-')
    })

    test('prevent setting three math signs in a row', () => {
        expect(createExpressionString('12--', '-')).toBe('12--')
        expect(createExpressionString('435/12+-', '+')).toBe('435/12+-')
        expect(createExpressionString('234.22/-', '*')).toBe('234.22/-')
        expect(createExpressionString('86*-', '/')).toBe('86*-')
        expect(createExpressionString('86*-', '%')).toBe('86*-')
    })

    test('prevent setting math signs in first position', () => {
        expect(createExpressionString('', '+')).toBe('')
        expect(createExpressionString('', '/')).toBe('')
        expect(createExpressionString('', '*')).toBe('')
        expect(createExpressionString('', '-')).toBe('-')
        expect(createExpressionString('-', '-')).toBe('-')
        expect(createExpressionString('-', '*')).toBe('-')
        expect(createExpressionString('-', '%')).toBe('-')
        expect(createExpressionString('2', '-')).toBe('2-')
    })

    test('change sign', () => {
        expect(createExpressionString('123+234/-1.2139', '+-')).toBe(
            '123+234/1.2139'
        )
        expect(createExpressionString('-2.345', '+-')).toBe('2.345')
        expect(createExpressionString('2.345', '+-')).toBe('-2.345')
        expect(createExpressionString('43/11+23-43', '+-')).toBe('43/11+23+43')
        expect(createExpressionString('43/11+23%-43', '+-')).toBe(
            '43/11+23%+43'
        )
        expect(createExpressionString('43/11+23+43', '+-')).toBe('43/11+23-43')
        expect(createExpressionString('', '+-')).toBe('-')
        expect(createExpressionString('-', '+-')).toBe('')
    })

    test('prevent setting digit after %', () => {
        expect(createExpressionString('123%', '5')).toBe('123%')
    })
})
