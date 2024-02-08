import handleKey from './display.js'
import keys from './keys.js'
import createTheme from './theme.js'

//create and render buttons
const calculator = document.querySelector('.calculator')
const buttons = []

keys.map((key) => {
    const button = document.createElement('button')
    button.textContent = key.key

    button.classList.add('button')
    button.addEventListener('click', () => handleKey(key.key))

    if (key.key === '0') {
        button.classList.add('button_wide')
    }

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

createTheme()
