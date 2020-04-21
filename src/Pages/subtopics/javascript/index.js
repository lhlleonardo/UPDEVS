import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

import check from '../../../assets/check.svg';
import audiobook from '../../../assets/audiobook.svg';
import thumb from '../../../assets/thumb.svg';

export default function Javascript() {
    return <Container>
        <strong>PRIMEIRA ETAPA</strong>
        <div>
            <div>
                <h1>O MELHOR CONTEÚDO</h1>
                <img src={check} alt="Rigth"/>
                <Link to="/javabestcontent">
                        <button>ACESSAR</button>
                </Link>
            </div>
            <div>
                <h1>BOAS PRATICAS</h1>
                <img src={thumb} alt="Good"/>
                <Link to="/javagoodcontent">
                        <button>ACESSAR</button>
                </Link>
            </div>
        </div>
        <strong>SEGUNDA ETAPA</strong>
        <div>
            <div>
                <h1>OS MELHORES EXEMPLOS</h1>
                <img src={audiobook} alt="Study"/>
                <Link to="/javastudy">
                        <button>ACESSAR</button>
                </Link>
            </div>
        </div>
    </Container>
}
