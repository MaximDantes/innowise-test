import { testCommands, testResult } from './test-commands.js'
import { numbersNames, operationsNames } from '../src/scripts/classes/Operations.js'

describe('percent', () => {
    test('100%', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[numbersNames.one].execute()
                testCommands[numbersNames.zero].execute()
                testCommands[numbersNames.zero].execute()
                testCommands[operationsNames.percent].execute()
                return testResult
            })()
        ).toBe(`100${operationsNames.percent}`)
    })

    test('50% =', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[numbersNames.five].execute()
                testCommands[numbersNames.zero].execute()
                testCommands[operationsNames.percent].execute()
                testCommands[operationsNames.equal].execute()
                return testResult
            })()
        ).toBe('0.5')
    })

    test('12.34% =', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[numbersNames.one].execute()
                testCommands[numbersNames.two].execute()
                testCommands[operationsNames.dot].execute()
                testCommands[numbersNames.three].execute()
                testCommands[numbersNames.four].execute()
                testCommands[operationsNames.percent].execute()
                testCommands[operationsNames.equal].execute()
                return testResult
            })()
        ).toBe('0.1234')
    })

    test('5 + 5 % =', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[numbersNames.five].execute()
                testCommands[operationsNames.plus].execute()
                testCommands[numbersNames.five].execute()
                testCommands[operationsNames.percent].execute()
                return testResult
            })()
        ).toBe(`10${operationsNames.percent}`)
    })

    test('100% + 5', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[numbersNames.one].execute()
                testCommands[numbersNames.zero].execute()
                testCommands[numbersNames.zero].execute()
                testCommands[operationsNames.percent].execute()
                testCommands[operationsNames.plus].execute()
                testCommands[numbersNames.five].execute()
                return testResult
            })()
        ).toBe('1 + 5')
    })

    test('100% + 5 =', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[numbersNames.one].execute()
                testCommands[numbersNames.zero].execute()
                testCommands[numbersNames.zero].execute()
                testCommands[operationsNames.percent].execute()
                testCommands[operationsNames.plus].execute()
                testCommands[numbersNames.five].execute()
                testCommands[operationsNames.equal].execute()
                return testResult
            })()
        ).toBe('6')
    })

    test('1% %', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[numbersNames.one].execute()
                testCommands[operationsNames.percent].execute()
                testCommands[operationsNames.percent].execute()
                return testResult
            })()
        ).toBe(`0.01${operationsNames.percent}`)
    })
})
