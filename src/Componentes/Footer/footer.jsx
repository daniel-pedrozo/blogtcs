import React, { useState } from "react";
import './footer.css';
import News from '../newsletter/news'


function Footer() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
        <div className="footer">

            <div className="sobre">
                <h1>Sobre</h1>
                <p>Bem-vindo ao Tired Clubs Security! Sua fonte confiável para dicas de cibersegurança em uma linguagem que todos podem entender.</p>
                <br/>
                <h2><strong>Email:</strong> tired.clubs.sec@gmail.com</h2>
            </div>
            <div className="link">
                <h1>Links rápidos</h1>
                <ul>
                    <li><a href="./">Inicio</a></li>
                    <li><a href="./blog">Blog</a></li>
                    <li><a href="./projeto">Projeto</a></li>
                    <li><a href="./fale-conosco">Fale Conosco</a></li>
                </ul>
            </div>

            <News/>

        </div>

    );
}

export default Footer;