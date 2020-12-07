const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const bodyRef = document.querySelector("body")
const inputRef = document.querySelector("#theme-switch-toggle")

const checkTheme = () => {
    if (localStorage.getItem('theme') === Theme.DARK) {
        inputRef.checked = true;
        bodyRef.classList.add(Theme.DARK);
    } else {
        bodyRef.classList.add(Theme.LIGHT);
    }
}
checkTheme();

const changeTheme = () => {
    if (!inputRef.checked) {
        bodyRef.classList.remove(Theme.DARK)
        bodyRef.classList.add(Theme.LIGHT)
        localStorage.setItem("theme", Theme.LIGHT)
        
    }
    if (inputRef.checked) {
        bodyRef.classList.remove(Theme.LIGHT)
        bodyRef.classList.add(Theme.DARK)
        localStorage.setItem("theme", Theme.DARK)
        
    }
}
    






inputRef.addEventListener('change', changeTheme)
console.dir(inputRef)