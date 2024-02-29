class Command {
    constructor(operationName, calculator, value) {
        this.calculator = calculator
        this.operationName = operationName
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
    constructor(operationName, calculator, value) {
        super(operationName, calculator, value)
    }

    execute() {
        this.calculator.addOperator(this.operationName)
    }
}

export class AddOperandCommand extends Command {
    constructor(operationName, calculator, value) {
        super(operationName, calculator, value)
    }

    execute() {
        this.calculator.addOperand(this.operationName)
    }
}

export class ClearCommand extends Command {
    constructor(operationName, calculator, value) {
        super(operationName, calculator, value)
    }

    execute() {
        this.calculator.clear()
    }
}

export class HistoryBackCommand extends Command {
    constructor(operationName, calculator, value) {
        super(operationName, calculator, value)
    }

    execute() {
        this.calculator.restore()
    }
}

export class CalculateCommand extends Command {
    constructor(operationName, calculator, value) {
        super(operationName, calculator, value)
    }

    execute() {
        this.calculator.calculate()
    }
}

export class ChangeSignCommand extends Command {
    constructor(operationName, calculator, value) {
        super(operationName, calculator, value)
    }

    execute() {
        this.calculator.changeSign()
    }
}

export class PowCommand extends Command {
    constructor(operationName, calculator, value) {
        super(operationName, calculator, value)
    }

    execute() {
        this.calculator.pow(this.value)
    }
}

export class OneDivX extends Command {
    constructor(operationName, calculator, value) {
        super(operationName, calculator, value)
    }

    execute() {
        this.calculator.oneDivX()
    }
}

export class TenToXPow extends Command {
    constructor(operationName, calculator, value) {
        super(operationName, calculator, value)
    }

    execute() {
        this.calculator.tenToXPow()
    }
}

export class RootCommand extends Command {
    constructor(operationName, calculator, value) {
        super(operationName, calculator, value)
    }

    execute() {
        this.calculator.root(this.value)
    }
}

export class DotCommand extends Command {
    constructor(operationName, calculator, value) {
        super(operationName, calculator, value)
    }

    execute() {
        this.calculator.dot()
    }
}

export class MemorySaveCommand extends Command {
    constructor(operationName, calculator, value) {
        super(operationName, calculator, value)
    }

    execute() {
        this.calculator.memorySave()
    }
}

export class MemoryClearCommand extends Command {
    constructor(operationName, calculator, value) {
        super(operationName, calculator, value)
    }

    execute() {
        this.calculator.memoryClear()
    }
}
