import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

export default function Webtopics() {
    return <Container>
        <div>
            <strong>HTML</strong>
            <span>HTML é a linguagem de marcação padrão para páginas da Web. Com HTML, você pode criar seu próprio site. Comece já!</span>
            <Link to="/html">
                    <button>ACESSAR</button>
            </Link>
        </div>
        <div>
            <strong>CSS</strong>
            <span>CSS é uma linguagem que descreve o estilo de um documento HTML. CSS descreve como os elementos HTML devem ser exibidos. Aprenda agora mesmo!</span>
            <Link to="/css">
                    <button>ACESSAR</button>
            </Link>
        </div>
        <div>
            <strong>JAVASCIPT</strong>
            <span>JavaScript é a linguagem de programação do HTML e da Web. JavaScript é fácil de aprender. Então comece agora mesmo!</span>
            <Link to="/javascript">
                    <button>ACESSAR</button>
            </Link>
        </div>
    </Container>;
}
