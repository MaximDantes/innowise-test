import { commands, result } from './commands.js'
import { operationsNames } from '../src/scripts/classes/Operations.js'

describe('prevent to set math sign in first position', () => {
    test('empty +', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.plus].execute()
                return result
            })()
        ).toBe('')
    })

    test('empty /', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.div].execute()
                return result
            })()
        ).toBe('')
    })

    test('empty *', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.mul].execute()
                return result
            })()
        ).toBe('')
    })

    test('empty ^', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.pow].execute()
                return result
            })()
        ).toBe('')
    })

    test('empty -', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.minus].execute()
                return result
            })()
        ).toBe(operationsNames.minus)
    })

    test('- -', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.minus].execute()
                commands[operationsNames.minus].execute()
                return result
            })()
        ).toBe('')
    })

    test('2 + -', () => {
        expect(
            (() => {
                commands[operationsNames.two].execute()
                commands[operationsNames.plus].execute()
                commands[operationsNames.minus].execute()
                return result
            })()
        ).toBe(`2 ${operationsNames.minus}`)
    })

    test('2 * /', () => {
        expect(
            (() => {
                commands[operationsNames.two].execute()
                commands[operationsNames.mul].execute()
                commands[operationsNames.div].execute()
                return result
            })()
        ).toBe(`2 ${operationsNames.div}`)
    })
})
