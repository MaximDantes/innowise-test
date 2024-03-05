import Command from './Commands.js'

class MemorySaveCommand extends Command {
    constructor(operationName, calculator, value) {
        super(operationName, calculator, value)
    }

    execute() {
        if (this.calculator.isOperationIncomplete()) {
            this.calculator.memory = this.calculator.leftOperand || '0'
        } else {
            this.calculator.calculate()
            this.calculator.memory = this.calculator.summary
        }
        this.calculator.operator = ''
        this.calculator.rightOperand = ''
        this.calculator.callMemoryObservers()
    }
}

export default MemorySaveCommand
