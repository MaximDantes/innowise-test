import Command from './Commands.js'
import { operationsNames } from '../Operations.js'
import errorMessages from '../../common/error-messages.js'

class ChangeSignCommand extends Command {
    constructor(operationName, calculator, value) {
        super(operationName, calculator, value)
    }

    execute() {
        try {
            if (!this.calculator.operator && this.calculator.leftOperand) {
                this.calculator.leftOperand = +this.calculator.leftOperand * -1
                return
            }

            if (this.calculator.operator === operationsNames.plus) {
                this.calculator.operator = operationsNames.minus
                return
            }

            if (this.calculator.operator === operationsNames.minus) {
                this.calculator.operator = operationsNames.plus
                return
            }

            if (this.calculator.rightOperand) {
                this.calculator.rightOperand = +this.calculator.rightOperand * -1
            }
        } catch (e) {
            this.calculator.handleError(new Error(errorMessages.changeSignError))
        } finally {
            this.calculator.createSummary()
            this.calculator.callObservers()
        }
    }
}

export default ChangeSignCommand
