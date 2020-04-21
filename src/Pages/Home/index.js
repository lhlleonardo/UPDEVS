import React from 'react';
import { Link } from 'react-router-dom';

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
                <p>As melhores tecnologias em programação, direto ao ponto!</p>
                <p>Você pode começar do absoluto zero. </p>
                <p>Torne-se um Desenvolvedor Web completo! Aprenda as principais tecnologias do desenvolvimento Web.</p>
                <p>Domine o HTML5, CSS3 e o Javascript.</p>
                <p>Começe já!</p>
                <Link to="/webtopics">
                    <button>ACESSAR</button>
                </Link>
            </div>
            <img src={web} />
        </Web>
        <Ux>
            <img src={ux} />
            <div>
                <h1>EXPERIÊNCIA DO USUÁRIO</h1>
                <p>Especialize-se em usabilidade e experiência do usuário.</p>
                <p>Mergulhe na profissão mais promissora da atualidade.</p>
                <p>Foco total na prática profissional e no mercado de trabalho</p>
                <p>Você aprenderá a criar interfaces, atender necessidades dos clientes e utilizar as principais ferramentas de UX Design.</p>
                <p>Começe já!</p>
                <Link to="/uxtopics">
                    <button>ACESSAR</button>
                </Link>
            </div>
        </Ux>
        <Access>
            <div>
                <h1>Acessibilidade na Web</h1>
                <p>Introdução a designs inclusivos.</p>
                <p>Tecnologia para todos. Muito mais inclusão.</p>
                <p>Acreditamos que a tecnologia pode fazer a diferença na vida das pessoas, entenda porque pensar em acessibilidade.</p> 
                <p>Deixe sua interface inclusiva para todos, PCDs ou não.</p>
                <p>Comece agora mesmo!</p>
                <Link to="/accesstopics">
                    <button>ACESSAR</button>
                </Link>
            </div>
            <img src={accessibility} />
        </Access>
        <Libs>
            <img src={book} />
            <div>
                <h1>REFERÊNCIAS BIBLIOGRÁFICAS</h1>
                <p>Confira nossas fontes de pesquisa!</p>
                <p>Além de valorizar o embasamento científico de um trabalho, a padronização das referências facilita pesquisas posteriores.</p>
                <p>O objetivo é auxiliar em estudos mais aprofundados.</p>
                <p>Confira agora mesmo as melhores fontes de pesquisa.</p>
                <p>Acesse agora mesmo!</p>
                <Link to="/libtopics">
                    <button>ACESSAR</button>
                </Link>
            </div>
        </Libs>
    </Container>;
}
