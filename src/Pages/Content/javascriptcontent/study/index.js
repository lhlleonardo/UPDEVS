import React from 'react';

import { Container } from '../../styles';

export default function Bestcontentjava() {
    return <Container>
        <div>
            <h1>Sintaxe JS</h1>
            <h2>Exemplos de sintaxe básica de JS</h2>
            <h3>Autor: Diego Eis</h3>
            <h4>Fonte: <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Values,_variables,_and_literals">https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Values,_variables,_and_literals</a></h4>
        </div>
        <strong>Variáveis</strong>
        <span>Você usa variáveis como nomes simbólicos para os valores em sua aplicação, exemplos: Numeros_visitas, temp99, e _nome.</span>
        <strong>Declarando variáveis</strong>
        <span>Por exemplo, var x = 42.</span>
        <strong>Constantes</strong>
        <span>Você pode criar uma constante apenas de leitura por meio da palavra-chave cons, EX: const PI = 3.14;</span>
        <strong>Conversão de tipos de dados</strong>
        <span>JavaScript é uma linguagem dinamicamente tipada. Isso significa que você não precisa especificar o tipo de dado de uma variável quando declará-la, e tipos de dados são convertidos automaticamente conforme a necessidade durante a execução do script. Ex: var answer = 42; answer = "Obrigado pelos peixes...";</span>
    </Container>;
}
