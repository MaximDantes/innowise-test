import { calculator, commands } from './commands.js'
import { operationsNames } from '../src/scripts/classes/Operations.js'

describe('memory save', () => {
    test('10 MS', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.one].execute()
                commands[operationsNames.zero].execute()
                commands[operationsNames.memorySave].execute()
                return calculator.getMemoryValue()
            })()
        ).toBe(`10`)
    })

    test('5 - 12 MS', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.five].execute()
                commands[operationsNames.minus].execute()
                commands[operationsNames.one].execute()
                commands[operationsNames.two].execute()
                commands[operationsNames.memorySave].execute()
                return calculator.getMemoryValue()
            })()
        ).toBe(`-7`)
    })

    test('empty MS', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.memorySave].execute()
                return calculator.getMemoryValue()
            })()
        ).toBe(`0`)
    })
})
