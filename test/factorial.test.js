import { testCommands, testResult } from './test-commands.js'
import { numbersNames, operationsNames } from '../src/scripts/classes/Operations.js'

describe('factorial', () => {
    test('1', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[numbersNames.one].execute()
                testCommands[operationsNames.factorial].execute()
                return testResult
            })()
        ).toBe(`1${operationsNames.factorial}`)
    })

    test('4!', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[numbersNames.four].execute()
                testCommands[operationsNames.factorial].execute()
                testCommands[operationsNames.equal].execute()
                return testResult
            })()
        ).toBe('24')
    })

    test('4! + ', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[numbersNames.four].execute()
                testCommands[operationsNames.factorial].execute()
                testCommands[operationsNames.plus].execute()
                return testResult
            })()
        ).toBe(`24 ${operationsNames.plus}`)
    })

    test('15!', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[numbersNames.one].execute()
                testCommands[numbersNames.five].execute()
                testCommands[operationsNames.factorial].execute()
                testCommands[operationsNames.equal].execute()
                return testResult
            })()
        ).toBe('1307674368000')
    })
})
