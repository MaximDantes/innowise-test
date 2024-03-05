import { testCommands, testResult } from './test-commands.js'
import { numbersNames, operationsNames } from '../src/scripts/classes/Operations.js'

describe('dot', () => {
    test('2.7', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[numbersNames.two].execute()
                testCommands[operationsNames.dot].execute()
                testCommands[numbersNames.seven].execute()
                return testResult
            })()
        ).toBe(`2.7`)
    })

    test('2..7', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[numbersNames.two].execute()
                testCommands[operationsNames.dot].execute()
                testCommands[operationsNames.dot].execute()
                testCommands[numbersNames.seven].execute()
                return testResult
            })()
        ).toBe(`2.7`)
    })

    test('empty .', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[operationsNames.dot].execute()
                return testResult
            })()
        ).toBe(``)
    })

    test('0.5', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[numbersNames.zero].execute()
                testCommands[operationsNames.dot].execute()
                testCommands[numbersNames.five].execute()
                return testResult
            })()
        ).toBe(`0.5`)
    })

    test('5 / .', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[numbersNames.five].execute()
                testCommands[operationsNames.div].execute()
                testCommands[operationsNames.dot].execute()
                return testResult
            })()
        ).toBe(`5 ${operationsNames.div}`)
    })

    test('8 * 2.2', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[numbersNames.eight].execute()
                testCommands[operationsNames.mul].execute()
                testCommands[numbersNames.two].execute()
                testCommands[operationsNames.dot].execute()
                testCommands[numbersNames.two].execute()
                return testResult
            })()
        ).toBe(`8 ${operationsNames.mul} 2.2`)
    })

    test('1. + 5', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[numbersNames.one].execute()
                testCommands[operationsNames.dot].execute()
                testCommands[operationsNames.plus].execute()
                testCommands[numbersNames.five].execute()
                testCommands[operationsNames.equal].execute()
                return testResult
            })()
        ).toBe(`6`)
    })

    test('1.5.', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[numbersNames.one].execute()
                testCommands[operationsNames.dot].execute()
                testCommands[numbersNames.five].execute()
                testCommands[operationsNames.dot].execute()
                testCommands[operationsNames.equal].execute()
                return testResult
            })()
        ).toBe(`1.5`)
    })

    test('2.2 / 5.5', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[numbersNames.two].execute()
                testCommands[operationsNames.dot].execute()
                testCommands[numbersNames.two].execute()
                testCommands[operationsNames.div].execute()
                testCommands[numbersNames.five].execute()
                testCommands[operationsNames.dot].execute()
                testCommands[numbersNames.five].execute()
                testCommands[operationsNames.equal].execute()
                testCommands[operationsNames.changeSign].execute()
                return testResult
            })()
        ).toBe(`-0.4`)
    })

    test('5! = .', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[numbersNames.five].execute()
                testCommands[operationsNames.factorial].execute()
                testCommands[operationsNames.equal].execute()
                testCommands[operationsNames.dot].execute()
                return testResult
            })()
        ).toBe(`120.`)
    })
})
