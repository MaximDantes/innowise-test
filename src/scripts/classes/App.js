import Calculator from './Calculator.js'
import Theme from './Theme.js'
import Operations from './Operations.js'
import keys from '../keys.js'

class App {
    constructor() {
        this.calculator = new Calculator()
        this.theme = new Theme()
        this.operations = new Operations(this.calculator)
    }

    executeCommand(command) {
        command.execute()
    }

    renderDisplay() {
        const display = document.querySelector('.calculator__display')

        this.calculator.subscribe((summary) => {
            display.innerHTML = summary
                .split('')
                //replace chars for their view
                .map((char) => keys.filter((key) => key.key === char)[0]?.view || char)
                .join('')
        })
    }

    renderButtons() {
        this.operations.values.map((item) => {
            const button = document.createElement('button')
            button.innerHTML = item.view

            button.classList.add('button')
            if (item.view === '=') {
                button.classList.add('button_accent')
            }

            button.addEventListener('click', () => {
                this.executeCommand(item.command)
                button.blur()
            })

            document.addEventListener('keydown', (e) => {
                if (item.isEquivalent(e.key)) {
                    button.click()
                }
            })

            const calculator = document.querySelector('.calculator')
            calculator.appendChild(button)
        })
    }

    setTheme() {
        this.theme.createTheme()
    }

    render() {
        this.renderButtons()
        this.renderDisplay()
        this.setTheme()
    }
}

export default App
