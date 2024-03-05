import Command from './Commands.js'
import { operationsNames } from '../Operations.js'

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
            //TODO show error
            throw new Error('Ten to X pow error')
        } finally {
            this.calculator.createSummary()
            this.calculator.callObservers()
        }
    }
}

export default TenToXPowCommand
