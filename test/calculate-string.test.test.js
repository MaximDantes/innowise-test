/* eslint-disable no-undef */
import calculateString, { round } from '../src/scripts/calculate-string.js'

describe('calculate string', () => {
    test('round', () => {
        expect(round(1478.12000001, 5)).toBe(1478.12)
        expect(round(140000000.0000001)).toBe(140000000)
        expect(round(12.0000000000001, 13)).toBe(12.0000000000001)
        expect(round(12.0000000000001, 12)).toBe(12)
    })

    test('2 + 2 = 4', () => {
        expect(calculateString('2+2')).toBe('4')
    })
    test('1478.1252/9.5-33 = 122.59212631578947', () => {
        expect(calculateString('1478.1252/9.5-33')).toBe('122.59212631578947')
    })

    test('435 × 3.4 - 1.1 + 0.22', () => {
        expect(calculateString('435*3.4-1.1+0.22')).toBe('1478.12')
    })

    test('5--1', () => {
        expect(calculateString('5--1')).toBe('6')
    })

    test('2-10', () => {
        expect(calculateString('2-10')).toBe('-8')
    })

    test('-10-222-11.1+4*2-1000', () => {
        expect(calculateString('-10-222-11.1+4*2-1000')).toBe('-1235.1')
    })

    test('%', () => {
        expect(calculateString('-7.45%')).toBe('-0.0745')
        expect(calculateString('745%')).toBe('7.45')
        expect(calculateString('2432432%')).toBe('24324.32')
    })

    test('last char is math sign', () => {
        expect(calculateString('1-')).toBe('1')
    })
})
