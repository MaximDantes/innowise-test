import Command from './Commands.js'

class MemoryReadCommand extends Command {
    constructor(operationName, calculator, value) {
        super(operationName, calculator, value)
    }

    execute() {
        if (!this.calculator.operator) {
            this.calculator.leftOperand = this.calculator.memory
        } else {
            this.calculator.rightOperand = this.calculator.memory
        }
        this.calculator.createSummary()
        this.calculator.callObservers()
    }
}

export default MemoryReadCommand
