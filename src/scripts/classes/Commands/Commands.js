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

export default Command
