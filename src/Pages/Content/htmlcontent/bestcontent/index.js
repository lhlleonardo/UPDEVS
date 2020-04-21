import React from 'react';

import { Container } from '../../styles';

export default function Bestcontenthtml() {
    return <Container>
        <div>
            <h1>O básico: O que é HTML?</h1>
            <h2>Entenda o HTML básico, saiba o que significa tags do HTML e entenda como fazer.</h2>
            <h3>Autor: Diego Eis</h3>
            <h4>Data: 21/01/2011 em <a href="https://tableless.com.br/o-que-html-basico/">https://tableless.com.br/o-que-html-basico/</a></h4>
        </div>
        <span>HTML é uma das linguagens que utilizamos para desenvolver websites. O acrônimo HTML vem do inglês e significa Hypertext Markup Language ou em português Linguagem de Marcação de Hipertexto.</span>
        <span>O HTML é a liguagem base da internet. Foi criada para ser de fácil entendimento por seres humanos e também por máquinas, como por exemplo o Google ou outros sistemas que percorrem a internet capturando informação.</span>
        <strong>Quem criou o HTML?</strong>
        <span>Tim Berners-Lee. Esse é o nome do homem que criou o HTML. Ele criou o HTML para a comunicação e disseminação de pesquisas entre ele e seu grupo de colegas. O HTML ficou bastante conhecido quando começou a ser utilizada para formar a rede pública daquela época, o que se tornaria mais tarde a internet que conhecemos hoje.</span>
        <strong>O que são as tags do HTML?</strong>
        <span>O HTML é uma linguagem baseada em marcação. Nós marcamos os elementos para mostrar quais informações a página exibe. Por exemplo, um título importante. Aquele título do artigo, da manchete do site, nós marcamos com uma tag/elemento chamado H1. Veja um exemplo:</span>
        <pre>&lt;h1&gt;Aqui vai o texto do título&lt;/h1&gt;</pre>
        <span>Perceba que o texto está entre duas marcações. Essas marcações são chamadas de TAGS. As tags são abertas e depois fechadas. No exemplo acima abrimos a tag com e fechamos com</span>
        <span>. O que está dentro é o conteúdo mostrado para o usuário.</span>
        <span>O parágrafos são marcados com a tag P. Assim:</span>
        <pre>&lt;p&gt;Aqui vai o texto do parágrafo. Geralmente parágrafos tem muitas palavras, letras menores que as do título&lt;/p&gt;</pre>
        <span>Utilizando as tags, nós dizemos para o navegador o que é cada informação. O que é um título, o que é um parágrafo, o que é um botão, um formulário etc. Dizemos também o que é cada coisa para os sistemas de busca, como o Google. O Google, nesse caso, para exibir os resultados de busca, ele precisa saber o que é um parágrafo e o que é um título. Ele sabe disso através das tags.</span>
        <strong>A estrutura básica</strong>
        <span>Todo HTML começa do mesmo jeito. Não há segredos aqui. Você pode simplesmente copiar em algum lugar para usar esse código toda vez iniciar um novo HTML.</span>
        <span>A primeira linha se chamada DOCTYPE. O Doctype avisa aos browsers, robôs de busca, leitores de tela e outras coisas que tipo de documento e aquele que eles estao prestes a carregar. Existem outros códigos que podemos carregar, por exemplo XML. Por isso o Doctype avisa o browser para que ele saiba como se comportar ao ler o código.Depois começamos com a Tag HTML. Isso quer dizer que todo o que estiver entre as tags é escrito em HTML. Ao lado da palavra HTML tem um atributo (explico o que são atributos mais pra frente) chamado lang, onde indicamos qual o idioma do texto que escreveremos. Logo após a tag html temos a tag . Na tag Head nós indicamos o título do documento e indicamos a tabela de caractéres que o browser deve usar para renderizar seu texto. Também não se preocupe com isso agora. A tag &lttitle> é muito importante. É com ela que você indica o título do documento. O Google e outros sistemas de busca utilizam essa tag para indicar em suas buscas o título da págin. Isso é muito importante para que você apareça bem nas buscas. Logo depois da tag de fechamento começamos a tag . Dentro deste elemento é que vamos escrever todo o código HTML do resto do site.</span>
        <span>Para criar seu HTML é muito simples. Primeiro, abra e crie um arquivo vazio, sem texto, com o nome index.html. Utilize o Notepad (se estiver no windows) ou o TextEdit (se estiver no Mac). Perceba que a extensão do seu arquivo é .html e não .txt</span>
        <strong>Um pouco avançado: Desenvolvimento em Camadas</strong>
        <span>Um dos principais problemas no desenvolvimento para internet é a mistura dos diversos códigos. Nós não usamos apenas o HTML para fazer sites. Além do HTML, utilizamos ainda o CSS, que é uma linguagem para configurarmos o visual das páginas e o Javascript, que vai cuidar do comportamento da página, por exemplo, o que acontece quando o usuário clica em um botão. Há também as linguagens chamadas Linguagens Server-Side, que são linguagens como PHP, Python, Ruby, ASP e etc. Essas linguagens fazem tudo funcionar. Elas fazem os cálculos nos servidores e dão a resposta para o navegador do usuário. Para que os códigos não se misturem, nós os separamos em diversas camadas. Para ficar mais fácil de entender, imagine que o HTML é sempre o esqueleto do site. É com ele que vamos fazer toda a estrutura de código, onde iremos dizer o que é um título, o que é um parágrafo, uma imagem e etc. O CSS será a parte externa do corpo. É o que deixará o esqueleto bonito. É com o CSS que iremos dar cor para o título, configurar o tamanho do texto, largura das colunas e etc. Dessa forma nós não misturamos o código HTML e o código CSS. Utilizamos a mesma ideia para separar os outros códigos citados acima. Este é o básico.</span>
    </Container>;
}
