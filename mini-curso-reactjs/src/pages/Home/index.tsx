import React from "react";
import { FiLogIn } from 'react-icons/fi';
import logo from '../../assets/logo.svg';

import './styles.css';

const Home: React.FC = () => {
    return (
        <div>
            <div id="page-home">
                <div className="content">
                    <header>
                        <img src={logo} alt="Reciclagem" />
                    </header>
                </div>

                <main>
                    <h1>Coleta seletiva a recilagem em geral </h1>
                    <p>Reciclagem de materiais diversos, tais como,
                        papel, plastico etc.....
                    </p>

                    <a href="/create-location">
                        <span>
                            <FiLogIn />
                        </span>
                        <strong>Cadastrar novo local de coleta</strong>
                    </a>
                </main>
            </div>
        </div>
    )
}

export default Home;