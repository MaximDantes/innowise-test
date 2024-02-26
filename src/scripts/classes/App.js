import Calculator from './Calculator.js'
import keys from '../keys.js'
import handleKey from '../display.js'
import Theme from './Theme.js'

class App {
    constructor() {
        this.calculator = new Calculator()
        this.theme = new Theme()
    }

    executeCommand(command) {
        command.execute()
    }

    undo() {}

    renderUI() {
        //create and render buttons
        const calculator = document.querySelector('.calculator')
        const buttons = []

        keys.map((key) => {
            const button = document.createElement('button')
            button.innerHTML = key.view || key.key

            button.classList.add('button')
            button.addEventListener('click', () => {
                handleKey(key.key)
                button.blur()
            })

            if (key.key === '=') {
                button.classList.add('button_accent')
            }

            buttons.push({
                key,
                button,
            })
        })

        buttons.map((item) => {
            calculator.appendChild(item.button)
        })

        // trigger button click for key press
        document.addEventListener('keydown', (e) => {
            buttons.map((item) => {
                if (item.key.isEquivalent(e.key)) {
                    item.button.click()
                }
            })
        })
    }

    setTheme() {
        this.theme.createTheme()
    }
}

export default App
