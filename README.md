# Repositório de Exercicios em JavaScript

## Objetivos: 

<p> Armazenar os exercicios com o tempo vou desenvolvendo, e também, acommpanhar o meu progresso nos estudos de html, css e javascript. Não há um proposito de ser um conteúdo para compartilhar,até porque o nivel do conteúdo encontra-se nos estagios iniciais, portanto o foco real é deixar armazenado para acompanhar o meu progresso pessoal</p>


## Estrutura basica de um arquivo html: 

#### Analise: 

<p> Codigo abaixo é um exemplo simples de uma estrutura de arquivo html na qual utilizamos um formulário representado pela tag form. Veja que dentro dessa tag existem outras que são responsaveis pela apresentação e campo de entrada ou coleta de dados feita pelo usuário, como por exemplo a tag p e a tag input. Referente os 2 campos inputs tem que se ater a um detalhe, o primeior input fica encarregado de coletar a entrada com o tipo de dado texto, enquanto o segundo input fica encarregado de coletar dado de tipo number, que pode ser de tipo inteiro ou fracionado, tudo isso é garantido em funçao do atributo type. Cabe mencionar que ha 2 campos respnosaveis pela saida da informação processada - que será comentado logo mais no codigo javascript - que são as tags h3, cada uma distintas em função do atributo id.Não pode-se esquecer também da tag script, ela que será responsavel de chamar nosso codigo javascript afim de processar as informações de entrada antes feita pelo usuário</p>

```html
<!DOCTYPE html>
<html lang="pt-Br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercicio lógica de programação</title>
</head>
<body>
    <h1>Supermnercado JS</h1>
    <form>
        <p><b>Produto:</b> 
            <input type="text" id="inNomeProduto" required>
        </p>
        
        <p><b>Preço R$ :</b>
            <input type="number" id="inPrecoProd" required>
        </p>
        <input type="submit" value="Ver Promoção">
    </form>    
   
   <h3 id="outResp1"></h3>
   <h3 id="outResp2"></h3>
    
    <script src="/js/ex2_7.js"></script>

</body>
</html>
```

## Estrutura do código Javascript:

### Analise: 

<p> Depois de analisado superfcialmente o estrutura de codigo html, agora vou me ater a analisar o que eu fiz na estrutura do codigo javascript. Em função da limitação do html em analisar lógicamente um codigo com condições a gente é obrigado a usar estrutura de uma linguagem como javascript.</p>

- Para utilizar ou manipular os elementos de uma pagina html no javascript, tive que estabelecer uma referência com tais elementos, abaixo declarei 3 variaveis cada uma ligada respectivamente aos elementos da pagina html. Cada const esta recebendo o metodo <b>document.querySelector("form")</b> - por exemplo. </p>

Portanto a varivael <b>frm</b> esta estabelecendo uam referenca ao elemento <b>form</b> da pagina html. 

```javascript
const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");
```

<p>Como proximo passo criei um evento de escuta ao frm - formulario - para executar uma ação ao click do botão submit. Lembrando que <b>(e)</b> é o objeto do evento.</p>

```javascript
frm.addEventListener("submit", (e) => {

    // - declaração de variaveis, ações, condições
});
```

<p> Esse metodo abaixo tem como finalidade previnir o comportamento do formulario, que é recarregar ou enviar os dados para otura pagina.</p>

```javascript
    e.preventDefault();
```

<p> Abaixo criei 2 variaveis, que tem por finalidade, captar o nome do produto e o preço do produto informado pelo usuário.</p>

```javascript
const nomeProduto = frm.inNomeProduto.value;
const precoPrduto = Number(frm.inPrecoProd.value);
```

<p> Criei uma condição <b>IF</b> para averiguar se os campos de entrada foram 1) deixados em branco pelo usuário, se o campo referente ao preço foi devidamente informado um numero e nao uma string e também averiguar se o campo do preço o produto não esta igual a 0;</p>

```javascript
if(nomeProduto.trim() === "" || isNaN(precoProduto) || precoProduto === 0) {
     resp1.innerText = ` Entrada invalida, tipos de dados divergentes`;
     return;
}
```

<p> Agora a parte de processamento, numa primeira oportunidade eu criei a formula de desconto de 50% do produto, isso só será informado ao usuário quando ele inserir todas as informações. 

```javascript
const desconntoPorItem = precoProduto * 0.50;
```
<p> Abaixo criei a formula que calcula o desconto caso o usuário se interesse por levar 3 itens do mesmo produto.</p>

```javascript
const descontoPor3 = (precoPrduto * 3) - desconntoPorItem;
```
<p>Por fim fiz a ferencia aos nossos 3 elementos da pagina hmtl, que no caso são os 2 h3, que estão respectivamente associados ao <b>resp1</b> e <b>resp2</b>. A propriedade <b>innerText</b> é responsavel por obter ou alterar qualquer elemento da pagina html, ou seja, como estou usando ela associada a variaveis resp1 e resp2 que, também, estão associadas ao elemento h3, logo, o conteudo da saida será atraveis desses elementos html</p>

```javascript
resp1.innerText = `${nomeProduto} -> Promoção: leve 3 por R$ ${descontoPor3}`;
resp2.innerText =  `O 3º produto custa apenas R$ ${desconntoPorItem.toFixed(2)}`;
```

## Código javascript completo: 

```javascript
// - Cria um evento de escuta que é acionada a partir do bobtão submit 
frm.addEventListener("submit", (e) => {

    e.preventDefault();

    const nomeProduto = frm.inNomeProduto.value;
    const precoProduto = Number(frm.inPrecoProd.value);

    if(nomeProduto.trim() === "" || isNaN(precoProduto) || precoProduto === 0) {
        resp1.innerText = ` Entrada invalida, tipos de dados divergentes`;
        return;
    }

    // - Calcular desconto 50% por item  
    const desconntoPorItem = precoProduto * 0.50;
    
    // - Calcula desconto para promoção caso leve 3 itens
    const descontoPor3 = (precoPrduto * 3) - desconntoPorItem;

    resp1.innerText = `${nomeProduto} -> Promoção: leve 3 por R$ ${descontoPor3}`;
    resp2.innerText =  `O 3º produto custa apenas R$ ${desconntoPorItem.toFixed(2)}`;
});
```

## Conclusão: 

<p>Embora a principio seja um exemplo bem simples fiquei satisfeito pelo contato com linguagem javascript, utilizei de recusos modernos da linguagem como arrow function - coisa que nunca tinha feito até então. Os conceitos basicos de lógica estão todos postos de acordo com todas as estapas necessarias para resolução de um algoritmo - entrada - processamento e saida de dados. Tentei manter o codigo o mais legivel possivel, mas acrdito que com o tempo irei conseguir lapidar melhor os conceitos e os recursos que a linguagem tenha a oferecer.</p>

## Referência: 

[MDN Web Docs - Arrow Functions - >](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

[MDN Web Docs - Const Variables ->](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)

[MDN Web Docs - AddEventListener ->](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)