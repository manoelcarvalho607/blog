import { Link } from "react-router-dom";
import "./header.css";
import logo from './images/logo.png';



export default function Header() {



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
                </section>
            </header>
        </>

    )
}