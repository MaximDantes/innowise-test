import Calculator from '../src/scripts/classes/Calculator.js'
import {
    AddOperandCommand,
    AddOperatorCommand,
    CalculateCommand,
    ClearCommand,
    HistoryBackCommand,
} from '../src/scripts/classes/Commands.js'

const calculator = new Calculator()

const commands = {
    1: new AddOperandCommand('1', calculator),
    2: new AddOperandCommand('2', calculator),
    3: new AddOperandCommand('3', calculator),
    4: new AddOperandCommand('4', calculator),
    5: new AddOperandCommand('5', calculator),
    6: new AddOperandCommand('6', calculator),
    7: new AddOperandCommand('7', calculator),
    8: new AddOperandCommand('8', calculator),
    9: new AddOperandCommand('9', calculator),
    0: new AddOperandCommand('0', calculator),
    '.': new AddOperandCommand('.', calculator),
    '+': new AddOperatorCommand('+', calculator),
    '-': new AddOperatorCommand('-', calculator),
    '/': new AddOperatorCommand('/', calculator),
    '*': new AddOperatorCommand('*', calculator),
    '=': new CalculateCommand('=', calculator),
    AC: new ClearCommand('AC', calculator),
    C: new HistoryBackCommand('C', calculator),
}

describe('calculator', () => {
    let result = ''

    const getSummary = (summary) => {
        result = summary
    }

    calculator.subscribe(getSummary)

    test('1 + 1', () => {
        expect(
            (() => {
                commands[1].execute()
                commands['+'].execute()
                commands[1].execute()
                commands['='].execute()
                return result
            })()
        ).toBe('2')
    })

    test('10 - 5', () => {
        expect(
            (() => {
                commands['AC'].execute()
                commands[1].execute()
                commands[0].execute()
                commands['-'].execute()
                commands[5].execute()
                commands['='].execute()
                return result
            })()
        ).toBe('5')
    })

    test('2 * 3.3', () => {
        expect(
            (() => {
                commands['AC'].execute()
                commands[2].execute()
                commands['*'].execute()
                commands[3].execute()
                commands['.'].execute()
                commands[3].execute()
                commands['='].execute()
                return result
            })()
        ).toBe('6.6')
    })

    test('10 / 2.5', () => {
        expect(
            (() => {
                commands['AC'].execute()
                commands[1].execute()
                commands[0].execute()
                commands['/'].execute()
                commands[2].execute()
                commands['.'].execute()
                commands[5].execute()
                commands['='].execute()
                return result
            })()
        ).toBe('4')
    })

    test('3 - 5', () => {
        expect(
            (() => {
                commands['AC'].execute()
                commands[3].execute()
                commands['-'].execute()
                commands[5].execute()
                commands['='].execute()
                return result
            })()
        ).toBe('-2')
    })
})
