import Command from './Commands.js'

class MemoryPlusMinusCommand extends Command {
    constructor(operationName, calculator, value) {
        super(operationName, calculator, value)
    }

    execute() {
        if (!this.calculator.memory) return

        this.calculator.calculate()

        this.calculator.rightOperand = this.calculator.leftOperand
        this.calculator.leftOperand = this.calculator.memory
        this.calculator.operator = this.value
        this.calculator.calculate()
        this.calculator.memory = this.calculator.summary

        this.calculator.leftOperand = this.calculator.memory
        this.calculator.operator = ''
        this.calculator.rightOperand = ''

        this.calculator.createSummary()
        this.calculator.callObservers()
    }
}

export default MemoryPlusMinusCommand
