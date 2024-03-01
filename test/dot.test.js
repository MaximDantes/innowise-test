import { commands, result } from './commands.js'
import { operationsNames } from '../src/scripts/classes/Operations.js'

describe('dot', () => {
    test('2.7', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.two].execute()
                commands[operationsNames.dot].execute()
                commands[operationsNames.seven].execute()
                return result
            })()
        ).toBe(`2.7`)
    })

    test('2..7', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.two].execute()
                commands[operationsNames.dot].execute()
                commands[operationsNames.dot].execute()
                commands[operationsNames.seven].execute()
                return result
            })()
        ).toBe(`2.7`)
    })

    test('empty .', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.dot].execute()
                return result
            })()
        ).toBe(``)
    })

    test('0.5', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.zero].execute()
                commands[operationsNames.dot].execute()
                commands[operationsNames.five].execute()
                return result
            })()
        ).toBe(`0.5`)
    })

    test('5 / .', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.five].execute()
                commands[operationsNames.div].execute()
                commands[operationsNames.dot].execute()
                return result
            })()
        ).toBe(`5 ${operationsNames.div}`)
    })

    test('8 * 2.2', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.eight].execute()
                commands[operationsNames.mul].execute()
                commands[operationsNames.two].execute()
                commands[operationsNames.dot].execute()
                commands[operationsNames.two].execute()
                return result
            })()
        ).toBe(`8 ${operationsNames.mul} 2.2`)
    })

    test('1. + 5', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.one].execute()
                commands[operationsNames.dot].execute()
                commands[operationsNames.plus].execute()
                commands[operationsNames.five].execute()
                commands[operationsNames.equal].execute()
                return result
            })()
        ).toBe(`6`)
    })

    test('1.5.', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.one].execute()
                commands[operationsNames.dot].execute()
                commands[operationsNames.five].execute()
                commands[operationsNames.dot].execute()
                commands[operationsNames.equal].execute()
                return result
            })()
        ).toBe(`1.5`)
    })

    test('2.2 / 5.5', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.two].execute()
                commands[operationsNames.dot].execute()
                commands[operationsNames.two].execute()
                commands[operationsNames.div].execute()
                commands[operationsNames.five].execute()
                commands[operationsNames.dot].execute()
                commands[operationsNames.five].execute()
                commands[operationsNames.equal].execute()
                commands[operationsNames.changeSign].execute()
                return result
            })()
        ).toBe(`-0.4`)
    })
})
