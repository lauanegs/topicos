// Fução que recebe um objeto como argumento
function exibirInfoProdutos(produto){
    return `Produto: ${produto.nome}, Preço: ${produto.preco.toFixed(2)}, Estoque: ${produto.estoque} unidade.`;
}

// Objeto produto

const produto = {
    nome: '',
    preco: 0,
    estoque: 0
}

const produto1 = {
    nome: 'f',
    preco: 0,
    estoque: 0
}

console.log(exibirInfoProdutos(produto));
console.log(exibirInfoProdutos(produto1));
