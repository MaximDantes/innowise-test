import { testCommands, testResult } from './test-commands.js'
import { numbersNames, operationsNames } from '../src/scripts/classes/Operations.js'

describe('change sign', () => {
    test('4', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[numbersNames.four].execute()
                testCommands[operationsNames.changeSign].execute()
                return testResult
            })()
        ).toBe(`-4`)
    })

    test('-2.2', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[operationsNames.minus].execute()
                testCommands[numbersNames.two].execute()
                testCommands[operationsNames.dot].execute()
                testCommands[numbersNames.two].execute()
                testCommands[operationsNames.changeSign].execute()
                return testResult
            })()
        ).toBe(`2.2`)
    })

    test('3 / 2', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[numbersNames.three].execute()
                testCommands[operationsNames.div].execute()
                testCommands[numbersNames.two].execute()
                testCommands[operationsNames.changeSign].execute()
                return testResult
            })()
        ).toBe(`3 ${operationsNames.div} -2`)
    })

    test('3 *', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[numbersNames.three].execute()
                testCommands[operationsNames.mul].execute()
                testCommands[operationsNames.changeSign].execute()
                return testResult
            })()
        ).toBe(`3 ${operationsNames.mul}`)
    })

    test('8 * +- 8', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[numbersNames.eight].execute()
                testCommands[operationsNames.mul].execute()
                testCommands[operationsNames.changeSign].execute()
                testCommands[numbersNames.eight].execute()
                return testResult
            })()
        ).toBe(`8 ${operationsNames.mul} 8`)
    })
})
