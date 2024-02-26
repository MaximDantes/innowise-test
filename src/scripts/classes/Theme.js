class Theme {
    constructor() {}

    createTheme() {
        const storageKey = 'SIMPLE_CALCULATOR/THEME'
        const themes = {
            light: 'LIGHT',
            dark: 'DARK',
        }
        const darkThemeClass = 'body--dark'

        const themeCheckbox = document.querySelector('.theme-switch__checkbox')
        const body = document.querySelector('.body')

        //detect theme from local storage
        const storageTheme = localStorage.getItem(storageKey)
        if (storageTheme === themes.dark) {
            body.classList.add(darkThemeClass)
            themeCheckbox.checked = true
        }

        //if there is no theme in local storage, detect browser color scheme
        if (!storageTheme) {
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                body.classList.add(darkThemeClass)
                themeCheckbox.checked = true
            }
        }

        //create change theme button
        themeCheckbox.addEventListener('change', (e) => {
            if (e.currentTarget.checked) {
                body.classList.add(darkThemeClass)
                localStorage.setItem(storageKey, themes.dark)
            } else {
                body.classList.remove(darkThemeClass)
                localStorage.setItem(storageKey, themes.light)
            }
        })
    }
}

export default Theme
