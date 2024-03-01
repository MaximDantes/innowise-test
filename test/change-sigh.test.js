import { commands, result } from './commands.js'
import { operationsNames } from '../src/scripts/classes/Operations.js'

describe('change sign', () => {
    test('4', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.four].execute()
                commands[operationsNames.changeSign].execute()
                return result
            })()
        ).toBe(`-4`)
    })

    test('-2.2', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.minus].execute()
                commands[operationsNames.two].execute()
                commands[operationsNames.dot].execute()
                commands[operationsNames.two].execute()
                commands[operationsNames.changeSign].execute()
                return result
            })()
        ).toBe(`2.2`)
    })

    test('3 / 2', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.three].execute()
                commands[operationsNames.div].execute()
                commands[operationsNames.two].execute()
                commands[operationsNames.changeSign].execute()
                return result
            })()
        ).toBe(`3 ${operationsNames.div} -2`)
    })

    test('3 *', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.three].execute()
                commands[operationsNames.mul].execute()
                commands[operationsNames.changeSign].execute()
                return result
            })()
        ).toBe(`3 ${operationsNames.mul}`)
    })

    test('8 * +- 8', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.eight].execute()
                commands[operationsNames.mul].execute()
                commands[operationsNames.changeSign].execute()
                commands[operationsNames.eight].execute()
                return result
            })()
        ).toBe(`8 ${operationsNames.mul} 8`)
    })
})
