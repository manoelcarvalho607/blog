/* eslint-disable react/display-name */
/* eslint-disable no-undef */
import { Link } from "react-router-dom";
import { nav } from "../../data/data";
import "./header.css";
import logo from './images/logo.png';


export default Header = () => {
    return (
        <>
            <header>
                <section className="scontainer flex">
                    <figure className="logo">
                        <img src={logo} alt="logo" width='100px' />
                    </figure>
                    <nav>
                        <ul>
                            {nav.map((link) => {
                                <li key={link.id}>
                                    <Link to={link.url}>{link.text}</Link>
                                </li>
                            })}
                        </ul>
                    </nav>
                </section>
            </header>
        </>

    )
}