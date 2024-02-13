//fractional part after section of ${fractionalAccuracy} zeros will be discarded
export const round = (num, fractionalAccuracy = 6) => {
    const zeroSection = new Array(fractionalAccuracy).fill('0').join('')

    const split = String(num).split('.')

    if (split.length === 1) {
        return num
    }

    const newFractional = split[1].split(zeroSection)[0]

    return +`${split[0]}.${newFractional}`
}

function calculateString(str) {
    str = str.replaceAll('%', '*0.01')
    str = str.replaceAll('--', '+')
    if (['-', '+', '/', '*'].includes(str.charAt(str.length - 1))) {
        str = str.slice(0, str.length - 1)
    }
    if (str.charAt(0) === '-') {
        str = '0' + str
    }
    const result = evaluate(str)
    return String(round(result, 6))
}

export default calculateString

const TokenTypes = {
    NUMBER: 'NUMBER',
    IDENTIFIER: 'IDENTIFIER',
    ADDITION: '+',
    SUBTRACTION: '-',
    MULTIPLICATION: '*',
    DIVISION: '/',
}

const TokenSpec = [
    [/^\s+/, null],
    [/^(?:\d+(?:\.\d*)?|\.\d+)/, TokenTypes.NUMBER],
    [/^[a-z]+/, TokenTypes.IDENTIFIER],
    [/^\+/, TokenTypes.ADDITION],
    [/^-/, TokenTypes.SUBTRACTION],
    [/^\*/, TokenTypes.MULTIPLICATION],
    [/^\//, TokenTypes.DIVISION],
]

class Tokenizer {
    constructor(input) {
        this.input = input
        this.cursor = 0
    }

    hasMoreTokens() {
        return this.cursor < this.input.length
    }

    match(regex, inputSlice) {
        const matched = regex.exec(inputSlice)
        if (matched === null) {
            return null
        }

        this.cursor += matched[0].length
        return matched[0]
    }

    getNextToken() {
        if (!this.hasMoreTokens()) {
            return null
        }

        const inputSlice = this.input.slice(this.cursor)

        for (let [regex, type] of TokenSpec) {
            const tokenValue = this.match(regex, inputSlice)

            if (tokenValue === null) {
                continue
            }

            if (type === null) {
                return this.getNextToken()
            }

            return {
                type,
                value: tokenValue,
            }
        }

        throw new SyntaxError(`Unexpected token: "${inputSlice[0]}"`)
    }
}

const operators = {
    '*': {
        prec: 3,
        assoc: 'left',
    },
    '/': {
        prec: 3,
        assoc: 'left',
    },
    '+': {
        prec: 2,
        assoc: 'left',
    },
    '-': {
        prec: 2,
        assoc: 'left',
    },
}

const assert = (predicate) => {
    if (predicate) return
    throw new Error('Assertion failed due to invalid token')
}

const evaluate = (input) => {
    const opSymbols = Object.keys(operators)
    const stack = []
    let output = []

    const peek = () => {
        return stack.at(-1)
    }

    const addToOutput = (token) => {
        output.push(token)
    }

    const handlePop = () => {
        const op = stack.pop()

        const right = parseFloat(output.pop())
        const left = parseFloat(output.pop())

        switch (op) {
            case '+':
                return left + right
            case '-':
                return left - right
            case '*':
                return left * right
            case '/':
                return left / right
            default:
                throw new Error(`Invalid operation: ${op}`)
        }
    }

    const handleToken = (token) => {
        switch (true) {
            case !isNaN(parseFloat(token)):
                addToOutput(token)
                break
            case opSymbols.includes(token): {
                const o1 = token
                let o2 = peek()

                while (
                    o2 !== undefined &&
                    (operators[o2].prec > operators[o1].prec ||
                        (operators[o2].prec === operators[o1].prec &&
                            operators[o1].assoc === 'left'))
                ) {
                    addToOutput(handlePop())
                    o2 = peek()
                }
                stack.push(o1)
                break
            }

            default:
                throw new Error(`Number is too big`)
        }
    }

    const tokenizer = new Tokenizer(input)
    let token
    while ((token = tokenizer.getNextToken())) {
        handleToken(token.value)
    }

    while (stack.length !== 0) {
        assert(true)
        addToOutput(handlePop())
    }

    return output[0]
}
