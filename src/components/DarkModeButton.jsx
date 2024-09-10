import { GoMoon } from "react-icons/go";

const DarkModeButton = () => {
    
    return(
        <button className="z-30 text-2xl sm:pr-4 md:pt-4 transition-all duration-200 ease-in-out transform hover:scale-90" onClick={darkMode}>
            <GoMoon/>
        </button>
    )
}
export function darkMode (){

    if(isDark == false){
        KeepDarkMode()
    }
    else{
        document.querySelectorAll(".bg-zinc-900").forEach(e => {
            e.classList.remove("bg-zinc-900")
            e.classList.add("bg-fuchsia-950")
        })
        document.querySelectorAll(".BGtoBlack").forEach(e => {
            e.classList.remove("bg-zinc-800")
        })
        isDark = false
    }
}
export function KeepDarkMode(){

    document.querySelectorAll(".bg-fuchsia-950").forEach(e => {
        e.classList.remove("bg-fuchsia-950")
        e.classList.add("bg-zinc-900")
    })
    
    document.querySelectorAll(".BGtoBlack").forEach(e => {
        e.classList.add("bg-zinc-800")
    })
    isDark = true
}
export let isDark = false
export  default DarkModeButton;
