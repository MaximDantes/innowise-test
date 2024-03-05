import { numbersNames, operationsNames } from '../src/scripts/classes/Operations.js'
import { testCommands, testResult } from './test-commands.js'

describe('calculations', () => {
    test('1 + 1', () => {
        expect(
            (() => {
                testCommands[numbersNames.one].execute()
                testCommands[operationsNames.plus].execute()
                testCommands[numbersNames.one].execute()
                testCommands[operationsNames.equal].execute()
                return testResult
            })()
        ).toBe('2')
    })

    test('10 - 5', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[numbersNames.one].execute()
                testCommands[numbersNames.zero].execute()
                testCommands[operationsNames.minus].execute()
                testCommands[numbersNames.five].execute()
                testCommands[operationsNames.equal].execute()
                return testResult
            })()
        ).toBe('5')
    })

    test('2 * 3.3', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[numbersNames.two].execute()
                testCommands[operationsNames.mul].execute()
                testCommands[numbersNames.three].execute()
                testCommands[operationsNames.dot].execute()
                testCommands[numbersNames.three].execute()
                testCommands[operationsNames.equal].execute()
                return testResult
            })()
        ).toBe('6.6')
    })

    test('10 / 2.5', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[numbersNames.one].execute()
                testCommands[numbersNames.zero].execute()
                testCommands[operationsNames.div].execute()
                testCommands[numbersNames.two].execute()
                testCommands[operationsNames.dot].execute()
                testCommands[numbersNames.five].execute()
                testCommands[operationsNames.equal].execute()
                return testResult
            })()
        ).toBe('4')
    })

    test('3 - 5', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[numbersNames.three].execute()
                testCommands[operationsNames.minus].execute()
                testCommands[numbersNames.five].execute()
                testCommands[operationsNames.equal].execute()
                return testResult
            })()
        ).toBe('-2')
    })

    test('5 ^ 4', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[numbersNames.five].execute()
                testCommands[operationsNames.pow].execute()
                testCommands[numbersNames.four].execute()
                testCommands[operationsNames.equal].execute()
                return testResult
            })()
        ).toBe('625')
    })

    test('5 +', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[numbersNames.five].execute()
                testCommands[operationsNames.plus].execute()
                testCommands[operationsNames.equal].execute()
                return testResult
            })()
        ).toBe(`5 ${operationsNames.plus}`)
    })

    test('34.3 -', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[numbersNames.three].execute()
                testCommands[numbersNames.four].execute()
                testCommands[operationsNames.dot].execute()
                testCommands[numbersNames.three].execute()
                testCommands[operationsNames.minus].execute()
                testCommands[operationsNames.equal].execute()
                return testResult
            })()
        ).toBe(`34.3 ${operationsNames.minus}`)
    })

    test('23 *', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[numbersNames.two].execute()
                testCommands[numbersNames.three].execute()
                testCommands[operationsNames.mul].execute()
                testCommands[operationsNames.equal].execute()
                return testResult
            })()
        ).toBe(`23 ${operationsNames.mul}`)
    })
})

describe('change sign', () => {
    test('1', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[numbersNames.one].execute()
                testCommands[operationsNames.changeSign].execute()
                return testResult
            })()
        ).toBe('-1')
    })

    test('1.22', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[numbersNames.one].execute()
                testCommands[operationsNames.dot].execute()
                testCommands[numbersNames.two].execute()
                testCommands[numbersNames.two].execute()
                testCommands[operationsNames.changeSign].execute()
                return testResult
            })()
        ).toBe('-1.22')
    })

    test('', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[operationsNames.changeSign].execute()
                return testResult
            })()
        ).toBe('')
    })

    test('3 * 5', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[numbersNames.three].execute()
                testCommands[operationsNames.mul].execute()
                testCommands[numbersNames.five].execute()
                testCommands[operationsNames.changeSign].execute()
                return testResult
            })()
        ).toBe(`3 ${operationsNames.mul} -5`)
    })

    test('3 + 5', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[numbersNames.three].execute()
                testCommands[operationsNames.plus].execute()
                testCommands[numbersNames.five].execute()
                testCommands[operationsNames.changeSign].execute()
                return testResult
            })()
        ).toBe(`3 ${operationsNames.minus} 5`)
    })

    test('3 / -5', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[numbersNames.three].execute()
                testCommands[operationsNames.div].execute()
                testCommands[numbersNames.five].execute()
                testCommands[operationsNames.changeSign].execute()
                testCommands[operationsNames.changeSign].execute()
                return testResult
            })()
        ).toBe(`3 ${operationsNames.div} 5`)
    })

    test('3 *', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[numbersNames.three].execute()
                testCommands[operationsNames.mul].execute()
                testCommands[operationsNames.changeSign].execute()
                return testResult
            })()
        ).toBe(`3 ${operationsNames.mul}`)
    })

    test('3 +', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[numbersNames.three].execute()
                testCommands[operationsNames.plus].execute()
                testCommands[operationsNames.changeSign].execute()
                return testResult
            })()
        ).toBe(`3 ${operationsNames.minus}`)
    })

    test('3 -', () => {
        expect(
            (() => {
                testCommands[operationsNames.clear].execute()
                testCommands[numbersNames.three].execute()
                testCommands[operationsNames.minus].execute()
                testCommands[operationsNames.changeSign].execute()
                return testResult
            })()
        ).toBe(`3 ${operationsNames.plus}`)
    })
})
