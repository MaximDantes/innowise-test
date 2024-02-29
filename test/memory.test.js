import { calculator, commands, result } from './commands.js'
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

describe('memory read', () => {
    test('empty MR', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.memoryClear].execute()
                commands[operationsNames.memoryRead].execute()
                return calculator.getMemoryValue()
            })()
        ).toBe(``)
    })

    test('5 MS AC MR', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.five].execute()
                commands[operationsNames.memorySave].execute()
                commands[operationsNames.clear].execute()
                commands[operationsNames.memoryRead].execute()
                return result
            })()
        ).toBe(`5`)
    })

    test('5 + 5 MS AC MR', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.five].execute()
                commands[operationsNames.plus].execute()
                commands[operationsNames.five].execute()
                commands[operationsNames.memorySave].execute()
                commands[operationsNames.clear].execute()
                commands[operationsNames.memoryRead].execute()
                return result
            })()
        ).toBe(`10`)
    })

    test('1.1 / 4 MS AC MR', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.one].execute()
                commands[operationsNames.dot].execute()
                commands[operationsNames.one].execute()
                commands[operationsNames.div].execute()
                commands[operationsNames.four].execute()
                commands[operationsNames.memorySave].execute()
                commands[operationsNames.clear].execute()
                commands[operationsNames.memoryRead].execute()
                return result
            })()
        ).toBe(`0.275`)
    })

    test('2 MS AC 5 + MR =', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.two].execute()
                commands[operationsNames.memorySave].execute()
                commands[operationsNames.clear].execute()
                commands[operationsNames.five].execute()
                commands[operationsNames.plus].execute()
                commands[operationsNames.memoryRead].execute()
                commands[operationsNames.equal].execute()
                return result
            })()
        ).toBe(`7`)
    })

    test('33 * 22 MS 15 * 17 = - MR =', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.three].execute()
                commands[operationsNames.three].execute()
                commands[operationsNames.mul].execute()
                commands[operationsNames.two].execute()
                commands[operationsNames.two].execute()
                commands[operationsNames.memorySave].execute()
                commands[operationsNames.clear].execute()
                commands[operationsNames.one].execute()
                commands[operationsNames.five].execute()
                commands[operationsNames.mul].execute()
                commands[operationsNames.one].execute()
                commands[operationsNames.seven].execute()
                commands[operationsNames.minus].execute()
                commands[operationsNames.memoryRead].execute()
                commands[operationsNames.equal].execute()
                return result
            })()
        ).toBe(`-471`)
    })
})
