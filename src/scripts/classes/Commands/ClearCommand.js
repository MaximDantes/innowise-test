import Command from './Commands.js'

class ClearCommand extends Command {
    constructor(operationName, calculator, value) {
        super(operationName, calculator, value)
    }

    execute() {
        this.calculator.saveSnapshot()

        this.calculator.leftOperand = ''
        this.calculator.rightOperand = ''
        this.calculator.operator = ''
        this.calculator.summary = ''

        this.calculator.callObservers()
    }
}

export default ClearCommand
