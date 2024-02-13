import createExpressionString from './create-expression-string.js'
import keys from './keys.js'

const displayElement = document.querySelector('.calculator__display')

const display = {
    value: [''],
    current: '',

    handleValueChange() {
        this.current = this.value[this.value.length - 1]

        //replace chars by html entities
        displayElement.innerHTML = this.current
            .split('')
            .map(
                (char) =>
                    keys.filter((key) => key.key === char)[0]?.view || char
            )
            .join('')
    },

    handleKey(key) {
        if (key === 'C') {
            //return to previous state
            this.value.pop()
            this.handleValueChange()
        } else {
            const newString = createExpressionString(this.current, key)

            if (newString !== undefined && newString !== this.current) {
                this.value.push(newString)
                this.handleValueChange()
            }
        }
    },
}

export default display.handleKey.bind(display)
