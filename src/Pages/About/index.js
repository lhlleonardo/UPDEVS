import React from 'react';

// import { Container } from './styles';

import team from '../../assets/team.jpg';

export default function About() {
    return <div>
        <h1>Sobre o UP DEVS</h1>
        <h2>O que é o UP DEVS?</h2>
        <p>O UP DEVS é um site para desenvolvedores da Web, com diretivas e boas práticas em linguagens de desenvolvimento da Web, como HTML, CSS, JavaScript, PHP, SQL, Python, jQuery, Java, C ++, C #, React, XML, W3.CSS e Bootstrap, cobrindo a maioria aspectos da programação web.</p>
        <p>O UP DEVS foi criado em 2020 por alunos do curso de Pós Graduação Latu Sensu em Desenvolvimento de Software para Web da Universidade Federal de São Carlos - UFSCAR, turma 2019/2020. O site é um projeto desenvolvido na disciplina User eXperience [para todos] na Web.</p>
        <h2>Você pode colaborar!</h2>
        <p>Se econtrar algum erro ou sugerir melhorias e conteúdos, utilize nosso recurdo de feedback.</p>
        <h2>Nossa equipe.</h2>
        <img src={team}></img>
    </div>;
}
