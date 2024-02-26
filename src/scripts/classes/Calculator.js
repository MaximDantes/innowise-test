class Calculator {
    constructor() {
        this.leftOperand = ''
        this.rightOperand = ''
        this.operator = ''
        this.summary = ''
        this.observers = []
    }

    clear() {
        this.leftOperand = ''
        this.rightOperand = ''
        this.operator = ''
        this.summary = ''
        this.callObservers()
    }

    calculate() {
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
        if (!this.operator) {
            this.leftOperand += operand
        } else {
            this.rightOperand += operand
        }

        this.createSummary()
        this.callObservers()
    }

    addOperator(operator) {
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
}

export default Calculator
