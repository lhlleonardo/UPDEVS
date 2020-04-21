import React from 'react';

import { Container } from './styles';
import search from '../../../assets/search.svg';

export default function Libtopics() {
    return <Container>
        <img src={search}/>
        <h1>AINDA ESTAMOS BUSCANDO O MELHOR CONTEÚDO PARA VOCÊ!</h1>
        <h2>OBRIGADO POR ACESSAR NOSSO CONTEÚDO!</h2>
    </Container>;
}
