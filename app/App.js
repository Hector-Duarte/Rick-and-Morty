import Pagination from "./components/characters/Pagination.js"
import SubHeader from "./components/SubHeader.js"
import DinamicContent from "./components/DinamicContent.js"
import Footer from "./components/Footer.js"
import Header from "./components/Header.js"
import Loader from "./components/Loader.js"
import Main from "./components/Main.js"
import Router from "./helpers/Router.js"
import Counter from "./components/Counter.js"

export default function App() {
    const $root = document.getElementById("root")
    localStorage.setItem("characters", true)
    $root.append(Header())
    $root.append(Main())
    $root.append(Footer())
    
    const $main = document.getElementById("main")
    $main.append(SubHeader())
    $main.append(Loader())
    $main.append(DinamicContent())
    $main.append(Pagination())
    $main.append(Counter())

    Router()
}