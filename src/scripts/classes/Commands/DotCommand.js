import Command from './Commands.js'
import { operationsNames } from '../Operations.js'
import errorMessages from '../../common/error-messages.js'

class DotCommand extends Command {
    constructor(operationName, calculator, value) {
        super(operationName, calculator, value)
    }

    execute() {
        try {
            this.calculator.saveSnapshot()

            let operand = String(this.calculator.operator ? this.calculator.rightOperand : this.calculator.leftOperand)

            if (operand.charAt(operand.length - 1) === operationsNames.dot) return

            if (operand === '') return

            if (operand.includes(operationsNames.dot)) return

            operand += operationsNames.dot

            this.calculator.operator
                ? (this.calculator.rightOperand = operand)
                : (this.calculator.leftOperand = operand)
        } catch (e) {
            this.calculator.handleError(new Error(errorMessages.addDotError))
        } finally {
            this.calculator.createSummary()
            this.calculator.callObservers()
        }
    }
}

export default DotCommand
