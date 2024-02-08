import keys from './keys'
import calculation from './calculation'

const displayElement = document.querySelector('.calculator__display')

const display = {
    _value: '',

    get value() {
        return String(this._value)
    },

    set value(value) {
        this._value = value
        displayElement.textContent = String(this.value)
    },

    handleKey(key) {
        if (keys.filter((item) => item.isEquivalent(key))) {
            switch (key) {
                case '=':
                    this.value = calculation.calculateString(this.value)
                    break

                case '+-':
                    this.value = calculation.changeSign(this.value)
                    break

                case 'AC':
                    this.value = ''
                    break

                case 'C':
                    this.value = this.value.slice(0, this.value.length - 1)
                    break

                default:
                    this.value += key
                    break
            }
        }
    },
}

export default display.handleKey.bind(display)
