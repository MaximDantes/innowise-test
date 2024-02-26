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

            default:
        }

        this.leftOperand = this.summary
        this.rightOperand = ''

        this.summary = String(this.summary)
        this.callObservers()
    }

    addOperand(operand) {
        this.saveSnapshot()

        if (!this.operator) {
            this.leftOperand += operand
        } else {
            this.rightOperand += operand
        }

        this.createSummary()
        this.callObservers()
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

    createSummary() {
        this.summary = `${this.leftOperand} ${this.operator} ${this.rightOperand}`
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
