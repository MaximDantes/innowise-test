import { commands, result } from './commands.js'
import { operationsNames } from '../src/scripts/classes/Operations.js'
import errorMessages from '../src/scripts/common/error-messages.js'

describe('exceptions', () => {
    test('4 / 0', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.four].execute()
                commands[operationsNames.div].execute()
                commands[operationsNames.zero].execute()
                commands[operationsNames.equal].execute()
                return result
            })()
        ).toBe(errorMessages.divByZero)
    })

    test('4 / 0 + 2', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.four].execute()
                commands[operationsNames.div].execute()
                commands[operationsNames.zero].execute()
                commands[operationsNames.plus].execute()
                commands[operationsNames.two].execute()
                return result
            })()
        ).toBe('2')
    })

    test('2 ^ 2.2', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.two].execute()
                commands[operationsNames.pow].execute()
                commands[operationsNames.two].execute()
                commands[operationsNames.dot].execute()
                commands[operationsNames.two].execute()
                commands[operationsNames.equal].execute()
                return result
            })()
        ).toBe(errorMessages.floatPow)
    })

    test('1.6!', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.one].execute()
                commands[operationsNames.dot].execute()
                commands[operationsNames.six].execute()
                commands[operationsNames.factorial].execute()
                commands[operationsNames.equal].execute()
                return result
            })()
        ).toBe(errorMessages.floatFactorial)
    })
})
