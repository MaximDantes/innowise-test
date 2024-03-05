import Command from './Commands.js'
import { operationsNames } from '../Operations.js'

class RootCommand extends Command {
    constructor(operationName, calculator, value) {
        super(operationName, calculator, value)
    }

    execute() {
        if (!this.calculator.leftOperand && this.value === undefined) return

        if (this.calculator.rightOperand) {
            this.calculator.calculate()
        }

        if (this.value !== undefined) {
            this.calculator.rightOperand = this.calculator.leftOperand
            this.calculator.leftOperand = this.value
        }
        this.calculator.operator = operationsNames.root

        this.calculator.createSummary()
        this.calculator.callObservers()
    }
}

export default RootCommand
