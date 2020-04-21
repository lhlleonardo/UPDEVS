import React from 'react';

import { Container } from '../../styles';

export default function Goodcontenthtml() {
    return <Container>
        <div>
            <h1>Boas Práticas para Programação Web — HTML e CSS</h1>
            <h3>Autor: Gabriel Moraes</h3>
            <h4>Data: 15/11/2019 em <a href="https://medium.com/academymeteor/boas-pr%C3%A1ticas-para-programa%C3%A7%C3%A3o-web-html-e-css-c2a62f1b9560">https://medium.com/academymeteor/boas-pr%C3%A1ticas-para-programa%C3%A7%C3%A3o-web-html-e-css-c2a62f1b9560</a></h4>
        </div>
        <span>HTML e CSS é o caminho de entrada de muita gente para a programação. Eu mesmo tenho alunos que estão começando a programar agora e estão estudando HTML e CSS, e é muito importante fazermos a nossa parte para mostrar a eles as melhores maneiras de codar e deixar as coisas mais simples e bonitas. Então vamos às boas práticas na programação web.</span>
        <strong>HTML</strong>
        <span>Então vamos às boas práticas na programação web. Bom, vamos começar pelo HTML! Muitos programadores zombam dele por aí, dizendo que ele não é uma linguagem de programação e etc, mas acontece que ele não é tão simples assim. Então vamos às dicas. Visualize sua interface em blocos.</span>
        <span>Aqui temos um exemplo de modularização. Dividimos essa visão da tela em alguns blocos e podemos trabalhar em cima disso. Visualizar e entender o que você vai codar torna seu trabalho MUITO mais fácil na hora do vamos ver. Separe a interface em módulos. Assim você vai ter mais facilidade em arrumar o código e ver progresso! Fora que quando você separa tudo em módulos, você consegue visualizar muito melhor a construção de cada módulo, entender onde vai entrar cada div e montar sua hierarquia de css em cima disso! Aspas duplas. Utilize sempre aspas duplas para definir atributos. É “regra” da SGML (Standard Generalized Markup Language). E fica mais bonito, né?</span>
        <span>Indentação. Elementos dentro de outros elementos DEVEM SER INDENTADOS. Por favor, não se esqueçam nunca disso. Repitam comigo: ELEMENTOS ANINHADOS, SEMPRE INDENTADOS. Simplicidade Faça o que você quiser, mas utilize o mínimo de código com a menor complexidade possível. Isso facilita o seu entendimento posteriormente e o entendimento de outros desenvolvedores sobre o seu código. Um código limpo é um código amado. Ordem? Mantenha uma ordem nos atributos que você aplica. Esse aqui não é bem uma regra, mas uma dica. As coisas ficam organizadas. A Locaweb, por exemplo, adota essa ordem: Agora chegou a parte do CSS! Essa parte tem muita coisa, pois eu achei um texto muito bacana de um rapaz chamado Sérgio Lopes onde eu peguei algumas coisas. Vou deixar no final um link e créditos :).</span>
        <strong>Seletores</strong>
        <span>Evite seletores que não sejam necessários. Ex: Seletor ID para a tag body. Isso pode causar confusão no seu CSS, caso você esqueça para que serve esse seletor, então é muito mais intuitivo utilizar a própria tag. No caso de divs, que geralmente existem em maior quantidade no código, é mais interessante utilizar class.</span>
        <strong>Id ou Class?</strong>
        <span>Prefira class. Sempre. Isso torna seu código mais fácil de ser atualizado e reutilizado. ID é algo muito engessado. Você não pode ter mais de um e não pode repeti-lo, a class você pode definir agora para um elemento e depois adicionar em outro elemento que precise. Você pode criar uma class que tenha um CSS muito utilizado em vários elementos e depois utilizar outras classes para especificar outras coisas desse elemento. Por exemplo: Você tem dois elementos na página (.menu e .noticias) que têm funções e visuais diferentes. Mas os dois seguem a base visual do site que é ter fundo cinza, com borda redonda e uma sombra. Ao invés de copiar as propriedades, crie uma nova classe base pra esses elementos. Prefira criar essa classe nova .box que escrever o CSS usando as classes dos outros dois elementos .menu, .noticias. O dia que um terceiro box surgir, é só aplicar a classe, sem mexer no CSS. Outro motivo pra você evitar IDs no CSS é que você não pode sobrescrever suas propriedades com suas classes genéricas reaproveitáveis. Precisaria de outro ID pra sobrescrever um seletor de ID. Não brigue com a especificidade. Mantenha a especificidade dos seus seletores no mesmo nível usando classes sempre pra estilizar. São mais fáceis de compor. PORÉM, vamos conversar sobre isso um pouco mais abaixo.</span>
        <strong>“Você realmente quer me ver sofrer?”</strong>
        <span>Evite números mágicos no seu CSS que são calculados arbitrariamente. Pior ainda aquele número mágico pra alinhar algo (tipo um top:-1px) que certamente está levando em conta a renderização num certo browser e vai quebrar em outro navegado. Isso faz seu CSS ser pouco reaproveitável e exige manutenção constante. Quer alinhar um ícone com texto? Aprenda a usar o vertical-align:middle. Ah, mas e como eu resolvo o width? Isso nos leva ao próximo tópico: Use unidades flexíveis. Números mágicos podem ser evitados em muitos casos usando unidades relativas como porcentagens. Se você tem uma página de 940px de largura e precisa dividir em 5 colunas, não escreva width:188px porque você nunca vai lembrar de onde saiu esse valor. Prefira width:20% que mostra de maneira mais óbvia que é 1/5 da página. E, claro, se puder, faça todas as suas unidades de layout com porcentagens. Isso vai fazer seu design ser flexível e não depender do tamanho do navegador. A Web é uma mídia elástica e confinar sua página a pixels estáticos é transformar a Web em uma mídia mais limitadas como a impressa. Para elementos tipográficos ou afetados pela tipografia, use em como medida flexível. Nomear alguma coisa é a parte mais difícil de programar. Como boa parte das boas práticas citadas aqui envolvem classes, é bom saber nomeá-las direito. A regra óbvia, que você já segue, é criar nomes legíveis e fáceis de entender: Use .painel-principal ao invés de .pnlPri. Mas não é só isso. Precisamos entender, aqui, que nossas classes não devem ter semântica de visual e sim de conteúdo.</span>
        <strong>Conclusão</strong>
        <span>E com isso chegamos ao final. Foi MUITA COISA, eu sei! Mas espero que isso ajude vocês na caminhada :) Ah e por último, mas não menos importante, eu tirei muita coisa desse texto do Sérgio aqui > Seu código CSS pode ser mais limpo, flexível e reaproveitável.</span>
        </Container>;
}