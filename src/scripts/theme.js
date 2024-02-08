const createTheme = () => {
    const themeButton = document.querySelector('.theme-button')
    const main = document.querySelector('.main')

    //detect theme from local storage
    const storageTheme = localStorage.getItem('theme')
    if (storageTheme === 'dark') {
        main.classList.add('main_dark')
    }

    //if there is no theme in local storage, detect browser color scheme
    if (!storageTheme) {
        if (
            window.matchMedia &&
            window.matchMedia('(prefers-color-scheme: dark)').matches
        ) {
            main.classList.add('main_dark')
        }
    }

    //create change them button
    themeButton.addEventListener('click', () => {
        if (main.classList.contains('main_dark')) {
            main.classList.remove('main_dark')
            localStorage.setItem('theme', 'light')
        } else {
            main.classList.add('main_dark')
            localStorage.setItem('theme', 'dark')
        }
    })
}

export default createTheme
