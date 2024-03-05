import Command from './Commands.js'

export class HistoryBackCommand extends Command {
    constructor(operationName, calculator, value) {
        super(operationName, calculator, value)
    }

    execute() {
        this.calculator.caretaker.restore()
    }
}

export default HistoryBackCommand
