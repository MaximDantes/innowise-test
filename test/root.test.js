import { commands, result } from './commands.js'
import { getSuperscript, operationsNames } from '../src/scripts/classes/Operations.js'

describe('root', () => {
    test('4 square root', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.four].execute()
                commands[operationsNames.squareRoot].execute()
                return result
            })()
        ).toBe(`${operationsNames.root} 4`)
    })

    test('5.3 cube root', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.five].execute()
                commands[operationsNames.dot].execute()
                commands[operationsNames.three].execute()
                commands[operationsNames.cubeRoot].execute()
                return result
            })()
        ).toBe(`${getSuperscript(3)}${operationsNames.root} 5.3`)
    })

    test('10 root', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.one].execute()
                commands[operationsNames.zero].execute()
                commands[operationsNames.root].execute()
                return result
            })()
        ).toBe(`${getSuperscript(10)}${operationsNames.root}`)
    })

    test('empty + square root', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.squareRoot].execute()
                return result
            })()
        ).toBe(operationsNames.root)
    })

    test('empty + cube root', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.cubeRoot].execute()
                return result
            })()
        ).toBe(getSuperscript(3) + operationsNames.root)
    })
})
