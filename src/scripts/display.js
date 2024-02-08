import createExpressionString from './create-expression-string.js'

const displayElement = document.querySelector('.calculator__display')

const display = {
    value: [''],
    current: '',

    handleValueChange() {
        this.current = this.value[this.value.length - 1]
        displayElement.textContent = this.current
    },

    handleKey(key) {
        if (key === 'C') {
            this.value.pop()
            this.handleValueChange()
        } else {
            const newString = createExpressionString(this.current, key)

            if (newString !== undefined) {
                this.value.push(newString)
                this.handleValueChange()
            }
        }
    },
}

export default display.handleKey.bind(display)
