import Command from './Commands.js'

class MemoryClearCommand extends Command {
    constructor(operationName, calculator, value) {
        super(operationName, calculator, value)
    }

    execute() {
        this.calculator.memory = ''
        this.calculator.callMemoryObservers()
    }
}

export default MemoryClearCommand
