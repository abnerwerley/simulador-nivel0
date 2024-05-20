export function visualizarProdutos() {
  console.log("Produto 1");
}

class Produto {
  constructor(nome, codigo, preco){
    this.nome = nome;
    this.codigo = codigo;
    this.preco = preco;

  }
}
var produto1 = {
  nome: "Computador Desktop Intel Core i5",
  codigo: "001", 
  preco: 3199
}