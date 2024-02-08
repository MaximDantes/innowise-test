/* eslint-disable no-undef */
import calculateString, { round } from '../src/scripts/calculate-string.js'

describe('calculate string', () => {
    test('round', () => {
        expect(round(1478.12000001, 5)).toBe(1478.12)
        expect(round(140000000.0000001)).toBe(140000000)
        expect(round(12.0000000000001, 13)).toBe(12.0000000000001)
        expect(round(12.0000000000001, 12)).toBe(12)
    })

    test('435 × 3.4 - 1.1 + 0.22', () => {
        expect(calculateString('435*3.4-1.1+0.22')).toBe('1478.12')
    })
})
