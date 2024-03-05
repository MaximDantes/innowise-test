import Command from './Commands.js'
import { operationsNames } from '../Operations.js'

class AddOperatorCommand extends Command {
    constructor(operationName, calculator, value) {
        super(operationName, calculator, value)
    }

    execute() {
        try {
            this.calculator.saveSnapshot()

            if (this.calculator.leftOperand === operationsNames.minus) {
                this.calculator.leftOperand = ''
                return
            }

            if (!this.calculator.leftOperand) {
                if (this.operationName !== operationsNames.minus) return

                this.calculator.leftOperand += operationsNames.minus
                return
            }

            if (!this.calculator.operator) {
                this.calculator.operator = this.operationName
                return
            }
            if (this.operationName !== operationsNames.minus) {
                this.calculator.calculate()
                this.calculator.operator = this.operationName
                return
            }
            if (!this.calculator.isOperationIncomplete()) {
                this.calculator.calculate()
                this.calculator.operator = this.operationName
                return
            }
            if (this.calculator.operator === operationsNames.minus) {
                this.calculator.operator = operationsNames.plus
                return
            }

            if (this.calculator.operator === operationsNames.plus) {
                this.calculator.operator = operationsNames.minus
                return
            }

            this.calculator.rightOperand += operationsNames.minus
        } catch (e) {
            //TODO show error
            throw new Error('Add operator error')
        } finally {
            this.calculator.createSummary()
            this.calculator.callObservers()
        }
    }
}

export default AddOperatorCommand
