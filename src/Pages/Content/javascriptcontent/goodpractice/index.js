import React from 'react';

import { Container } from '../../styles';

export default function Bestcontentjava() {
    return <Container>
        <div>
            <h1>Boas práticas JavaScript</h1>
            <h2>Listamos abaixo algumas das boas práticas usadas em JavaScript e que você não pode deixar de usar, confira:</h2>
            <h4>Fonte: <a href="https://code.tutsplus.com/pt/tutorials/24-javascript-best-practices-for-beginners--net-5399">https://code.tutsplus.com/pt/tutorials/24-javascript-best-practices-for-beginners--net-5399</a></h4>
        </div>
        <strong>Use o JS Lint</strong>
        <span>O JSLint é um depurador, escrito pelo Douglas Crockford. Cole seu script lá e ele, rapidamente, escaneará por problemas e erros notáveis em seu código.</span>
        <strong>Eval = Ruim</strong>
        <span>Para aqueles não familiarizados, a função eval dá-nos acesso ao compilador do JavaScript. Essencialmente, podemos executar o resultado de uma cadeia de caracteres passando-a como parâmetro para a função eval, além de diminuir substancialmente a performance do seu script.</span>
        <strong>Declare Variáveis, Fora da Instrução For</strong>
        <span>Ao executar instruções for muito grandes, não faça com que o motor JavaScript tenha de trabalhar mais que ele realmente precisa.</span>
        <strong>Comente Seu Código</strong>
        <span>Pode até parecer desnecessário, no começo, mas, acredite, você QUERERÁ comentar seus códigos da melhor forma possível. O que acontece quando você volta a trabalhar em um projeto, depois de um mês sem tocar nele, só para descobrir que você não é capaz de lembrar, facilmente, a linha de pensamento que tinha. E se um de seus colegas tiver de revisar seu código? Sempre, sempre comente seções importantes do seu código.</span>
        <strong>Remova o Atributo "Language"</strong>
        <span>Anos atrás, não era incomum encontrar o atributo "language" em tags script, porém, esse atributo, há tempos, é obsoleto, então, deixe-o de fora.</span>
    </Container>;
}
