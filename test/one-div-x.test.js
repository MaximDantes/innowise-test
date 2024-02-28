import { commands, result } from './commands.js'
import { operationsNames } from '../src/scripts/classes/Operations.js'

describe('one div x', () => {
    test('1 / 10', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.one].execute()
                commands[operationsNames.zero].execute()
                commands[operationsNames.oneDivX].execute()
                return result
            })()
        ).toBe(`1 ${operationsNames.div} 10`)
    })

    test('1 / 10 =', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.one].execute()
                commands[operationsNames.zero].execute()
                commands[operationsNames.oneDivX].execute()
                commands[operationsNames.equal].execute()
                return result
            })()
        ).toBe('0.1')
    })

    test('1 / 10 + 1/x', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.one].execute()
                commands[operationsNames.zero].execute()
                commands[operationsNames.oneDivX].execute()
                commands[operationsNames.oneDivX].execute()
                return result
            })()
        ).toBe(`1 ${operationsNames.div} 10`)
    })

    test('empty + 1/x', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.oneDivX].execute()
                return result
            })()
        ).toBe(`1 ${operationsNames.div}`)
    })

    test('empty + 1/x = ', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.oneDivX].execute()
                commands[operationsNames.equal].execute()
                return result
            })()
        ).toBe(`1 ${operationsNames.div}`)
    })

    test('1 / 5 +', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.five].execute()
                commands[operationsNames.oneDivX].execute()
                commands[operationsNames.plus].execute()
                return result
            })()
        ).toBe(`0.2 ${operationsNames.plus}`)
    })
})
