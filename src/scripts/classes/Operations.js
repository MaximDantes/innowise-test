import {
    AddOperandCommand,
    AddOperatorCommand,
    CalculateCommand,
    ChangeSignCommand,
    ClearCommand,
    HistoryBackCommand,
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
            new Operation(new HistoryBackCommand('C', this.calculator), [
                'Backspace',
                'Delete',
                'c',
            ]),
            new Operation(new AddOperandCommand('%', this.calculator)),
            new Operation(
                new AddOperandCommand('/', this.calculator),
                [],
                '&#xF7;'
            ),

            new Operation(new AddOperatorCommand('7', this.calculator)),
            new Operation(new AddOperatorCommand('8', this.calculator)),
            new Operation(new AddOperatorCommand('9', this.calculator)),

            new Operation(
                new AddOperandCommand('*', this.calculator),
                [],
                '&#215;'
            ),

            new Operation(new AddOperatorCommand('4', this.calculator)),
            new Operation(new AddOperatorCommand('5', this.calculator)),
            new Operation(new AddOperatorCommand('6', this.calculator)),

            new Operation(new AddOperandCommand('-', this.calculator), ['_']),

            new Operation(new AddOperatorCommand('1', this.calculator)),
            new Operation(new AddOperatorCommand('2', this.calculator)),
            new Operation(new AddOperatorCommand('3', this.calculator)),

            new Operation(new AddOperandCommand('+', this.calculator)),
            new Operation(
                new ChangeSignCommand('+-', this.calculator),
                [],
                '&plusmn;'
            ),
            new Operation(new AddOperatorCommand('0', this.calculator)),
            new Operation(new AddOperatorCommand('.', this.calculator), [',']),
            new Operation(new CalculateCommand('=', this.calculator), [
                'Enter',
            ]),
        ]
    }
}

export default Operations
