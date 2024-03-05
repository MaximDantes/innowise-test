import { testCommands, testResult } from './test-commands.js'
import { numbersNames, operationsNames } from '../src/scripts/classes/Operations.js'
import errorMessages from '../src/scripts/common/error-messages.js'

describe('exceptions', () => {
    test('4 / 0', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[numbersNames.four].execute()
                testCommands[operationsNames.div].execute()
                testCommands[numbersNames.zero].execute()
                testCommands[operationsNames.equal].execute()
                return testResult
            })()
        ).toBe(errorMessages.divByZero)
    })

    test('4 / 0 + 2', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[numbersNames.four].execute()
                testCommands[operationsNames.div].execute()
                testCommands[numbersNames.zero].execute()
                testCommands[operationsNames.plus].execute()
                testCommands[numbersNames.two].execute()
                return testResult
            })()
        ).toBe('2')
    })

    test('2 ^ 2.2', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[numbersNames.two].execute()
                testCommands[operationsNames.pow].execute()
                testCommands[numbersNames.two].execute()
                testCommands[operationsNames.dot].execute()
                testCommands[numbersNames.two].execute()
                testCommands[operationsNames.equal].execute()
                return testResult
            })()
        ).toBe(errorMessages.floatPow)
    })

    test('1.6!', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[numbersNames.one].execute()
                testCommands[operationsNames.dot].execute()
                testCommands[numbersNames.six].execute()
                testCommands[operationsNames.factorial].execute()
                testCommands[operationsNames.equal].execute()
                return testResult
            })()
        ).toBe(errorMessages.floatFactorial)
    })

    test('2 ^ 4444444444444444', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[numbersNames.two].execute()
                testCommands[operationsNames.pow].execute()
                testCommands[numbersNames.four].execute()
                testCommands[numbersNames.four].execute()
                testCommands[numbersNames.four].execute()
                testCommands[numbersNames.four].execute()
                testCommands[numbersNames.four].execute()
                testCommands[numbersNames.four].execute()
                testCommands[numbersNames.four].execute()
                testCommands[numbersNames.four].execute()
                testCommands[numbersNames.four].execute()
                testCommands[numbersNames.four].execute()
                testCommands[operationsNames.equal].execute()
                return testResult
            })()
        ).toBe('Infinity')
    })
})
