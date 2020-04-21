import React from 'react';

import { Container } from '../../styles';

export default function Goodcontentcss() {
    return <Container>
        <div>
            <h1>Boas práticas CSS</h1>
            <h2>Seu código CSS pode ser mais limpo, flexível e reaproveitável, veja como.</h2>
            <h4>Fonte: <a href="https://blog.caelum.com.br/seu-codigo-css-pode-ser-mais-limpo-flexivel-e-reaproveitavel/">https://blog.caelum.com.br/seu-codigo-css-pode-ser-mais-limpo-flexivel-e-reaproveitavel/</a></h4>
        </div>
        <span>Bons programadores aprendem boas práticas de código desde criancinhas.</span>
        <span>Encapsulamento, bons nomes de variáveis e métodos, orientação a objetos e outros conceitos clássicos estão na ponta da língua. </span>
        <strong>Veja algumas das boas práticas aplicadas:</strong>
        <span>Não sobrescreva suas próprias regras CSS.</span>
        <span>Você já passou por isso: coloca um float:left num seletor e depois precisa limpá-lo com float:none num caso particular. Ou ainda reescrever um width:auto e coisas do tipo. Péssima prática.</span>
        <span>Abuse de classes pra reaproveitar código CSS. Evite IDs. IDs são muito inflexíveis: só podem aparecer uma vez na página e um elemento não pode ter mais de um ID (o elemento é um singleton). Isso faz do ID o vilão do reaproveitamento de código.</span>
        <strong>Evite acoplar o estilo CSS a tags específicas do HTML.</strong>
        <span>Escrever o nome tag no meio do CSS faz com que seu estilo fique acoplado à estrutura do HTML. Se o HTML muda, seu estilo quebra. Podemos evitar isso criando mais classes e diminuindo o acoplamento entre HTML e CSS.</span>
        <strong>Dê bons nomes pra suas classes</strong>
        <span>Crie nomes legíveis e fáceis de entender, use .painel-principal ao invés de .pnlPri, como exemplo.</span>
        <strong>Documente bem as exceções.</strong>
        <span>Toda regra tem exceções. Às vezes, você vai colocar um tagname no seu CSS. ou vai precisar de um !important num raro lugar e depois você não vai lembrar o motivo.</span>
    </Container>;
}
