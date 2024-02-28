import Calculator from '../src/scripts/classes/Calculator.js'
import { operationsNames } from '../src/scripts/classes/Operations.js'
import {
    AddOperandCommand,
    AddOperatorCommand,
    CalculateCommand,
    ChangeSignCommand,
    ClearCommand,
    HistoryBackCommand,
    OneDivX,
    PowCommand, RootCommand,
    TenToXPow,
} from '../src/scripts/classes/Commands.js'

const calculator = new Calculator()

export const commands = {
    [operationsNames.one]: new AddOperandCommand(operationsNames.one, calculator),
    [operationsNames.two]: new AddOperandCommand(operationsNames.two, calculator),
    [operationsNames.three]: new AddOperandCommand(operationsNames.three, calculator),
    [operationsNames.four]: new AddOperandCommand(operationsNames.four, calculator),
    [operationsNames.five]: new AddOperandCommand(operationsNames.five, calculator),
    [operationsNames.six]: new AddOperandCommand(operationsNames.six, calculator),
    [operationsNames.seven]: new AddOperandCommand(operationsNames.seven, calculator),
    [operationsNames.eight]: new AddOperandCommand(operationsNames.eight, calculator),
    [operationsNames.nine]: new AddOperandCommand(operationsNames.nine, calculator),
    [operationsNames.zero]: new AddOperandCommand(operationsNames.zero, calculator),
    [operationsNames.dot]: new AddOperandCommand(operationsNames.dot, calculator),
    [operationsNames.plus]: new AddOperatorCommand(operationsNames.plus, calculator),
    [operationsNames.minus]: new AddOperatorCommand(operationsNames.minus, calculator),
    [operationsNames.div]: new AddOperatorCommand(operationsNames.div, calculator),
    [operationsNames.mul]: new AddOperatorCommand(operationsNames.mul, calculator),
    [operationsNames.equal]: new CalculateCommand(operationsNames.equal, calculator),
    [operationsNames.factorial]: new AddOperatorCommand(operationsNames.factorial, calculator),
    [operationsNames.pow]: new AddOperatorCommand(operationsNames.pow, calculator),
    [operationsNames.changeSign]: new ChangeSignCommand(operationsNames.changeSign, calculator),
    [operationsNames.tenPowX]: new TenToXPow(operationsNames.tenPowX, calculator),
    [operationsNames.oneDivX]: new OneDivX(operationsNames.oneDivX, calculator),
    [operationsNames.square]: new PowCommand(operationsNames.pow, calculator, 2),
    [operationsNames.cube]: new PowCommand(operationsNames.pow, calculator, 3),
    [operationsNames.root]: new RootCommand(operationsNames.root, calculator),
    [operationsNames.squareRoot]: new RootCommand(operationsNames.root, calculator, 2),
    [operationsNames.cubeRoot]: new RootCommand(operationsNames.root, calculator, 3),
    [operationsNames.percent]: new AddOperatorCommand(operationsNames.percent, calculator),
    [operationsNames.clear]: new ClearCommand(operationsNames.clear, calculator),
    [operationsNames.historyBack]: new HistoryBackCommand(operationsNames.historyBack, calculator),
}

export let result = ''

const getSummary = (summary) => {
    result = summary
}

calculator.subscribe(getSummary)
