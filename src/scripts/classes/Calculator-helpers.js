import Calculator from './Calculator.js'

export class CalculatorSnapshot {
    constructor(calculator) {
        this.leftOperand = calculator.leftOperand
        this.rightOperand = calculator.rightOperand
        this.operator = calculator.operator
        this.summary = calculator.summary
    }
}

export class CalculatorCaretaker {
    constructor(calculator) {
        this.history = []
        this.calculator = calculator
    }

    save(snapshot) {
        const prevSnapshot = this.history[this.history.length - 1]

        if (
            prevSnapshot &&
            prevSnapshot.leftOperand === snapshot.leftOperand &&
            prevSnapshot.rightOperand === snapshot.rightOperand &&
            prevSnapshot.operator === snapshot.operator &&
            prevSnapshot.summary === snapshot.summary
        )
            return

        this.history.push(snapshot)
    }

    restore() {
        const snapshot = this.history.pop()

        if (snapshot) {
            this.calculator.leftOperand = snapshot.leftOperand
            this.calculator.rightOperand = snapshot.rightOperand
            this.calculator.operator = snapshot.operator
            this.calculator.summary = snapshot.summary
            this.calculator.callObservers()
        }
    }
}

//redirect all errorMessages to Calculator.handleError
export const calculatorErrorHandler = {
    get(target, prop) {
        // eslint-disable-next-line no-prototype-builtins
        return !Calculator.prototype.hasOwnProperty(prop)
            ? target[prop]
            : function (...args) {
                  try {
                      target[prop].apply(this, args)
                  } catch (e) {
                      target.handleError(e)
                  }
              }
    },
}
