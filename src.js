// - Estabelece referencia com os elementos da pagina para entrada e saida de dados
const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");


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