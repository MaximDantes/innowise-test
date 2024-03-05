import Command from './Commands.js'
import { operationsNames } from '../Operations.js'
import errorMessages from '../../common/error-messages.js'

class TenToXPowCommand extends Command {
    constructor(operationName, calculator, value) {
        super(operationName, calculator, value)
    }

    execute() {
        try {
            if (this.calculator.leftOperand === '10' && this.calculator.operator === operationsNames.pow) {
                return
            }
            this.calculator.leftOperand = '10'
            this.calculator.operator = operationsNames.pow
            this.calculator.rightOperand = ''
        } catch (e) {
            this.calculator.handleError(new Error(errorMessages.tenToXPowError))
        } finally {
            this.calculator.createSummary()
            this.calculator.callObservers()
        }
    }
}

export default TenToXPowCommand
