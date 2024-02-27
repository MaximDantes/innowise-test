import {
    AddOperandCommand,
    AddOperatorCommand,
    CalculateCommand,
    ChangeSignCommand,
    ClearCommand,
    CubeCommand,
    HistoryBackCommand, PowCommand,
    TenToXPow,
} from './Commands.js'

class Operation {
    constructor(command, equivalents, view) {
        this.command = command

        //alternative keyboard keys for execute this command
        this.equivalents = equivalents || []

        //displayed value
        this.view = view || command.value
    }

    isEquivalent(value) {
        return this.command.value === value || this.equivalents?.includes(value)
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
            new Operation(new ClearCommand('AC', this.calculator)),
            new Operation(new HistoryBackCommand('C', this.calculator), ['Backspace', 'Delete', 'c']),
            new Operation(new AddOperatorCommand('%', this.calculator)),
            new Operation(new AddOperatorCommand('/', this.calculator), [], '&#xF7;'),

            new Operation(new AddOperandCommand('7', this.calculator)),
            new Operation(new AddOperandCommand('8', this.calculator)),
            new Operation(new AddOperandCommand('9', this.calculator)),

            new Operation(new AddOperatorCommand('*', this.calculator), [], '&#215;'),

            new Operation(new AddOperandCommand('4', this.calculator)),
            new Operation(new AddOperandCommand('5', this.calculator)),
            new Operation(new AddOperandCommand('6', this.calculator)),

            new Operation(new AddOperatorCommand('-', this.calculator), ['_']),

            new Operation(new AddOperandCommand('1', this.calculator)),
            new Operation(new AddOperandCommand('2', this.calculator)),
            new Operation(new AddOperandCommand('3', this.calculator)),

            new Operation(new AddOperatorCommand('+', this.calculator)),
            new Operation(new ChangeSignCommand('+-', this.calculator), [], '&plusmn;'),
            new Operation(new AddOperandCommand('0', this.calculator)),
            new Operation(new AddOperandCommand('.', this.calculator), [',']),
            new Operation(new CalculateCommand('=', this.calculator), ['Enter']),

            new Operation(new AddOperatorCommand('^', this.calculator)),
            new Operation(new AddOperatorCommand('!', this.calculator)),
            new Operation(new TenToXPow('10^x', this.calculator)),
            new Operation(new PowCommand('2', this.calculator), [], 'x^2'),
            new Operation(new PowCommand('3', this.calculator), [], 'x^3'),
        ]
    }
}

export default Operations
