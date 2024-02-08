import keys from './keys.js'
import calculateString from './calculate-string.js'

const numbersOnlyRegex = /^\d+$/

const createExpressionString = (oldString, newString) => {
    //if new string is not in the keys list, return undefined
    if (!keys.filter((item) => item.isEquivalent(newString))) return

    //find original key for equivalent
    newString = keys.filter((item) => item.isEquivalent(newString))[0].key

    let result = oldString

    switch (newString) {
        case '=':
            result = calculateString(oldString)
            break

        case '+-':
            break

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
                !oldString.charAt(oldString.length - 1)?.match(numbersOnlyRegex)
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

        default:
            result += newString
            break
    }

    return result
}

export default createExpressionString
