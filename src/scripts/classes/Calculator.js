import { getSuperscript, operationsNames } from './Operations.js'
import errorMessages from '../common/error-messages.js'

class Calculator {
    constructor() {
        this.leftOperand = ''
        this.rightOperand = ''
        this.operator = ''
        this.summary = ''
        this.observers = []
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

            case operationsNames.root:
                //TODO remove Math
                if (String(this.leftOperand) === '2') {
                    this.summary = Math.sqrt(this.rightOperand)
                    break
                }
                if (String(this.leftOperand) === '3') {
                    this.summary = Math.cbrt(this.rightOperand)
                    break
                }
                this.summary = Math.pow(+this.rightOperand, 1 / +this.leftOperand)
                break

            default:
        }

        this.leftOperand = this.summary
        this.rightOperand = ''

        this.summary = String(this.summary)
        this.callObservers()
    }

    addOperand(operand) {
        try {
            this.saveSnapshot()

            if (!this.operator) {
                this.leftOperand += operand
            } else {
                if (this.operator === operationsNames.factorial) {
                    this.calculate()
                }

                this.rightOperand += operand
            }
        } catch (e) {
            throw new Error('Add operand error')
        } finally {
            this.createSummary()
            this.callObservers()
        }
    }

    addOperator(operator) {
        try {
            this.saveSnapshot()

            if (this.leftOperand === operationsNames.minus) {
                this.leftOperand = ''
                return
            }

            if (!this.leftOperand) {
                if (operator !== operationsNames.minus) return

                this.leftOperand += operationsNames.minus
                return
            }

            if (!this.operator) {
                this.operator = operator
            } else {
                if (operator !== operationsNames.minus) {
                    this.calculate()
                    this.operator = operator
                } else {
                    if (this.isOperationIncomplete()) {
                        if (this.operator === operationsNames.minus) {
                            this.operator = operationsNames.plus
                            return
                        }

                        if (this.operator === operationsNames.plus) {
                            this.operator = operationsNames.minus
                            return
                        }

                        this.rightOperand += operationsNames.minus
                    } else {
                        this.calculate()
                        this.operator = operator
                    }
                }
            }
        } catch (e) {
            throw new Error('Add operator error')
        } finally {
            this.createSummary()
            this.callObservers()
        }
    }

    dot() {
        try {
            this.saveSnapshot()

            let operand = this.operator ? this.rightOperand : this.leftOperand

            if (operand.charAt(operand.length - 1) === operationsNames.dot) return

            if (operand === '') return

            operand += operationsNames.dot

            this.operator ? (this.rightOperand = operand) : (this.leftOperand = operand)
        } catch (e) {
            throw new Error('Add dot error')
        } finally {
            this.createSummary()
            this.callObservers()
        }
    }

    changeSign() {
        try {
            if (!this.operator && this.leftOperand) {
                this.leftOperand = +this.leftOperand * -1
                return
            }

            if (this.operator === operationsNames.plus) {
                this.operator = operationsNames.minus
                return
            }

            if (this.operator === operationsNames.minus) {
                this.operator = operationsNames.plus
                return
            }

            this.rightOperand = +this.rightOperand * -1
        } catch (e) {
            throw new Error('Change sign error')
        } finally {
            this.createSummary()
            this.callObservers()
        }
    }

    tenToXPow() {
        try {
            if (this.leftOperand === '10' && this.operator === operationsNames.pow) {
                return
            }
            this.leftOperand = '10'
            this.operator = operationsNames.pow
            this.rightOperand = ''
        } catch (e) {
            throw new Error('Ten to X pow error')
        } finally {
            this.createSummary()
            this.callObservers()
        }
    }

    oneDivX() {
        try {
            if (this.leftOperand === '1' && this.operator === operationsNames.div) {
                return
            }
            this.rightOperand = this.leftOperand
            this.leftOperand = '1'
            this.operator = operationsNames.div
        } catch (e) {
            throw new Error('One div X error')
        } finally {
            this.createSummary()
            this.callObservers()
        }
    }

    pow(value) {
        if (!this.leftOperand) return

        if (this.rightOperand) {
            this.calculate()
        }

        this.operator = operationsNames.pow
        this.rightOperand = value

        this.createSummary()
        this.callObservers()
    }

    root(value) {
        if (!this.leftOperand && value === undefined) return

        if (this.rightOperand) {
            this.calculate()
        }

        if (value !== undefined) {
            this.rightOperand = this.leftOperand
            this.leftOperand = value
        }
        this.operator = operationsNames.root

        this.createSummary()
        this.callObservers()
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

    subscribe(observer) {
        this.observers.push(observer)
    }

    unsubscribe(observer) {
        this.observers = this.observers.filter((item) => item !== observer)
    }

    callObservers() {
        this.observers.forEach((item) => item(this.summary))
    }

    saveSnapshot() {
        this.caretaker.save(new CalculatorSnapshot(this))
    }

    restore() {
        this.caretaker.restore()
    }

    handleError(e) {
        this.clear()
        this.summary = e.message
        this.callObservers()
    }
}

export default Calculator

class CalculatorSnapshot {
    constructor(calculator) {
        this.leftOperand = calculator.leftOperand
        this.rightOperand = calculator.rightOperand
        this.operator = calculator.operator
        this.summary = calculator.summary
    }
}

class CalculatorCaretaker {
    constructor(calculator) {
        this.history = []
        this.calculator = calculator
    }

    save(snapshot) {
        const prevSnapshot = this.history[this.history.length - 1]

        if (
            prevSnapshot &&
            prevSnapshot.leftOperand === snapshot.leftOperand &&
            prevSnapshot.rightOperand === snapshot.rightOperand &&
            prevSnapshot.operator === snapshot.operator &&
            prevSnapshot.summary === snapshot.summary
        )
            return

        this.history.push(snapshot)
    }

    restore() {
        const snapshot = this.history.pop()

        if (snapshot) {
            this.calculator.leftOperand = snapshot.leftOperand
            this.calculator.rightOperand = snapshot.rightOperand
            this.calculator.operator = snapshot.operator
            this.calculator.summary = snapshot.summary
            this.calculator.callObservers()
        }
    }
}

//redirect all errorMessages to Calculator.handleError
const calculatorErrorHandler = {
    get(target, prop) {
        // eslint-disable-next-line no-prototype-builtins
        return !Calculator.prototype.hasOwnProperty(prop)
            ? target[prop]
            : function (...args) {
                  try {
                      target[prop].apply(this, args)
                  } catch (e) {
                      target.handleError(e)
                  }
              }
    },
}
