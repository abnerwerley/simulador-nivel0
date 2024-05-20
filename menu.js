import { visualizarProdutos } from './opcoesMenu/visualizarProdutos.js';

export function menu() {
  console.log("Seja bem-vindo(a) ao sistema!");
  console.log("O que deseja saber hoje? ");
  mostrarMenu();
}

function mostrarMenu() {
  const menu = `
      Selecione uma opção:
      1. Visualizar produtos cadastrados
      2. Registrar vendas
      3. Sair
      `;
  console.log(menu);
}

function direcionarParaOpcoes(opcao) {
    switch(opcao){
        case '1':
            visualizarProdutos();
            break;
        case '2':
            visualizarProdutos();
            break;
        case '':
            visualizarProdutos();
            break;
    }
}


let opcao;
opcao = mostrarMenu();
while (opcao !== "3"){
    direcionarParaOpcoes(opcao);
}


// do {
//   let opcao;
//   opcao = mostrarMenu();
//   direcionarParaOpcoes(opcao);
// } while (opcao !== "3");
