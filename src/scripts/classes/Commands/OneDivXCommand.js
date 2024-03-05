import Command from './Commands.js'
import { operationsNames } from '../Operations.js'

class OneDivXCommand extends Command {
    constructor(operationName, calculator, value) {
        super(operationName, calculator, value)
    }

    execute() {
        try {
            if (this.calculator.leftOperand === '1' && this.calculator.operator === operationsNames.div) {
                return
            }

            this.calculator.rightOperand = this.calculator.leftOperand
            this.calculator.leftOperand = '1'
            this.calculator.operator = operationsNames.div
        } catch (e) {
            this.calculator.handleError(new Error())
        } finally {
            this.calculator.createSummary()
            this.calculator.callObservers()
        }
    }
}

export default OneDivXCommand
