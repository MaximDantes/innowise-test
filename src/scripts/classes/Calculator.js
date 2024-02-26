class Calculator {
    constructor() {
        this.leftOperand = ''
        this.rightOperand = ''
        this.operator = ''
    }

    calculate() {
        return +this.leftOperand + +this.rightOperand
    }

    addOperand(operand) {
        if (!this.operator) {
            this.leftOperand += operand
            return
        }

        this.rightOperand += operand
    }

    addOperator(operator) {
        if (!this.operator) {
            this.operator = operator
            return
        }

        this.calculate()
    }
}

export default Calculator
