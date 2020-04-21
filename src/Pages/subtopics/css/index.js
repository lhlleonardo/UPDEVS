import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

import data from '../../../assets/data.svg';
import check from '../../../assets/check.svg';
import thumb from '../../../assets/thumb.svg';

export default function Css() {
    return <Container>
        <strong>PRIMEIRA ETAPA</strong>
        <div>
            <div>
                <h1>O MELHOR CONTEÚDO</h1>
                <img src={check} alt="Rigth"/>
                <Link to="/cssbestcontent">
                        <button>ACESSAR</button>
                </Link>
            </div>
            <div>
                <h1>BOAS PRATICAS</h1>
                <img src={thumb} alt="Good"/>
                <Link to="/cssgoodcontent">
                        <button>ACESSAR</button>
                </Link>
            </div>
        </div>
        <strong>SEGUNDA ETAPA</strong>
        <div>
            <div>
                <h1>MELHORES EXEMPLOS</h1>
                <img src={data} alt="Examples"/>
                <Link to="/cssstudy">
                        <button>ACESSAR</button>
                </Link>
            </div>
        </div>
    </Container>;
}
