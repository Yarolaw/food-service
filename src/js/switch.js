const bodyRef = document.querySelector("body")
const inputRef = document.querySelector("#theme-switch-toggle")

const checkTheme = () => {
    if (localStorage.getItem('theme') === 'dark-theme') {
        inputRef.checked = true;
        bodyRef.classList.add('dark-theme');
    } else {
        bodyRef.classList.add('light-theme');
    }
}
checkTheme();

const changeTheme = () => {
    if (inputRef.checked === false) {
        bodyRef.classList.remove("dark-theme")
        bodyRef.classList.add("light-theme")
        localStorage.setItem("theme", "light-theme")
        
    }
    else {
        bodyRef.classList.remove("light-theme")
        bodyRef.classList.add("dark-theme")
        localStorage.setItem("theme", "dark-theme")
        
    }
}
    






inputRef.addEventListener('change', changeTheme)
console.dir(inputRef)