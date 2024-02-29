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

    test('5 - MS', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.five].execute()
                commands[operationsNames.minus].execute()
                commands[operationsNames.memorySave].execute()
                return calculator.getMemoryValue()
            })()
        ).toBe(`5`)
    })
})

describe('memory clear', () => {
    test('empty MC', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.memoryClear].execute()
                return calculator.getMemoryValue()
            })()
        ).toBe(``)
    })

    test('5 + 5 MS MC', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.five].execute()
                commands[operationsNames.plus].execute()
                commands[operationsNames.five].execute()
                commands[operationsNames.memorySave].execute()
                commands[operationsNames.memoryClear].execute()
                return calculator.getMemoryValue()
            })()
        ).toBe(``)
    })
})
