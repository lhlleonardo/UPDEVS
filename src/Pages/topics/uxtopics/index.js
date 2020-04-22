import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

export default function Uxtopics() {
    return <Container>
        <div>
            <strong>ÍNICIO AO UNIVERSO DE UX</strong>
            <span>UX é a sigla em inglês para User Experience que, em português, significa Experiência do Usuário.</span>
            <span>Ela se refere ao método de analisar e entender a forma como os usuários interagem com produtos.</span>
            <span>Vem com a gente para saber mais sobre o universo UX.</span>
            <Link to="/uxbegin">
                    <button>ACESSAR</button>
            </Link>
        </div>
        <div>
            <strong>CONCEITOS</strong>
            <span>Por que melhorar a experiência do usuário?</span>
            <span>Qual a Importância de Conhecer e Aplicar UX?</span>
            <span>Vem com a gente para saber mais sobre o universo UX.</span>
            <Link to="/uxcontent">
                    <button>ACESSAR</button>
            </Link>
        </div>
        <div>
            <strong>UX PARA DESENVOLVEDORES</strong>
            <span>Quer saber como o profissional de UX pode representar o usuário no processo de desenvolvimento?</span>
            <span>Vem com a gente para conhecer as técnicas e ferramentas utilizadas por um UX Developer.</span>
            <Link to="/uxdevlopers">
                    <button>ACESSAR</button>
            </Link>
        </div>
        <div>
            <strong>VÍDEOS</strong>
            <span>Quer conhecer UX na prática?</span>
            <span>Aqui você encontra os melhores vídeos e artigos da internet sobre o assunto.</span>
            <span>Vem com a gente para saber mais sobre a prática de UX na web.</span>
            <Link to="/uxvideos">
                    <button>ACESSAR</button>
            </Link>
        </div>
    </Container>;
}
