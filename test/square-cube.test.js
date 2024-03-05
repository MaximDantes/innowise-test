import { testCommands, testResult } from './test-commands.js'
import { numbersNames, operationsNames } from '../src/scripts/classes/Operations.js'

describe('cube and square', () => {
    test('5 ^ 2', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[numbersNames.five].execute()
                testCommands[operationsNames.square].execute()
                return testResult
            })()
        ).toBe(`5 ${operationsNames.pow} 2`)
    })

    test('3.6 ^ 3', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[numbersNames.three].execute()
                testCommands[operationsNames.dot].execute()
                testCommands[numbersNames.six].execute()
                testCommands[operationsNames.cube].execute()
                return testResult
            })()
        ).toBe(`3.6 ${operationsNames.pow} 3`)
    })

    test('14 ^ 2 =', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[numbersNames.one].execute()
                testCommands[numbersNames.four].execute()
                testCommands[operationsNames.square].execute()
                testCommands[operationsNames.equal].execute()
                return testResult
            })()
        ).toBe('196')
    })

    test('3.5 ^ 3 =', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[numbersNames.three].execute()
                testCommands[operationsNames.dot].execute()
                testCommands[numbersNames.five].execute()
                testCommands[operationsNames.cube].execute()
                testCommands[operationsNames.equal].execute()
                return testResult
            })()
        ).toBe('42.875')
    })

    test('2 + 2 ^ 2', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[numbersNames.two].execute()
                testCommands[operationsNames.plus].execute()
                testCommands[numbersNames.two].execute()
                testCommands[operationsNames.square].execute()
                return testResult
            })()
        ).toBe(`4 ${operationsNames.pow} 2`)
    })

    test('2 + 2 ^ 3 =', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[numbersNames.two].execute()
                testCommands[operationsNames.plus].execute()
                testCommands[numbersNames.two].execute()
                testCommands[operationsNames.cube].execute()
                testCommands[operationsNames.equal].execute()
                return testResult
            })()
        ).toBe('64')
    })

    test('^ 3 =', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[operationsNames.cube].execute()
                return testResult
            })()
        ).toBe('')
    })

    test('^ 2 =', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[operationsNames.square].execute()
                return testResult
            })()
        ).toBe('')
    })
})
