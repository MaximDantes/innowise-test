import { testCommands, testResult } from './test-commands.js'
import { numbersNames, operationsNames } from '../src/scripts/classes/Operations.js'

describe('prevent to set math sign in first position', () => {
    test('empty +', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[operationsNames.plus].execute()
                return testResult
            })()
        ).toBe('')
    })

    test('empty /', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[operationsNames.div].execute()
                return testResult
            })()
        ).toBe('')
    })

    test('empty *', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[operationsNames.mul].execute()
                return testResult
            })()
        ).toBe('')
    })

    test('empty ^', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[operationsNames.pow].execute()
                return testResult
            })()
        ).toBe('')
    })

    test('empty -', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[operationsNames.minus].execute()
                return testResult
            })()
        ).toBe(operationsNames.minus)
    })
})

describe('format minus', () => {
    test('- -', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[operationsNames.minus].execute()
                testCommands[operationsNames.minus].execute()
                return testResult
            })()
        ).toBe('')
    })

    test('2 + -', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[numbersNames.two].execute()
                testCommands[operationsNames.plus].execute()
                testCommands[operationsNames.minus].execute()
                return testResult
            })()
        ).toBe(`2 ${operationsNames.minus}`)
    })

    test('2 * /', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[numbersNames.two].execute()
                testCommands[operationsNames.mul].execute()
                testCommands[operationsNames.div].execute()
                return testResult
            })()
        ).toBe(`2 ${operationsNames.div}`)
    })

    test('2 + +', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[numbersNames.two].execute()
                testCommands[operationsNames.plus].execute()
                testCommands[operationsNames.plus].execute()
                return testResult
            })()
        ).toBe(`2 ${operationsNames.plus}`)
    })

    test('2 - -', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[numbersNames.two].execute()
                testCommands[operationsNames.minus].execute()
                testCommands[operationsNames.minus].execute()
                return testResult
            })()
        ).toBe(`2 ${operationsNames.plus}`)
    })

    test('2 * -', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[numbersNames.two].execute()
                testCommands[operationsNames.mul].execute()
                testCommands[operationsNames.minus].execute()
                return testResult
            })()
        ).toBe(`2 ${operationsNames.mul} ${operationsNames.minus}`)
    })

    test('01', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[numbersNames.zero].execute()
                testCommands[numbersNames.one].execute()
                return testResult
            })()
        ).toBe(`1`)
    })

    test('0005', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[numbersNames.zero].execute()
                testCommands[numbersNames.zero].execute()
                testCommands[numbersNames.zero].execute()
                testCommands[numbersNames.five].execute()
                return testResult
            })()
        ).toBe(`5`)
    })

    test('-0003', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[operationsNames.minus].execute()
                testCommands[numbersNames.zero].execute()
                testCommands[numbersNames.zero].execute()
                testCommands[numbersNames.zero].execute()
                testCommands[numbersNames.three].execute()
                return testResult
            })()
        ).toBe(`-3`)
    })

    test('99 ^ 999999', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[numbersNames.nine].execute()
                testCommands[numbersNames.nine].execute()
                testCommands[operationsNames.pow].execute()
                testCommands[numbersNames.nine].execute()
                testCommands[numbersNames.nine].execute()
                testCommands[numbersNames.nine].execute()
                testCommands[numbersNames.nine].execute()
                testCommands[numbersNames.nine].execute()
                testCommands[numbersNames.nine].execute()
                testCommands[operationsNames.equal].execute()
                testCommands[numbersNames.one].execute()
                return testResult
            })()
        ).toBe(`1`)
    })
})
