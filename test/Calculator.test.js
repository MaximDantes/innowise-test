import Calculator from '../src/scripts/classes/Calculator.js'
import {
    AddOperandCommand,
    AddOperatorCommand,
    CalculateCommand,
    ChangeSignCommand,
    ClearCommand,
    HistoryBackCommand,
    PowCommand,
    TenToXPow,
} from '../src/scripts/classes/Commands.js'
import { operationsNames } from '../src/scripts/classes/Operations.js'

const calculator = new Calculator()

const commands = {
    [operationsNames.one]: new AddOperandCommand(operationsNames.one, calculator),
    [operationsNames.two]: new AddOperandCommand(operationsNames.two, calculator),
    [operationsNames.three]: new AddOperandCommand(operationsNames.three, calculator),
    [operationsNames.four]: new AddOperandCommand(operationsNames.four, calculator),
    [operationsNames.five]: new AddOperandCommand(operationsNames.five, calculator),
    [operationsNames.six]: new AddOperandCommand(operationsNames.six, calculator),
    [operationsNames.seven]: new AddOperandCommand(operationsNames.seven, calculator),
    [operationsNames.eight]: new AddOperandCommand(operationsNames.eight, calculator),
    [operationsNames.nine]: new AddOperandCommand(operationsNames.nine, calculator),
    [operationsNames.zero]: new AddOperandCommand(operationsNames.zero, calculator),
    [operationsNames.dot]: new AddOperandCommand(operationsNames.dot, calculator),
    [operationsNames.plus]: new AddOperatorCommand(operationsNames.plus, calculator),
    [operationsNames.minus]: new AddOperatorCommand(operationsNames.minus, calculator),
    [operationsNames.div]: new AddOperatorCommand(operationsNames.div, calculator),
    [operationsNames.mul]: new AddOperatorCommand(operationsNames.mul, calculator),
    [operationsNames.equal]: new CalculateCommand(operationsNames.equal, calculator),
    [operationsNames.factorial]: new AddOperatorCommand(operationsNames.factorial, calculator),
    [operationsNames.pow]: new AddOperatorCommand(operationsNames.pow, calculator),
    [operationsNames.changeSign]: new ChangeSignCommand(operationsNames.changeSign, calculator),
    [operationsNames.tenPowX]: new TenToXPow(operationsNames.tenPowX, calculator),
    [operationsNames.square]: new PowCommand(operationsNames.square, calculator),
    [operationsNames.cube]: new PowCommand(operationsNames.cube, calculator),
    [operationsNames.percent]: new AddOperatorCommand(operationsNames.percent, calculator),
    [operationsNames.clear]: new ClearCommand(operationsNames.clear, calculator),
    [operationsNames.historyBack]: new HistoryBackCommand(operationsNames.historyBack, calculator),
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
        ).toBe('5 +')
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
        ).toBe('34.3 -')
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
        ).toBe('23 *')
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
        ).toBe('3 * -5')
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
        ).toBe('3 - 5')
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
        ).toBe('3 / 5')
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
        ).toBe('3 *')
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
        ).toBe('3 -')
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
        ).toBe('3 +')
    })
})

describe('factorial', () => {
    test('1', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.one].execute()
                commands[operationsNames.factorial].execute()
                return result
            })()
        ).toBe('1!')
    })

    test('4!', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.four].execute()
                commands[operationsNames.factorial].execute()
                commands[operationsNames.equal].execute()
                return result
            })()
        ).toBe('24')
    })

    test('4! + ', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.four].execute()
                commands[operationsNames.factorial].execute()
                commands[operationsNames.plus].execute()
                return result
            })()
        ).toBe('24 +')
    })

    test('15!', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.one].execute()
                commands[operationsNames.five].execute()
                commands[operationsNames.factorial].execute()
                commands[operationsNames.equal].execute()
                return result
            })()
        ).toBe('1307674368000')
    })

    test('4.5!', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.four].execute()
                commands[operationsNames.dot].execute()
                commands[operationsNames.five].execute()
                commands[operationsNames.factorial].execute()
                commands[operationsNames.equal].execute()
                return result
            })()
        ).toBe('24')
    })
})

describe('10 ^ x', () => {
    test('', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.tenPowX].execute()
                return result
            })()
        ).toBe('10 ^')
    })
})

describe('cube and square', () => {
    test('5 ^ 2', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.five].execute()
                commands[operationsNames.square].execute()
                return result
            })()
        ).toBe('5 ^ 2')
    })

    test('3.6 ^ 3', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.three].execute()
                commands[operationsNames.dot].execute()
                commands[operationsNames.six].execute()
                commands[operationsNames.cube].execute()
                return result
            })()
        ).toBe('3.6 ^ 3')
    })

    test('14 ^ 2 =', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.one].execute()
                commands[operationsNames.four].execute()
                commands[operationsNames.square].execute()
                commands[operationsNames.equal].execute()
                return result
            })()
        ).toBe('196')
    })

    test('3.5 ^ 3 =', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.three].execute()
                commands[operationsNames.dot].execute()
                commands[operationsNames.five].execute()
                commands[operationsNames.cube].execute()
                commands[operationsNames.equal].execute()
                return result
            })()
        ).toBe('42.875')
    })

    test('2 + 2 ^ 2', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.two].execute()
                commands[operationsNames.plus].execute()
                commands[operationsNames.two].execute()
                commands[operationsNames.square].execute()
                return result
            })()
        ).toBe('4 ^ 2')
    })

    test('2 + 2 ^ 3 =', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.two].execute()
                commands[operationsNames.plus].execute()
                commands[operationsNames.two].execute()
                commands[operationsNames.cube].execute()
                commands[operationsNames.equal].execute()
                return result
            })()
        ).toBe('64')
    })

    test('^ 3 =', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.cube].execute()
                return result
            })()
        ).toBe('')
    })

    test('^ 2 =', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.square].execute()
                return result
            })()
        ).toBe('')
    })
})

describe('percent', () => {
    test('100%', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.one].execute()
                commands[operationsNames.zero].execute()
                commands[operationsNames.zero].execute()
                commands[operationsNames.percent].execute()
                return result
            })()
        ).toBe('100%')
    })

    test('50% =', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.five].execute()
                commands[operationsNames.zero].execute()
                commands[operationsNames.percent].execute()
                commands[operationsNames.equal].execute()
                return result
            })()
        ).toBe('0.5')
    })

    test('12.34% =', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.one].execute()
                commands[operationsNames.two].execute()
                commands[operationsNames.dot].execute()
                commands[operationsNames.three].execute()
                commands[operationsNames.four].execute()
                commands[operationsNames.percent].execute()
                commands[operationsNames.equal].execute()
                return result
            })()
        ).toBe('0.1234')
    })

    test('5 + 5 % =', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.five].execute()
                commands[operationsNames.plus].execute()
                commands[operationsNames.five].execute()
                commands[operationsNames.percent].execute()
                return result
            })()
        ).toBe('10%')
    })

    test('100% + 5', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.one].execute()
                commands[operationsNames.zero].execute()
                commands[operationsNames.zero].execute()
                commands[operationsNames.percent].execute()
                commands[operationsNames.plus].execute()
                commands[operationsNames.five].execute()
                return result
            })()
        ).toBe('1 + 5')
    })

    test('100% + 5 =', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.one].execute()
                commands[operationsNames.zero].execute()
                commands[operationsNames.zero].execute()
                commands[operationsNames.percent].execute()
                commands[operationsNames.plus].execute()
                commands[operationsNames.five].execute()
                commands[operationsNames.equal].execute()
                return result
            })()
        ).toBe('6')
    })

    test('1% %', () => {
        expect(
            (() => {
                commands[operationsNames.clear].execute()
                commands[operationsNames.one].execute()
                commands[operationsNames.percent].execute()
                commands[operationsNames.percent].execute()
                return result
            })()
        ).toBe('0.01%')
    })
})
