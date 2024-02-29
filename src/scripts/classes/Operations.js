import {
    AddOperandCommand,
    AddOperatorCommand,
    CalculateCommand,
    ChangeSignCommand,
    ClearCommand,
    DotCommand,
    HistoryBackCommand, MemoryClearCommand,
    MemorySaveCommand,
    OneDivX,
    PowCommand,
    RootCommand,
    TenToXPow,
} from './Commands.js'

export const operationsNames = {
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
}

export const getSuperscript = (value) => {
    return `<sup>${value}</sup>`
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
            new Operation(new HistoryBackCommand(operationsNames.historyBack, this.calculator), [
                'Backspace',
                'Delete',
                'c',
            ]),
            new Operation(new AddOperatorCommand(operationsNames.percent, this.calculator)),
            new Operation(new AddOperatorCommand(operationsNames.div, this.calculator), ['/'], '&#xF7;'),

            new Operation(new AddOperandCommand(operationsNames.seven, this.calculator)),
            new Operation(new AddOperandCommand(operationsNames.eight, this.calculator)),
            new Operation(new AddOperandCommand(operationsNames.nine, this.calculator)),

            new Operation(new AddOperatorCommand(operationsNames.mul, this.calculator), [], '&#215;'),

            new Operation(new AddOperandCommand(operationsNames.four, this.calculator)),
            new Operation(new AddOperandCommand(operationsNames.five, this.calculator)),
            new Operation(new AddOperandCommand(operationsNames.six, this.calculator)),

            new Operation(new AddOperatorCommand(operationsNames.minus, this.calculator), ['_']),

            new Operation(new AddOperandCommand(operationsNames.one, this.calculator)),
            new Operation(new AddOperandCommand(operationsNames.two, this.calculator)),
            new Operation(new AddOperandCommand(operationsNames.three, this.calculator)),

            new Operation(new AddOperatorCommand(operationsNames.plus, this.calculator)),
            new Operation(new ChangeSignCommand(operationsNames.changeSign, this.calculator), [], '&plusmn;'),
            new Operation(new AddOperandCommand(operationsNames.zero, this.calculator)),
            new Operation(new DotCommand(operationsNames.dot, this.calculator), [',']),
            new Operation(new CalculateCommand(operationsNames.equal, this.calculator), ['Enter']),

            new Operation(new AddOperatorCommand(operationsNames.pow, this.calculator)),
            new Operation(new AddOperatorCommand(operationsNames.factorial, this.calculator)),
            new Operation(new TenToXPow(operationsNames.tenPowX, this.calculator)),
            new Operation(new PowCommand(operationsNames.pow, this.calculator, 2), [], 'x^2'),
            new Operation(new PowCommand(operationsNames.pow, this.calculator, 3), [], 'x^3'),
            new Operation(new OneDivX(operationsNames.oneDivX, this.calculator), [], '1/x'),
            new Operation(
                new RootCommand(operationsNames.root, this.calculator, 2),
                [],
                '&#8730;',
                `${getSuperscript(2)}&#8730;`
            ),
            new Operation(
                new RootCommand(operationsNames.root, this.calculator, 3),
                [],
                '&#8730;',
                `${getSuperscript(3)}&#8730;`
            ),
            new Operation(
                new RootCommand(operationsNames.root, this.calculator),
                [],
                '&#8730;',
                `${getSuperscript('y')}&#8730;`
            ),

            new Operation(new MemorySaveCommand(operationsNames.memorySave, this.calculator)),
            new Operation(new MemoryClearCommand(operationsNames.memoryClear, this.calculator)),
        ]
    }
}

export default Operations
