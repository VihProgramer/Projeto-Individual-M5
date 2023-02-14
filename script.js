import redlineSync from 'readline-sync';
import chalk from 'chalk';

const listagem = [];
let resp = "";

const adicaoLista = (prop) => {
  listagem.push(prop);
};

const ordem = () => {
  listagem.sort();
};

const lista = () => {
  listagem.forEach((elemento)=> { console.log(`• ${elemento}`); });
};

while (true) {
  resp = redlineSync.question(chalk.magenta("Digite a propriedade CSS ou 'SAIR' para exibir a listagem e encerrar: "));

  if (resp.toLowerCase() == "sair") {
    console.log(chalk.black('-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-'));
    console.log(chalk.red('Lista Ordenada de Propriedades CSS: '));
    ordem();
    lista();
    console.log(chalk.black('-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-'));
  break;
 
  } else if (resp.toLowerCase() !== "sair" && resp !=="") {
    adicaoLista(resp);
  }
}