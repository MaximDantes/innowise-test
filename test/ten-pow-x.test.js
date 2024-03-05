import { testCommands, testResult } from './test-commands.js'
import { operationsNames } from '../src/scripts/classes/Operations.js'

describe('10 ^ x', () => {
    test('', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[operationsNames.tenPowX].execute()
                return testResult
            })()
        ).toBe(`10 ${operationsNames.pow}`)
    })
})
