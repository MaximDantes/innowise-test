import keys from './keys.js'
import calculateString from './calculate-string.js'

const createExpressionString = (oldString, newString) => {
    try {
        if (oldString === undefined) {
            oldString = ''
        }

        if (
            oldString.includes('Error') ||
            oldString.includes('Infinity') ||
            oldString.includes('Number is too big')
        ) {
            oldString = ''
        }

        //if new string is not in the keys list, return undefined
        if (!keys.filter((item) => item.isEquivalent(newString))) return

        //find original key for equivalent
        newString = keys.filter((item) => item.isEquivalent(newString))[0].key

        let result = oldString

        const numbersOnlyRegex = /^\d+$/
        const lastChar = oldString.charAt(oldString.length - 1)
        const preLastChar = oldString.charAt(oldString.length - 2)
        const mathSigns = ['+', '-', '*', '/']
        const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

        switch (newString) {
            case '=':
                result = calculateString(oldString)
                break

            case '%': {
                if (!digits.includes(lastChar)) break

                result += newString
                break
            }

            case '+':
            case '-':
            case '*':
            case '/': {
                if (oldString.length === 1 && lastChar === '-') {
                    break
                }

                if (!lastChar) {
                    if (newString === '-') {
                        result += newString
                    }
                    break
                }

                if (lastChar === '.') {
                    result =
                        oldString.slice(0, oldString.length - 1) + newString
                    break
                }

                if (
                    mathSigns.includes(preLastChar) &&
                    mathSigns.includes(lastChar)
                ) {
                    result = oldString
                    break
                }

                if (!mathSigns.includes(lastChar)) {
                    result += newString
                    break
                }

                if (newString !== '-') {
                    result =
                        oldString.slice(0, oldString.length - 1) + newString
                    break
                }

                if (oldString.length === 1) break

                result += newString

                break
            }

            case 'AC':
                result = ''
                break

            case '.': {
                //if old string is empty, insert zero before dot
                if (!oldString) {
                    result = '0.'
                    break
                }

                //prevent setting dot if previous char is not number
                if (
                    !oldString
                        .charAt(oldString.length - 1)
                        ?.match(numbersOnlyRegex)
                ) {
                    break
                }

                //prevent setting dot after fractional part of number
                const sections = oldString.split('.')
                if (sections.length > 1) {
                    //numbers only regex
                    if (sections[sections.length - 1].match(numbersOnlyRegex)) {
                        break
                    }
                }

                result += '.'
                break
            }

            case '+-': {
                if (!oldString.length) {
                    result = '-'
                    break
                }

                if (oldString.length === 1 && oldString.charAt(0) === '-') {
                    result = ''
                    break
                }

                let lastMathSignIndex = -1

                for (let i = oldString.length - 1; i--; i >= 0) {
                    if (mathSigns.includes(oldString[i])) {
                        lastMathSignIndex = i
                        break
                    }
                }

                const lastDigit = oldString.slice(
                    lastMathSignIndex + 1,
                    oldString.length
                )

                const lastMathSign = oldString[lastMathSignIndex]

                if (lastMathSignIndex === -1) {
                    result = '-' + oldString
                    break
                }

                if (lastMathSignIndex === 0) {
                    if (lastMathSign === '-') {
                        result = lastDigit
                        break
                    }
                    result = '-' + lastDigit
                    break
                }

                if (mathSigns.includes(oldString[lastMathSignIndex - 1])) {
                    if (lastMathSign === '-') {
                        result =
                            oldString.slice(0, lastMathSignIndex) + lastDigit
                        break
                    }
                }

                if (lastMathSign === '-') {
                    if (oldString[lastMathSignIndex - 1] === '-') {
                        result =
                            oldString.slice(0, lastMathSignIndex - 1) +
                            '+' +
                            lastDigit
                        break
                    }

                    result =
                        oldString.slice(0, lastMathSignIndex) + '+' + lastDigit
                    break
                }

                result = oldString.slice(0, lastMathSignIndex) + '-' + lastDigit

                break
            }

            default:
                if (lastChar === '%') break

                result += newString
                break
        }

        return result
    } catch (e) {
        return e.message
    }
}

export default createExpressionString
