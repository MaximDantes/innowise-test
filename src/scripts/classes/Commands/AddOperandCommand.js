import Command from './Commands.js'
import { operationsNames } from '../Operations.js'

class AddOperandCommand extends Command {
    constructor(operationName, calculator, value) {
        super(operationName, calculator, value)
    }

    execute() {
        try {
            this.calculator.saveSnapshot()

            //remove zero from values like 05, 0004, -0004
            //replace Infinity and NaN by empty string
            const formatOperand = (prevOperand, newOperand) => {
                if (
                    String(prevOperand) === 'Infinity' ||
                    String(prevOperand) === '-Infinity' ||
                    String(prevOperand) === 'NaN'
                ) {
                    prevOperand = ''
                }

                if (!prevOperand.includes(operationsNames.dot)) {
                    const isNegative = prevOperand.charAt(0) === operationsNames.minus

                    prevOperand = isNegative ? prevOperand.slice(1, prevOperand.length) : prevOperand

                    while (prevOperand.charAt(0) === '0') {
                        prevOperand = prevOperand.slice(1, prevOperand.length)
                    }

                    prevOperand = isNegative ? operationsNames.minus + prevOperand : prevOperand
                }

                return prevOperand + newOperand
            }

            if (!this.calculator.operator) {
                this.calculator.leftOperand = formatOperand(this.calculator.leftOperand, this.operationName)
            } else {
                if (this.calculator.operator === operationsNames.factorial) {
                    this.calculator.calculate()
                }

                this.calculator.rightOperand = formatOperand(this.calculator.rightOperand, this.operationName)
            }
        } catch (e) {
            //TODO show error
            throw new Error('Add operand error')
        } finally {
            this.calculator.createSummary()
            this.calculator.callObservers()
        }
    }
}

export default AddOperandCommand
