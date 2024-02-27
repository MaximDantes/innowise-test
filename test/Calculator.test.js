import Calculator from '../src/scripts/classes/Calculator.js'
import {
    AddOperandCommand,
    AddOperatorCommand,
    CalculateCommand,
    ChangeSignCommand,
    ClearCommand,
    HistoryBackCommand, TenToXPow,
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
    '!': new AddOperatorCommand('!', calculator),
    '^': new AddOperatorCommand('^', calculator),
    '+-': new ChangeSignCommand('+-', calculator),
    '10^x': new TenToXPow('10^x', calculator),
    AC: new ClearCommand('AC', calculator),
    C: new HistoryBackCommand('C', calculator),
}

let result = ''

const getSummary = (summary) => {
    result = summary
}

calculator.subscribe(getSummary)

describe('calculations', () => {
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

    test('5 ^ 4', () => {
        expect(
            (() => {
                commands['AC'].execute()
                commands[5].execute()
                commands['^'].execute()
                commands[4].execute()
                commands['='].execute()
                return result
            })()
        ).toBe('625')
    })

    test('5 +', () => {
        expect(
            (() => {
                commands['AC'].execute()
                commands[5].execute()
                commands['+'].execute()
                commands['='].execute()
                return result
            })()
        ).toBe('5 +')
    })

    test('34.3 -', () => {
        expect(
            (() => {
                commands['AC'].execute()
                commands[3].execute()
                commands[4].execute()
                commands['.'].execute()
                commands[3].execute()
                commands['-'].execute()
                commands['='].execute()
                return result
            })()
        ).toBe('34.3 -')
    })

    test('23 *', () => {
        expect(
            (() => {
                commands['AC'].execute()
                commands[2].execute()
                commands[3].execute()
                commands['*'].execute()
                commands['='].execute()
                return result
            })()
        ).toBe('23 *')
    })
})

describe('change sign', () => {
    test('1', () => {
        expect(
            (() => {
                commands['AC'].execute()
                commands[1].execute()
                commands['+-'].execute()
                return result
            })()
        ).toBe('-1')
    })

    test('1.22', () => {
        expect(
            (() => {
                commands['AC'].execute()
                commands[1].execute()
                commands['.'].execute()
                commands[2].execute()
                commands[2].execute()
                commands['+-'].execute()
                return result
            })()
        ).toBe('-1.22')
    })

    test('', () => {
        expect(
            (() => {
                commands['AC'].execute()
                commands['+-'].execute()
                return result
            })()
        ).toBe('')
    })

    test('3 * 5', () => {
        expect(
            (() => {
                commands['AC'].execute()
                commands[3].execute()
                commands['*'].execute()
                commands[5].execute()
                commands['+-'].execute()
                return result
            })()
        ).toBe('3 * -5')
    })

    test('3 + 5', () => {
        expect(
            (() => {
                commands['AC'].execute()
                commands[3].execute()
                commands['+'].execute()
                commands[5].execute()
                commands['+-'].execute()
                return result
            })()
        ).toBe('3 - 5')
    })

    test('3 / -5', () => {
        expect(
            (() => {
                commands['AC'].execute()
                commands[3].execute()
                commands['/'].execute()
                commands[5].execute()
                commands['+-'].execute()
                commands['+-'].execute()
                return result
            })()
        ).toBe('3 / 5')
    })

    test('3 *', () => {
        expect(
            (() => {
                commands['AC'].execute()
                commands[3].execute()
                commands['*'].execute()
                commands['+-'].execute()
                return result
            })()
        ).toBe('3 *')
    })

    test('3 +', () => {
        expect(
            (() => {
                commands['AC'].execute()
                commands[3].execute()
                commands['+'].execute()
                commands['+-'].execute()
                return result
            })()
        ).toBe('3 -')
    })

    test('3 -', () => {
        expect(
            (() => {
                commands['AC'].execute()
                commands[3].execute()
                commands['-'].execute()
                commands['+-'].execute()
                return result
            })()
        ).toBe('3 +')
    })
})

describe('factorial', () => {
    test('1', () => {
        expect(
            (() => {
                commands['AC'].execute()
                commands[1].execute()
                commands['!'].execute()
                return result
            })()
        ).toBe('1!')
    })

    test('4!', () => {
        expect(
            (() => {
                commands['AC'].execute()
                commands[4].execute()
                commands['!'].execute()
                commands['='].execute()
                return result
            })()
        ).toBe('24')
    })

    test('4! + ', () => {
        expect(
            (() => {
                commands['AC'].execute()
                commands[4].execute()
                commands['!'].execute()
                commands['+'].execute()
                return result
            })()
        ).toBe('24 +')
    })

    test('15!', () => {
        expect(
            (() => {
                commands['AC'].execute()
                commands[1].execute()
                commands[5].execute()
                commands['!'].execute()
                commands['='].execute()
                return result
            })()
        ).toBe('1307674368000')
    })

    test('4.5!', () => {
        expect(
            (() => {
                commands['AC'].execute()
                commands[4].execute()
                commands['.'].execute()
                commands[5].execute()
                commands['!'].execute()
                commands['='].execute()
                return result
            })()
        ).toBe('24')
    })
})

describe('10 ^ x', () => {
    test('', () => {
        expect(
            (() => {
                commands['AC'].execute()
                commands['10^x'].execute()
                return result
            })()
        ).toBe('10 ^')
    })
})
