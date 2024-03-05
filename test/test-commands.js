import Calculator from '../src/scripts/classes/Calculator/Calculator.js'

import CalculateCommand from '../src/scripts/classes/Commands/CalculateCommand.js'
import AddOperatorCommand from '../src/scripts/classes/Commands/AddOperatorCommand.js'
import AddOperandCommand from '../src/scripts/classes/Commands/AddOperandCommand.js'
import ClearCommand from '../src/scripts/classes/Commands/ClearCommand.js'
import HistoryBackCommand from '../src/scripts/classes/Commands/HistoryBackCommand.js'
import ChangeSignCommand from '../src/scripts/classes/Commands/ChangeSignCommand.js'
import PowCommand from '../src/scripts/classes/Commands/PowCommand.js'
import OneDivXCommand from '../src/scripts/classes/Commands/OneDivXCommand.js'
import TenToXPowCommand from '../src/scripts/classes/Commands/TenToXPowCommand.js'
import RootCommand from '../src/scripts/classes/Commands/RootCommand.js'
import DotCommand from '../src/scripts/classes/Commands/DotCommand.js'
import MemorySaveCommand from '../src/scripts/classes/Commands/MemorySaveCommand.js'
import MemoryClearCommand from '../src/scripts/classes/Commands/MemoryClearCommand.js'
import MemoryReadCommand from '../src/scripts/classes/Commands/MemoryReadCommand.js'
import MemoryPlusMinusCommand from '../src/scripts/classes/Commands/MemoryPlusMinusComand.js'

import { numbersNames, operationsNames } from '../src/scripts/classes/Operations.js'

export const calculator = new Calculator()

export const testCommands = {
    [numbersNames.one]: new AddOperandCommand(numbersNames.one, calculator),
    [numbersNames.two]: new AddOperandCommand(numbersNames.two, calculator),
    [numbersNames.three]: new AddOperandCommand(numbersNames.three, calculator),
    [numbersNames.four]: new AddOperandCommand(numbersNames.four, calculator),
    [numbersNames.five]: new AddOperandCommand(numbersNames.five, calculator),
    [numbersNames.six]: new AddOperandCommand(numbersNames.six, calculator),
    [numbersNames.seven]: new AddOperandCommand(numbersNames.seven, calculator),
    [numbersNames.eight]: new AddOperandCommand(numbersNames.eight, calculator),
    [numbersNames.nine]: new AddOperandCommand(numbersNames.nine, calculator),
    [numbersNames.zero]: new AddOperandCommand(numbersNames.zero, calculator),
    [operationsNames.dot]: new DotCommand(operationsNames.dot, calculator),
    [operationsNames.plus]: new AddOperatorCommand(operationsNames.plus, calculator),
    [operationsNames.minus]: new AddOperatorCommand(operationsNames.minus, calculator),
    [operationsNames.div]: new AddOperatorCommand(operationsNames.div, calculator),
    [operationsNames.mul]: new AddOperatorCommand(operationsNames.mul, calculator),
    [operationsNames.equal]: new CalculateCommand(operationsNames.equal, calculator),
    [operationsNames.factorial]: new AddOperatorCommand(operationsNames.factorial, calculator),
    [operationsNames.pow]: new AddOperatorCommand(operationsNames.pow, calculator),
    [operationsNames.changeSign]: new ChangeSignCommand(operationsNames.changeSign, calculator),
    [operationsNames.tenPowX]: new TenToXPowCommand(operationsNames.tenPowX, calculator),
    [operationsNames.oneDivX]: new OneDivXCommand(operationsNames.oneDivX, calculator),
    [operationsNames.square]: new PowCommand(operationsNames.pow, calculator, 2),
    [operationsNames.cube]: new PowCommand(operationsNames.pow, calculator, 3),
    [operationsNames.root]: new RootCommand(operationsNames.root, calculator),
    [operationsNames.squareRoot]: new RootCommand(operationsNames.root, calculator, 2),
    [operationsNames.cubeRoot]: new RootCommand(operationsNames.root, calculator, 3),
    [operationsNames.percent]: new AddOperatorCommand(operationsNames.percent, calculator),
    [operationsNames.clear]: new ClearCommand(operationsNames.clear, calculator),
    [operationsNames.historyBack]: new HistoryBackCommand(operationsNames.historyBack, calculator),

    [operationsNames.memorySave]: new MemorySaveCommand(operationsNames.memorySave, calculator),
    [operationsNames.memoryClear]: new MemoryClearCommand(operationsNames.memoryClear, calculator),
    [operationsNames.memoryRead]: new MemoryReadCommand(operationsNames.memoryRead, calculator),
    [operationsNames.memoryMinus]: new MemoryPlusMinusCommand(
        operationsNames.memoryPlusMinus,
        calculator,
        operationsNames.minus
    ),
    [operationsNames.memoryPlus]: new MemoryPlusMinusCommand(
        operationsNames.memoryPlusMinus,
        calculator,
        operationsNames.plus
    ),
}

export let testResult = ''

const getTestSummary = (summary) => {
    testResult = summary
}

calculator.subscribe(getTestSummary)
