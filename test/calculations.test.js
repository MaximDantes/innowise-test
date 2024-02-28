import { operationsNames } from '../src/scripts/classes/Operations.js'
import { commands, result } from './commands.js'

describe('calculations', () => {
    test('1 + 1', () => {
        expect(
            (() => {
                commands[operationsNames.one].execute()
                commands[operationsNames.plus].execute()
                commands[operationsNames.one].execute()
                commands[operationsNames.equal].execute()
                return result
            })()
        ).toBe('2')
    })

    test('10 - 5', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.one].execute()
                commands[operationsNames.zero].execute()
                commands[operationsNames.minus].execute()
                commands[operationsNames.five].execute()
                commands[operationsNames.equal].execute()
                return result
            })()
        ).toBe('5')
    })

    test('2 * 3.3', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.two].execute()
                commands[operationsNames.mul].execute()
                commands[operationsNames.three].execute()
                commands[operationsNames.dot].execute()
                commands[operationsNames.three].execute()
                commands[operationsNames.equal].execute()
                return result
            })()
        ).toBe('6.6')
    })

    test('10 / 2.5', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.one].execute()
                commands[operationsNames.zero].execute()
                commands[operationsNames.div].execute()
                commands[operationsNames.two].execute()
                commands[operationsNames.dot].execute()
                commands[operationsNames.five].execute()
                commands[operationsNames.equal].execute()
                return result
            })()
        ).toBe('4')
    })

    test('3 - 5', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.three].execute()
                commands[operationsNames.minus].execute()
                commands[operationsNames.five].execute()
                commands[operationsNames.equal].execute()
                return result
            })()
        ).toBe('-2')
    })

    test('5 ^ 4', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.five].execute()
                commands[operationsNames.pow].execute()
                commands[operationsNames.four].execute()
                commands[operationsNames.equal].execute()
                return result
            })()
        ).toBe('625')
    })

    test('5 +', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.five].execute()
                commands[operationsNames.plus].execute()
                commands[operationsNames.equal].execute()
                return result
            })()
        ).toBe(`5 ${operationsNames.plus}`)
    })

    test('34.3 -', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.three].execute()
                commands[operationsNames.four].execute()
                commands[operationsNames.dot].execute()
                commands[operationsNames.three].execute()
                commands[operationsNames.minus].execute()
                commands[operationsNames.equal].execute()
                return result
            })()
        ).toBe(`34.3 ${operationsNames.minus}`)
    })

    test('23 *', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.two].execute()
                commands[operationsNames.three].execute()
                commands[operationsNames.mul].execute()
                commands[operationsNames.equal].execute()
                return result
            })()
        ).toBe(`23 ${operationsNames.mul}`)
    })
})

describe('change sign', () => {
    test('1', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.one].execute()
                commands[operationsNames.changeSign].execute()
                return result
            })()
        ).toBe('-1')
    })

    test('1.22', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.one].execute()
                commands[operationsNames.dot].execute()
                commands[operationsNames.two].execute()
                commands[operationsNames.two].execute()
                commands[operationsNames.changeSign].execute()
                return result
            })()
        ).toBe('-1.22')
    })

    test('', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.changeSign].execute()
                return result
            })()
        ).toBe('')
    })

    test('3 * 5', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.three].execute()
                commands[operationsNames.mul].execute()
                commands[operationsNames.five].execute()
                commands[operationsNames.changeSign].execute()
                return result
            })()
        ).toBe(`3 ${operationsNames.mul} -5`)
    })

    test('3 + 5', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.three].execute()
                commands[operationsNames.plus].execute()
                commands[operationsNames.five].execute()
                commands[operationsNames.changeSign].execute()
                return result
            })()
        ).toBe(`3 ${operationsNames.minus} 5`)
    })

    test('3 / -5', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.three].execute()
                commands[operationsNames.div].execute()
                commands[operationsNames.five].execute()
                commands[operationsNames.changeSign].execute()
                commands[operationsNames.changeSign].execute()
                return result
            })()
        ).toBe(`3 ${operationsNames.div} 5`)
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

    test('3 +', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.three].execute()
                commands[operationsNames.plus].execute()
                commands[operationsNames.changeSign].execute()
                return result
            })()
        ).toBe(`3 ${operationsNames.minus}`)
    })

    test('3 -', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.three].execute()
                commands[operationsNames.minus].execute()
                commands[operationsNames.changeSign].execute()
                return result
            })()
        ).toBe(`3 ${operationsNames.plus}`)
    })
})
