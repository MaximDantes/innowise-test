const createTheme = () => {
    const themeCheckbox = document.querySelector('.theme-switch__checkbox')
    const body = document.querySelector('.body')

    //detect theme from local storage
    const storageTheme = localStorage.getItem('theme')
    if (storageTheme === 'dark') {
        body.classList.add('body_dark')
        themeCheckbox.checked = true
    }

    //if there is no theme in local storage, detect browser color scheme
    if (!storageTheme) {
        if (
            window.matchMedia &&
            window.matchMedia('(prefers-color-scheme: dark)').matches
        ) {
            body.classList.add('body_dark')
            themeCheckbox.checked = true
        }
    }

    //create change them button
    themeCheckbox.addEventListener('change', (e) => {
        if (e.currentTarget.checked) {
            body.classList.add('body_dark')
            localStorage.setItem('theme', 'dark')
        } else {
            body.classList.remove('body_dark')
            localStorage.setItem('theme', 'light')
        }
    })
}

export default createTheme
