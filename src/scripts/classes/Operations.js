import CalculateCommand from './Commands/CalculateCommand.js'
import AddOperatorCommand from './Commands/AddOperatorCommand.js'
import AddOperandCommand from './Commands/AddOperandCommand.js'
import ClearCommand from './Commands/ClearCommand.js'
import HistoryBackCommand from './Commands/HistoryBackCommand.js'
import ChangeSignCommand from './Commands/ChangeSignCommand.js'
import PowCommand from './Commands/PowCommand.js'
import OneDivXCommand from './Commands/OneDivXCommand.js'
import TenToXPowCommand from './Commands/TenToXPowCommand.js'
import RootCommandCommand from './Commands/RootCommand.js'
import DotCommand from './Commands/DotCommand.js'
import MemorySaveCommand from './Commands/MemorySaveCommand.js'
import MemoryClearCommand from './Commands/MemoryClearCommand.js'
import MemoryReadCommand from './Commands/MemoryReadCommand.js'
import MemoryPlusMinusCommand from './Commands/MemoryPlusMinusComand.js'

import { getSuperscript } from '../common/get-superscript.js'

export const numbersNames = {
    zero: '0',
    one: '1',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    six: '6',
    seven: '7',
    eight: '8',
    nine: '9',
}

export const operationsNames = {
    dot: '.',

    plus: '+',
    minus: '-',
    mul: '*',
    div: '|',
    pow: '^',
    equal: '=',

    changeSign: '+-',

    percent: '%',
    factorial: '!',

    tenPowX: '10^x',
    oneDivX: '1/x',

    square: '^2',
    cube: '^3',

    root: 'R',
    squareRoot: '2R',
    cubeRoot: '3R',

    clear: 'AC',
    historyBack: 'C',

    memorySave: 'MS',
    memoryClear: 'MC',
    memoryRead: 'MR',
    memoryPlusMinus: 'M+-',
    memoryPlus: 'M+',
    memoryMinus: 'M-',
}

class Operation {
    constructor(command, equivalents, view, buttonView) {
        this.command = command

        //alternative keyboard keys for execute this command
        this.equivalents = equivalents || []

        //displayed value
        this.view = view || command.operationName

        this.buttonView = buttonView || this.view
    }

    isEquivalent(value) {
        return this.command.operationName === value || this.equivalents?.includes(value)
    }
}

class Operations {
    constructor(calculator) {
        this.calculator = calculator
        this.createValues()
    }

    createValues() {
        //all available keys
        this.values = [
            new Operation(new ClearCommand(operationsNames.clear, this.calculator)),
            new Operation(new ChangeSignCommand(operationsNames.changeSign, this.calculator), [], '&plusmn;'),
            new Operation(
                new RootCommandCommand(operationsNames.root, this.calculator),
                [],
                '&#8730;',
                `${getSuperscript('y')}&#8730;`
            ),
            new Operation(
                new RootCommandCommand(operationsNames.root, this.calculator, 2),
                [],
                '&#8730;',
                `${getSuperscript(2)}&#8730;`
            ),
            new Operation(
                new RootCommandCommand(operationsNames.root, this.calculator, 3),
                [],
                '&#8730;',
                `${getSuperscript(3)}&#8730;`
            ),

            new Operation(new HistoryBackCommand(operationsNames.historyBack, this.calculator), [
                'Backspace',
                'Delete',
                'c',
            ]),
            new Operation(new AddOperatorCommand(operationsNames.pow, this.calculator)),
            new Operation(new TenToXPowCommand(operationsNames.tenPowX, this.calculator)),
            new Operation(new PowCommand(operationsNames.pow, this.calculator, 2), [], 'x^2'),
            new Operation(new PowCommand(operationsNames.pow, this.calculator, 3), [], 'x^3'),

            new Operation(new MemorySaveCommand(operationsNames.memorySave, this.calculator)),
            new Operation(new AddOperatorCommand(operationsNames.factorial, this.calculator)),
            new Operation(new OneDivXCommand(operationsNames.oneDivX, this.calculator), [], '1/x'),
            new Operation(new AddOperatorCommand(operationsNames.percent, this.calculator)),
            new Operation(new AddOperatorCommand(operationsNames.div, this.calculator), ['/'], '&#xF7;'),

            new Operation(new MemoryClearCommand(operationsNames.memoryClear, this.calculator)),
            new Operation(new AddOperandCommand(numbersNames.seven, this.calculator)),
            new Operation(new AddOperandCommand(numbersNames.eight, this.calculator)),
            new Operation(new AddOperandCommand(numbersNames.nine, this.calculator)),
            new Operation(new AddOperatorCommand(operationsNames.mul, this.calculator), [], '&#215;'),

            new Operation(new MemoryReadCommand(operationsNames.memoryRead, this.calculator)),
            new Operation(new AddOperandCommand(numbersNames.four, this.calculator)),
            new Operation(new AddOperandCommand(numbersNames.five, this.calculator)),
            new Operation(new AddOperandCommand(numbersNames.six, this.calculator)),
            new Operation(new AddOperatorCommand(operationsNames.minus, this.calculator), ['_']),

            new Operation(
                new MemoryPlusMinusCommand(operationsNames.memoryPlusMinus, this.calculator, operationsNames.minus),
                [],
                operationsNames.memoryMinus
            ),
            new Operation(new AddOperandCommand(numbersNames.one, this.calculator)),
            new Operation(new AddOperandCommand(numbersNames.two, this.calculator)),
            new Operation(new AddOperandCommand(numbersNames.three, this.calculator)),
            new Operation(new AddOperatorCommand(operationsNames.plus, this.calculator)),

            new Operation(
                new MemoryPlusMinusCommand(operationsNames.memoryPlusMinus, this.calculator, operationsNames.plus),
                [],
                operationsNames.memoryPlus
            ),
            new Operation(new AddOperandCommand(numbersNames.zero, this.calculator)),
            new Operation(new DotCommand(operationsNames.dot, this.calculator), [',']),
            new Operation(new CalculateCommand(operationsNames.equal, this.calculator), ['Enter']),
        ]
    }
}

export default Operations
