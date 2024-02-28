import { Link } from "react-router-dom";
import "./header.css";
import logo from './images/logo.png';
import User from "./User";



export default function Header() {

    window.addEventListener("scroll", function () {
        const header = this.document.querySelector(".header")
        header.classList.toggle("active", this.window.scrollY > 100)
    })


    return (
        <>
            <header className="header">
                <section className="scontainer flex">
                    <figure className="logo">
                        <img src={logo} alt="logo" width='50px' />
                    </figure>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/sobre">Sobre Nós</Link>
                            </li>
                            <li>
                                <Link to="/pagina">Páginas</Link>
                            </li>
                            <li>
                                <Link to="/blog">Blog</Link>
                            </li>
                            <li>
                                <Link to="/contato">Contato</Link>
                            </li>
                        </ul>
                    </nav>
                    <section className="account flexCenter">
                        <User />
                    </section>
                </section>
            </header>
        </>

    )
}