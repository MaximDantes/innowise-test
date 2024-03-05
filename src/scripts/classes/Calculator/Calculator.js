import { operationsNames } from '../Operations.js'
import errorMessages from '../../common/error-messages.js'
import calculatorErrorHandler from './calculator-error-handler.js'
import CalculatorSnapshot from './CalculatorSnapshot.js'
import CalculatorCaretaker from './CalculatorCaretaker.js'
import { getSuperscript } from '../../common/get-superscript.js'

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
                    if (!Number.isInteger(+this.rightOperand)) {
                        throw new Error(errorMessages.floatPow)
                    }

                    if (+this.rightOperand > 100000) {
                        this.summary = Infinity
                        break
                    }

                    let result = 1
                    for (let i = 0; i < +this.rightOperand; i++) {
                        result *= +this.leftOperand
                    }
                    this.summary = result
                    break
                }

                case operationsNames.factorial: {
                    if (!Number.isInteger(+this.leftOperand)) {
                        throw new Error(errorMessages.floatFactorial)
                    }

                    let result = 1
                    for (let i = 1; i <= +this.leftOperand; i++) {
                        result *= i
                    }
                    this.summary = result
                    break
                }

                case operationsNames.percent:
                    this.summary = +this.leftOperand / 100
                    break

                case operationsNames.root: {
                    const startTime = Date.now()

                    const abs = (number) => {
                        return number < 0 ? number * -1 : number
                    }

                    const root = (number, n) => {
                        if (number < 0 && n % 2 === 0) {
                            throw new Error(errorMessages.negativeRoot)
                        }

                        let guess = number / 2
                        const epsilon = 1e-12

                        while (abs(guess ** n - number) > epsilon) {
                            //break loop when it takes too long
                            if (Date.now() - startTime > 1000) {
                                throw new Error(errorMessages.cannotFindRoot)
                            }
                            guess = (1 / n) * ((n - 1) * guess + number / guess ** (n - 1))
                        }

                        return guess
                    }

                    this.summary = root(+this.rightOperand, +this.leftOperand)
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
        this.summary = ''
        if (this.leftOperand) {
            if (this.operator !== operationsNames.root) {
                this.summary += this.leftOperand
            } else {
                if (String(this.leftOperand) !== '2') {
                    this.summary += getSuperscript(this.leftOperand)
                }
            }
        }
        if (this.operator) {
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
        }
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
