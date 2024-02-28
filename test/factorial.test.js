import { commands, result } from './commands.js'
import { operationsNames } from '../src/scripts/classes/Operations.js'

describe('factorial', () => {
    test('1', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.one].execute()
                commands[operationsNames.factorial].execute()
                return result
            })()
        ).toBe('1!')
    })

    test('4!', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.four].execute()
                commands[operationsNames.factorial].execute()
                commands[operationsNames.equal].execute()
                return result
            })()
        ).toBe('24')
    })

    test('4! + ', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.four].execute()
                commands[operationsNames.factorial].execute()
                commands[operationsNames.plus].execute()
                return result
            })()
        ).toBe('24 +')
    })

    test('15!', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.one].execute()
                commands[operationsNames.five].execute()
                commands[operationsNames.factorial].execute()
                commands[operationsNames.equal].execute()
                return result
            })()
        ).toBe('1307674368000')
    })

    test('4.5!', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.four].execute()
                commands[operationsNames.dot].execute()
                commands[operationsNames.five].execute()
                commands[operationsNames.factorial].execute()
                commands[operationsNames.equal].execute()
                return result
            })()
        ).toBe('24')
    })
})
