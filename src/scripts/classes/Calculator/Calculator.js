import { operationsNames } from '../Operations.js'
import errorMessages from '../../common/error-messages.js'
import calculatorErrorHandler from './calculator-error-handler.js'
import CalculatorSnapshot from './CalculatorSnapshot.js'
import CalculatorCaretaker from './CalculatorCaretaker.js'
import { getSuperscript } from '../../common/get-superscript.js'
import calculateRoot from './calculate-root.js'
import calculatePow from './calculate-pow.js'
import calculateFactorial from './calculate-factorial.js'

class Calculator {
    constructor() {
        this.leftOperand = ''
        this.rightOperand = ''
        this.operator = ''
        this.summary = ''
        this.memory = ''
        this.observers = []
        this.memoryObservers = []
        this.caretaker = new CalculatorCaretaker(this)
        this.saveSnapshot()
        return new Proxy(this, calculatorErrorHandler)
    }

    clear() {
        this.saveSnapshot()

        this.leftOperand = ''
        this.rightOperand = ''
        this.operator = ''
        this.summary = ''

        this.callObservers()
    }

    isOperationIncomplete = () => {
        //all operations with only one operand
        return (
            !this.rightOperand &&
            this.operator !== operationsNames.factorial &&
            this.operator !== operationsNames.percent
        )
    }

    calculate() {
        try {
            if (this.isOperationIncomplete()) return

            this.saveSnapshot()

            switch (this.operator) {
                case operationsNames.plus:
                    this.summary = +this.leftOperand + +this.rightOperand
                    break

                case operationsNames.minus:
                    this.summary = +this.leftOperand - +this.rightOperand
                    break

                case operationsNames.div:
                    if (+this.rightOperand === 0) {
                        throw new Error(errorMessages.divByZero)
                    }

                    this.summary = +this.leftOperand / +this.rightOperand
                    break

                case operationsNames.mul:
                    this.summary = +this.leftOperand * +this.rightOperand
                    break

                case operationsNames.pow: {
                    this.summary = calculatePow(+this.leftOperand, +this.rightOperand)
                    break
                }

                case operationsNames.factorial: {
                    this.summary = calculateFactorial(+this.leftOperand)
                    break
                }

                case operationsNames.percent:
                    this.summary = +this.leftOperand / 100
                    break

                case operationsNames.root: {
                    this.summary = calculateRoot(+this.rightOperand, +this.leftOperand)
                    break
                }

                default:
            }

            this.leftOperand = this.summary
            this.rightOperand = ''
            this.operator = ''

            this.summary = String(this.summary)
            this.callObservers()
        } catch (e) {
            throw new Error(e.message || 'Calculation error')
        }
    }

    createSummary() {
        if (Object.values(errorMessages).includes(this.summary)) return

        this.summary = ''

        if (!this.leftOperand) return

        if (this.operator === operationsNames.root && String(this.leftOperand) !== '2') {
            this.summary += getSuperscript(this.leftOperand)
        }

        if (this.operator !== operationsNames.root) {
            this.summary += this.leftOperand
        }

        if (!this.operator) return

        if (
            this.operator === operationsNames.plus ||
            this.operator === operationsNames.minus ||
            this.operator === operationsNames.mul ||
            this.operator === operationsNames.div ||
            this.operator === operationsNames.pow
        ) {
            this.summary += ' '
        }

        this.summary += this.operator

        if (this.rightOperand) this.summary += ' ' + this.rightOperand
    }

    getMemoryValue = () => {
        return this.memory
    }

    subscribe(observer) {
        this.observers.push(observer)
    }

    callObservers() {
        this.observers.forEach((item) => item(this.summary))
    }

    subscribeMemory(observer) {
        this.memoryObservers.push(observer)
    }

    callMemoryObservers() {
        this.memoryObservers.forEach((item) => item(!!this.memory))
    }

    saveSnapshot() {
        this.caretaker.save(new CalculatorSnapshot(this))
    }

    handleError(e) {
        this.clear()
        this.summary = e.message
        this.callObservers()
    }
}

export default Calculator
