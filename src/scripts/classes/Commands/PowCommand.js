import Command from './Commands.js'
import { operationsNames } from '../Operations.js'

class PowCommand extends Command {
    constructor(operationName, calculator, value) {
        super(operationName, calculator, value)
    }

    execute() {
        if (!this.calculator.leftOperand) return

        if (this.calculator.rightOperand) {
            this.calculator.calculate()
        }

        this.calculator.operator = operationsNames.pow
        this.calculator.rightOperand = this.value

        this.calculator.createSummary()
        this.calculator.callObservers()
    }
}

export default PowCommand
