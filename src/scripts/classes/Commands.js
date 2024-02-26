class Command {
    constructor(value, calculator) {
        this.calculator = calculator
        this.value = value

        if (this.constructor === Command) {
            throw new Error("Abstract classes can't be instantiated")
        }
    }

    execute() {
        throw new Error('Method execute is not implemented')
    }
}

export class AddOperatorCommand extends Command {
    constructor(value, calculator) {
        super(value, calculator)
    }

    execute() {
        this.calculator.addOperator(this.value)
    }
}

export class AddOperandCommand extends Command {
    constructor(value, calculator) {
        super(value, calculator)
    }

    execute() {
        this.calculator.addOperand(this.value)
    }
}

export class ClearCommand extends Command {
    constructor(value, calculator) {
        super(value, calculator)
    }

    execute() {
        this.calculator.clear()
    }
}

export class HistoryBackCommand extends Command {
    constructor(value, calculator) {
        super(value, calculator)
    }

    execute() {
        this.calculator.restore()
    }
}

export class ChangeSignCommand extends Command {
    constructor(value, calculator) {
        super(value, calculator)
    }

    execute() {
        //TODO
        console.log('change sign')
    }
}

export class CalculateCommand extends Command {
    constructor(value, calculator) {
        super(value, calculator)
    }

    execute() {
        this.calculator.calculate()
    }
}
