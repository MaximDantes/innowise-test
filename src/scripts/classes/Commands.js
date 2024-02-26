class Command {
    constructor(calculator) {
        this.calculator = calculator

        if (this.constructor === Command) {
            throw new Error("Abstract classes can't be instantiated.")
        }
    }

    execute() {
        throw new Error('Method execute is not implemented')
    }
}

export class Operator extends Command {
    constructor(value, calculator) {
        super(calculator)
        this.value = value
    }

    execute() {
        this.calculator.addOperator(this.value)
    }
}

export class Operand extends Command {
    constructor(value, calculator) {
        super(calculator)
        this.value = value
    }

    execute() {
        this.calculator.addOperand(this.value)
    }
}
