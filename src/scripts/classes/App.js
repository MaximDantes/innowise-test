import Calculator from './Calculator.js'
import Theme from './Theme.js'
import Operations from './Operations.js'

class App {
    constructor() {
        this.calculator = new Calculator()
        this.theme = new Theme()
        this.operations = new Operations(this.calculator)
    }

    executeCommand(command) {
        command.execute()
    }

    undo() {}

    renderUI() {
        this.operations.values.map((item) => {
            const button = document.createElement('button')
            button.innerHTML = item.view

            button.classList.add('button')
            if (item.view === '=') {
                button.classList.add('button_accent')
            }

            button.addEventListener('click', () => {
                item.command.execute()
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
}

export default App
