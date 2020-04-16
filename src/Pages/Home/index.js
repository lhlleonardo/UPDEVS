import React from 'react';

import { Container, Web, Ux, Access, Libs } from './styles';

import web from '../../assets/coding.svg';
import ux from '../../assets/experience.svg';
import accessibility from '../../assets/accessibility.svg';
import book from '../../assets/book.svg';

export default function Home() {
    return <Container>
        <Web>
            <div>
                <h1>DESENVOLVIMENTO WEB</h1>
                <span>As melhores tecnologias em programação, direto ao ponto!</span>
                <p>Você pode começar do absoluto zero. Torne-se um Desenvolvedor Web completo! Aprenda as principais tecnologias do desenvolvimento Web. Domine o HTML5, CSS3 e o Javascript. Começe já!</p>
                <button>ACESSAR</button>
            </div>
            <img src={web} />
        </Web>
        <Ux>
            <div>
                <h1></h1>
                <p></p>
                <button>ACESSAR</button>
            </div>
            <img src={ux} />
        </Ux>
        <Access>
            <div>
                <h1></h1>
                <p></p>
                <button>ACESSAR</button>
            </div>
            <img src={accessibility} />
        </Access>
        <Libs>
            <div>
                <h1></h1>
                <p></p>
                <button>ACESSAR</button>
            </div>
            <img src={book} />
        </Libs>
    </Container>;
}
