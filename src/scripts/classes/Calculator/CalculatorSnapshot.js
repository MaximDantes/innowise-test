class CalculatorSnapshot {
    constructor(calculator) {
        this.leftOperand = calculator.leftOperand
        this.rightOperand = calculator.rightOperand
        this.operator = calculator.operator
        this.summary = calculator.summary
    }
}

export default CalculatorSnapshot
