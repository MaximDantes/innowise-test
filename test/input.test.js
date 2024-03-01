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
})

describe('format minus', () => {
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
                commands[operationsNames.clear].execute()
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
                commands[operationsNames.clear].execute()
                commands[operationsNames.two].execute()
                commands[operationsNames.mul].execute()
                commands[operationsNames.div].execute()
                return result
            })()
        ).toBe(`2 ${operationsNames.div}`)
    })

    test('2 + +', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.two].execute()
                commands[operationsNames.plus].execute()
                commands[operationsNames.plus].execute()
                return result
            })()
        ).toBe(`2 ${operationsNames.plus}`)
    })

    test('2 - -', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.two].execute()
                commands[operationsNames.minus].execute()
                commands[operationsNames.minus].execute()
                return result
            })()
        ).toBe(`2 ${operationsNames.plus}`)
    })

    test('2 * -', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.two].execute()
                commands[operationsNames.mul].execute()
                commands[operationsNames.minus].execute()
                return result
            })()
        ).toBe(`2 ${operationsNames.mul} ${operationsNames.minus}`)
    })

    test('01', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.zero].execute()
                commands[operationsNames.one].execute()
                return result
            })()
        ).toBe(`1`)
    })

    test('0005', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.zero].execute()
                commands[operationsNames.zero].execute()
                commands[operationsNames.zero].execute()
                commands[operationsNames.five].execute()
                return result
            })()
        ).toBe(`5`)
    })

    test('-0003', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.minus].execute()
                commands[operationsNames.zero].execute()
                commands[operationsNames.zero].execute()
                commands[operationsNames.zero].execute()
                commands[operationsNames.three].execute()
                return result
            })()
        ).toBe(`-3`)
    })

    test('99 ^ 999999', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.nine].execute()
                commands[operationsNames.nine].execute()
                commands[operationsNames.pow].execute()
                commands[operationsNames.nine].execute()
                commands[operationsNames.nine].execute()
                commands[operationsNames.nine].execute()
                commands[operationsNames.nine].execute()
                commands[operationsNames.nine].execute()
                commands[operationsNames.nine].execute()
                commands[operationsNames.equal].execute()
                commands[operationsNames.one].execute()
                return result
            })()
        ).toBe(`1`)
    })
})
