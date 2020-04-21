import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

import check from '../../../assets/check.svg';
import newspaper from '../../../assets/newspaper.svg';
import audiobook from '../../../assets/audiobook.svg';
import thumb from '../../../assets/thumb.svg';

export default function Html() {
    return <Container>
        <strong>PRIMEIRA ETAPA</strong>
        <div>
            <div>
                <h1>O MELHOR CONTEÚDO</h1>
                <img src={check} alt="Rigth"/>
                <Link to="/htmlbestcontent">
                        <button>ACESSAR</button>
                </Link>
            </div>
            <div>
                <h1>BOAS PRATICAS</h1>
                <img src={thumb} alt="Good"/>
                <Link to="/htmlgoodcontent">
                        <button>ACESSAR</button>
                </Link>
            </div>
        </div>
        <strong>SEGUNDA ETAPA</strong>
        <div>
            <div>
                <h1>ACOMPANHE AS NOVIDADES DE HTML DIRETO DA FONTE</h1>
                <img src={newspaper} alt="News"/>
                <button><a href="https://www.w3.org/standards/webdesign/htmlcss">ACESSAR</a></button>
            </div>
            <div>
                <h1>MELHORES PLATAFORMAS DE CURSOS ONLINE</h1>
                <img src={audiobook} alt="Study"/>
                <Link to="/htmlstudy">
                        <button>ACESSAR</button>
                </Link>
            </div>
        </div>
    </Container>;
}
