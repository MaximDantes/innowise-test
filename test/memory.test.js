import { calculator, testCommands, testResult } from './test-commands.js'
import { numbersNames, operationsNames } from '../src/scripts/classes/Operations.js'

describe('memory save', () => {
    test('10 MS', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[numbersNames.one].execute()
                testCommands[numbersNames.zero].execute()
                testCommands[operationsNames.memorySave].execute()
                return calculator.getMemoryValue()
            })()
        ).toBe(`10`)
    })

    test('5 - 12 MS', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[numbersNames.five].execute()
                testCommands[operationsNames.minus].execute()
                testCommands[numbersNames.one].execute()
                testCommands[numbersNames.two].execute()
                testCommands[operationsNames.memorySave].execute()
                return calculator.getMemoryValue()
            })()
        ).toBe(`-7`)
    })

    test('empty MS', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[operationsNames.memorySave].execute()
                return calculator.getMemoryValue()
            })()
        ).toBe(`0`)
    })

    test('5 - MS', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[numbersNames.five].execute()
                testCommands[operationsNames.minus].execute()
                testCommands[operationsNames.memorySave].execute()
                return calculator.getMemoryValue()
            })()
        ).toBe(`5`)
    })

    test('4! MS', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[numbersNames.four].execute()
                testCommands[operationsNames.factorial].execute()
                testCommands[operationsNames.memorySave].execute()
                return calculator.getMemoryValue()
            })()
        ).toBe(`24`)
    })
})

describe('memory clear', () => {
    test('empty MC', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[operationsNames.memoryClear].execute()
                return calculator.getMemoryValue()
            })()
        ).toBe(``)
    })

    test('5 + 5 MS MC', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[numbersNames.five].execute()
                testCommands[operationsNames.plus].execute()
                testCommands[numbersNames.five].execute()
                testCommands[operationsNames.memorySave].execute()
                testCommands[operationsNames.memoryClear].execute()
                return calculator.getMemoryValue()
            })()
        ).toBe(``)
    })
})

describe('memory read', () => {
    test('empty MR', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[operationsNames.memoryClear].execute()
                testCommands[operationsNames.memoryRead].execute()
                return calculator.getMemoryValue()
            })()
        ).toBe(``)
    })

    test('5 MS AC MR', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[numbersNames.five].execute()
                testCommands[operationsNames.memorySave].execute()
                testCommands[operationsNames.clear].execute()
                testCommands[operationsNames.memoryRead].execute()
                return testResult
            })()
        ).toBe(`5`)
    })

    test('5 + 5 MS AC MR', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[numbersNames.five].execute()
                testCommands[operationsNames.plus].execute()
                testCommands[numbersNames.five].execute()
                testCommands[operationsNames.memorySave].execute()
                testCommands[operationsNames.clear].execute()
                testCommands[operationsNames.memoryRead].execute()
                return testResult
            })()
        ).toBe(`10`)
    })

    test('1.1 / 4 MS AC MR', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[numbersNames.one].execute()
                testCommands[operationsNames.dot].execute()
                testCommands[numbersNames.one].execute()
                testCommands[operationsNames.div].execute()
                testCommands[numbersNames.four].execute()
                testCommands[operationsNames.memorySave].execute()
                testCommands[operationsNames.clear].execute()
                testCommands[operationsNames.memoryRead].execute()
                return testResult
            })()
        ).toBe(`0.275`)
    })

    test('2 MS AC 5 + MR =', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[numbersNames.two].execute()
                testCommands[operationsNames.memorySave].execute()
                testCommands[operationsNames.clear].execute()
                testCommands[numbersNames.five].execute()
                testCommands[operationsNames.plus].execute()
                testCommands[operationsNames.memoryRead].execute()
                testCommands[operationsNames.equal].execute()
                return testResult
            })()
        ).toBe(`7`)
    })

    test('33 * 22 MS 15 * 17 = - MR =', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[numbersNames.three].execute()
                testCommands[numbersNames.three].execute()
                testCommands[operationsNames.mul].execute()
                testCommands[numbersNames.two].execute()
                testCommands[numbersNames.two].execute()
                testCommands[operationsNames.memorySave].execute()
                testCommands[operationsNames.clear].execute()
                testCommands[numbersNames.one].execute()
                testCommands[numbersNames.five].execute()
                testCommands[operationsNames.mul].execute()
                testCommands[numbersNames.one].execute()
                testCommands[numbersNames.seven].execute()
                testCommands[operationsNames.minus].execute()
                testCommands[operationsNames.memoryRead].execute()
                testCommands[operationsNames.equal].execute()
                return testResult
            })()
        ).toBe(`-471`)
    })
})

describe('memory plus minus', () => {
    test('100% MS AC 2 + M+', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[numbersNames.one].execute()
                testCommands[numbersNames.zero].execute()
                testCommands[numbersNames.zero].execute()
                testCommands[operationsNames.percent].execute()
                testCommands[operationsNames.memorySave].execute()
                testCommands[operationsNames.clear].execute()
                testCommands[numbersNames.two].execute()
                testCommands[operationsNames.plus].execute()
                testCommands[operationsNames.memoryPlus].execute()
                return calculator.getMemoryValue()
            })()
        ).toBe(`3`)
    })

    test('25 / 5 MS M+', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[numbersNames.two].execute()
                testCommands[numbersNames.five].execute()
                testCommands[operationsNames.div].execute()
                testCommands[numbersNames.five].execute()
                testCommands[operationsNames.memorySave].execute()
                testCommands[operationsNames.memoryPlus].execute()
                return calculator.getMemoryValue()
            })()
        ).toBe(`10`)
    })

    test('5 MS AC 3 M+ memory', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[numbersNames.five].execute()
                testCommands[operationsNames.memorySave].execute()
                testCommands[operationsNames.clear].execute()
                testCommands[numbersNames.three].execute()
                testCommands[operationsNames.memoryPlus].execute()
                return calculator.getMemoryValue()
            })()
        ).toBe(`8`)
    })

    test('1 MS AC 2 M+', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[numbersNames.one].execute()
                testCommands[operationsNames.memorySave].execute()
                testCommands[operationsNames.clear].execute()
                testCommands[numbersNames.two].execute()
                testCommands[operationsNames.memoryPlus].execute()
                return testResult
            })()
        ).toBe(`3`)
    })

    test('2 MS + 2 M-', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[numbersNames.two].execute()
                testCommands[operationsNames.memorySave].execute()
                testCommands[operationsNames.plus].execute()
                testCommands[numbersNames.two].execute()
                testCommands[operationsNames.memoryMinus].execute()
                return testResult
            })()
        ).toBe(`-2`)
    })

    test('2 MS AC 8 / 2 M+', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[numbersNames.two].execute()
                testCommands[operationsNames.memorySave].execute()
                testCommands[operationsNames.clear].execute()
                testCommands[numbersNames.eight].execute()
                testCommands[operationsNames.div].execute()
                testCommands[numbersNames.two].execute()
                testCommands[operationsNames.memoryPlus].execute()
                return testResult
            })()
        ).toBe(`6`)
    })

    test('4! MS M+', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[numbersNames.four].execute()
                testCommands[operationsNames.factorial].execute()
                testCommands[operationsNames.memorySave].execute()
                testCommands[operationsNames.memoryPlus].execute()
                return testResult
            })()
        ).toBe(`48`)
    })

    test('40% MS AC 1 M-', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[numbersNames.four].execute()
                testCommands[numbersNames.zero].execute()
                testCommands[operationsNames.percent].execute()
                testCommands[operationsNames.memorySave].execute()
                testCommands[operationsNames.clear].execute()
                testCommands[numbersNames.one].execute()
                testCommands[operationsNames.memoryMinus].execute()
                return testResult
            })()
        ).toBe(`-0.6`)
    })

    test('4 R MS AC 5 M-', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[numbersNames.four].execute()
                testCommands[operationsNames.squareRoot].execute()
                testCommands[operationsNames.memorySave].execute()
                testCommands[operationsNames.clear].execute()
                testCommands[numbersNames.five].execute()
                testCommands[operationsNames.memoryMinus].execute()
                return testResult
            })()
        ).toBe(`-3`)
    })
})
