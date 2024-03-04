import Calculator from './Calculator.js'

//redirect all errorMessages to Calculator.handleError
const calculatorErrorHandler = {
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

export default calculatorErrorHandler
