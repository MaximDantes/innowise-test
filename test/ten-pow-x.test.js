import { commands, result } from './commands.js'
import { operationsNames } from '../src/scripts/classes/Operations.js'

describe('10 ^ x', () => {
    test('', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.tenPowX].execute()
                return result
            })()
        ).toBe(`10 ${operationsNames.pow}`)
    })
})