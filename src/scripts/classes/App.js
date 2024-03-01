import Calculator from './Calculator.js'
import Theme from './Theme.js'
import Operations from './Operations.js'

class App {
    constructor() {
        this.calculator = new Calculator()
        this.theme = new Theme()
        this.operations = new Operations(this.calculator)
    }

    renderDisplay() {
        const display = document.querySelector('.calculator__result')

        this.calculator.subscribe((summary) => {
            display.innerHTML = summary
                .split('')
                //replace chars for their view
                .map(
                    (char) =>
                        this.operations.values.filter((item) => item.command.operationName === char)[0]?.view || char
                )
                .join('')
        })

        this.calculator.subscribeMemory((isMemory) => {
            isMemory
                ? display.classList.add('calculator__display--memorized')
                : display.classList.remove('calculator__display--memorized')
        })
    }

    renderButtons() {
        this.operations.values.map((item) => {
            const button = document.createElement('button')
            button.innerHTML = item.buttonView

            button.classList.add('button')
            if (item.buttonView === '=') {
                button.classList.add('button--accent')
            }

            if (item.buttonView === '0') {
                button.classList.add('button--wide')
            }

            button.addEventListener('click', () => {
                item.command.execute()
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
