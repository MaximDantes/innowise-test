import { commands, result } from './commands.js'
import { operationsNames } from '../src/scripts/classes/Operations.js'

describe('percent', () => {
    test('100%', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.one].execute()
                commands[operationsNames.zero].execute()
                commands[operationsNames.zero].execute()
                commands[operationsNames.percent].execute()
                return result
            })()
        ).toBe('100%')
    })

    test('50% =', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.five].execute()
                commands[operationsNames.zero].execute()
                commands[operationsNames.percent].execute()
                commands[operationsNames.equal].execute()
                return result
            })()
        ).toBe('0.5')
    })

    test('12.34% =', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.one].execute()
                commands[operationsNames.two].execute()
                commands[operationsNames.dot].execute()
                commands[operationsNames.three].execute()
                commands[operationsNames.four].execute()
                commands[operationsNames.percent].execute()
                commands[operationsNames.equal].execute()
                return result
            })()
        ).toBe('0.1234')
    })

    test('5 + 5 % =', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.five].execute()
                commands[operationsNames.plus].execute()
                commands[operationsNames.five].execute()
                commands[operationsNames.percent].execute()
                return result
            })()
        ).toBe('10%')
    })

    test('100% + 5', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.one].execute()
                commands[operationsNames.zero].execute()
                commands[operationsNames.zero].execute()
                commands[operationsNames.percent].execute()
                commands[operationsNames.plus].execute()
                commands[operationsNames.five].execute()
                return result
            })()
        ).toBe('1 + 5')
    })

    test('100% + 5 =', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.one].execute()
                commands[operationsNames.zero].execute()
                commands[operationsNames.zero].execute()
                commands[operationsNames.percent].execute()
                commands[operationsNames.plus].execute()
                commands[operationsNames.five].execute()
                commands[operationsNames.equal].execute()
                return result
            })()
        ).toBe('6')
    })

    test('1% %', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.one].execute()
                commands[operationsNames.percent].execute()
                commands[operationsNames.percent].execute()
                return result
            })()
        ).toBe('0.01%')
    })
})
