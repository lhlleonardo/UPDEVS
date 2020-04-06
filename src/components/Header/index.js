import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

import logo from '../../assets/mushrooms.svg';

export default function Header() {
    return (
        <Container>
            <div>
                <Link to="/">
                    <img src={logo} alt="Rocketshoes" />
                </Link>
                <div>
                    <strong>UP DEVS</strong>
                    <span>O MELHOR CONTEÚDO AQUI!</span>
                </div>
            </div>
            <aside>
                <Link to="/feedback">
                    <a>FEEDBACK</a>
                </Link>
                <Link to="/about">
                    <a>SOBRE</a>
                </Link>
                <Link to="/help">
                    <a>AJUDA</a>
                </Link>
            </aside>
        </Container>
    );
}
