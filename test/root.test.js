import { testCommands, testResult } from './test-commands.js'
import { operationsNames, numbersNames } from '../src/scripts/classes/Operations.js'
import { getSuperscript } from '../src/scripts/common/get-superscript.js'

describe('root', () => {
    test('4 square root', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[numbersNames.four].execute()
                testCommands[operationsNames.squareRoot].execute()
                return testResult
            })()
        ).toBe(`${operationsNames.root} 4`)
    })

    test('234.445 square root', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[numbersNames.two].execute()
                testCommands[numbersNames.three].execute()
                testCommands[numbersNames.four].execute()
                testCommands[operationsNames.dot].execute()
                testCommands[numbersNames.four].execute()
                testCommands[numbersNames.four].execute()
                testCommands[numbersNames.five].execute()
                testCommands[operationsNames.squareRoot].execute()
                testCommands[operationsNames.equal].execute()
                return testResult
            })()
        ).toBe(`15.31159691214473`)
    })

    test('4442.1100 square root', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[numbersNames.four].execute()
                testCommands[numbersNames.four].execute()
                testCommands[numbersNames.four].execute()
                testCommands[numbersNames.two].execute()
                testCommands[operationsNames.dot].execute()
                testCommands[numbersNames.one].execute()
                testCommands[numbersNames.one].execute()
                testCommands[numbersNames.zero].execute()
                testCommands[numbersNames.zero].execute()
                testCommands[operationsNames.squareRoot].execute()
                testCommands[operationsNames.equal].execute()
                return testResult
            })()
        ).toBe(`66.64915603366632`)
    })

    test('64 cube root', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[numbersNames.six].execute()
                testCommands[numbersNames.four].execute()
                testCommands[operationsNames.cubeRoot].execute()
                testCommands[operationsNames.equal].execute()
                return testResult
            })()
        ).toBe(`4`)
    })

    test('5.3 cube root', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[numbersNames.five].execute()
                testCommands[operationsNames.dot].execute()
                testCommands[numbersNames.three].execute()
                testCommands[operationsNames.cubeRoot].execute()
                return testResult
            })()
        ).toBe(`${getSuperscript(3)}${operationsNames.root} 5.3`)
    })

    test('10 root', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[numbersNames.one].execute()
                testCommands[numbersNames.zero].execute()
                testCommands[operationsNames.root].execute()
                return testResult
            })()
        ).toBe(`${getSuperscript(10)}${operationsNames.root}`)
    })

    test('empty + square root', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[operationsNames.squareRoot].execute()
                return testResult
            })()
        ).toBe(operationsNames.root)
    })

    test('empty + cube root', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[operationsNames.cubeRoot].execute()
                return testResult
            })()
        ).toBe(getSuperscript(3) + operationsNames.root)
    })
})
