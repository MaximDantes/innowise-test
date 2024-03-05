import Command from './Commands.js'

class CalculateCommand extends Command {
    constructor(operationName, calculator, value) {
        super(operationName, calculator, value)
    }

    execute() {
        this.calculator.calculate()
    }
}

export default CalculateCommand
