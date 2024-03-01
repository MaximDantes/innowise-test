import { commands, result } from './commands.js'
import { operationsNames } from '../src/scripts/classes/Operations.js'
import { getSuperscript } from '../src/scripts/common/get-superscript.js'

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

    test('234.445 square root', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.two].execute()
                commands[operationsNames.three].execute()
                commands[operationsNames.four].execute()
                commands[operationsNames.dot].execute()
                commands[operationsNames.four].execute()
                commands[operationsNames.four].execute()
                commands[operationsNames.five].execute()
                commands[operationsNames.squareRoot].execute()
                commands[operationsNames.equal].execute()
                return result
            })()
        ).toBe(`15.31159691214473`)
    })

    test('4442.1100 square root', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.four].execute()
                commands[operationsNames.four].execute()
                commands[operationsNames.four].execute()
                commands[operationsNames.two].execute()
                commands[operationsNames.dot].execute()
                commands[operationsNames.one].execute()
                commands[operationsNames.one].execute()
                commands[operationsNames.zero].execute()
                commands[operationsNames.zero].execute()
                commands[operationsNames.squareRoot].execute()
                commands[operationsNames.equal].execute()
                return result
            })()
        ).toBe(`66.64915603366632`)
    })

    test('64 cube root', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.six].execute()
                commands[operationsNames.four].execute()
                commands[operationsNames.cubeRoot].execute()
                commands[operationsNames.equal].execute()
                return result
            })()
        ).toBe(`4`)
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
