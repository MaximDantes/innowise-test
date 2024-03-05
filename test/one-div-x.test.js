import { testCommands, testResult } from './test-commands.js'
import { numbersNames, operationsNames } from '../src/scripts/classes/Operations.js'

describe('one div x', () => {
    test('1 / 10', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[numbersNames.one].execute()
                testCommands[numbersNames.zero].execute()
                testCommands[operationsNames.oneDivX].execute()
                return testResult
            })()
        ).toBe(`1 ${operationsNames.div} 10`)
    })

    test('1 / 10 =', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[numbersNames.one].execute()
                testCommands[numbersNames.zero].execute()
                testCommands[operationsNames.oneDivX].execute()
                testCommands[operationsNames.equal].execute()
                return testResult
            })()
        ).toBe('0.1')
    })

    test('1 / 10 + 1/x', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[numbersNames.one].execute()
                testCommands[numbersNames.zero].execute()
                testCommands[operationsNames.oneDivX].execute()
                testCommands[operationsNames.oneDivX].execute()
                return testResult
            })()
        ).toBe(`1 ${operationsNames.div} 10`)
    })

    test('empty + 1/x', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[operationsNames.oneDivX].execute()
                return testResult
            })()
        ).toBe(`1 ${operationsNames.div}`)
    })

    test('empty + 1/x = ', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[operationsNames.oneDivX].execute()
                testCommands[operationsNames.equal].execute()
                return testResult
            })()
        ).toBe(`1 ${operationsNames.div}`)
    })

    test('1 / 5 +', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[numbersNames.five].execute()
                testCommands[operationsNames.oneDivX].execute()
                testCommands[operationsNames.plus].execute()
                return testResult
            })()
        ).toBe(`0.2 ${operationsNames.plus}`)
    })
})
