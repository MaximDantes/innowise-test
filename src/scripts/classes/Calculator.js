class Calculator {
    constructor() {
        this.leftOperand = ''
        this.rightOperand = ''
        this.operator = ''
        this.summary = ''
        this.observers = []
        this.caretaker = new CalculatorCaretaker(this)
        this.saveSnapshot()
    }

    clear() {
        this.saveSnapshot()

        this.leftOperand = ''
        this.rightOperand = ''
        this.operator = ''
        this.summary = ''

        this.callObservers()
    }

    calculate() {
        this.saveSnapshot()

        switch (this.operator) {
            case '+':
                this.summary = +this.leftOperand + +this.rightOperand
                break

            case '-':
                this.summary = +this.leftOperand - +this.rightOperand
                break

            case '/':
                this.summary = +this.leftOperand / +this.rightOperand
                break

            case '*':
                this.summary = +this.leftOperand * +this.rightOperand
                break

            case '^': {
                //TODO float exponent
                let result = 1
                for (let i = 0; i < +this.rightOperand; i++) {
                    result *= +this.leftOperand
                }
                this.summary = result
                break
            }

            case '!': {
                //TODO float factorial
                let result = 1
                for (let i = 1; i <= +this.leftOperand; i++) {
                    result *= i
                }
                this.summary = result
                break
            }

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
                if (this.operator === '!') {
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
        this.saveSnapshot()

        if (!this.operator) {
            this.operator = operator
        } else {
            this.calculate()
            this.operator = operator
        }

        this.createSummary()
        this.callObservers()
    }

    changeSign() {
        try {
            if (!this.operator && this.leftOperand) {
                this.leftOperand = +this.leftOperand * -1
                return
            }

            if (this.operator === '+') {
                this.operator = '-'
                return
            }

            if (this.operator === '-') {
                this.operator = '+'
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

    createSummary() {
        this.summary = ''
        if (this.leftOperand) this.summary += this.leftOperand
        if (this.operator) {
            if (
                this.operator === '+' ||
                this.operator === '-' ||
                this.operator === '*' ||
                this.operator === '/' ||
                this.operator === '^'
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
