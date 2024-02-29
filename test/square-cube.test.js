import { commands, result } from './commands.js'
import { operationsNames } from '../src/scripts/classes/Operations.js'

describe('cube and square', () => {
    test('5 ^ 2', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.five].execute()
                commands[operationsNames.square].execute()
                return result
            })()
        ).toBe(`5 ${operationsNames.pow} 2`)
    })

    test('3.6 ^ 3', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.three].execute()
                commands[operationsNames.dot].execute()
                commands[operationsNames.six].execute()
                commands[operationsNames.cube].execute()
                return result
            })()
        ).toBe(`3.6 ${operationsNames.pow} 3`)
    })

    test('14 ^ 2 =', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.one].execute()
                commands[operationsNames.four].execute()
                commands[operationsNames.square].execute()
                commands[operationsNames.equal].execute()
                return result
            })()
        ).toBe('196')
    })

    test('3.5 ^ 3 =', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.three].execute()
                commands[operationsNames.dot].execute()
                commands[operationsNames.five].execute()
                commands[operationsNames.cube].execute()
                commands[operationsNames.equal].execute()
                return result
            })()
        ).toBe('42.875')
    })

    test('2 + 2 ^ 2', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.two].execute()
                commands[operationsNames.plus].execute()
                commands[operationsNames.two].execute()
                commands[operationsNames.square].execute()
                return result
            })()
        ).toBe(`4 ${operationsNames.pow} 2`)
    })

    test('2 + 2 ^ 3 =', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.two].execute()
                commands[operationsNames.plus].execute()
                commands[operationsNames.two].execute()
                commands[operationsNames.cube].execute()
                commands[operationsNames.equal].execute()
                return result
            })()
        ).toBe('64')
    })

    test('^ 3 =', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.cube].execute()
                return result
            })()
        ).toBe('')
    })

    test('^ 2 =', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.square].execute()
                return result
            })()
        ).toBe('')
    })
})
