let numero = parseInt(
  prompt("Digite a baixo o numero que deseja o fatorial: ")
);
let resultado = 1;

for (let i = 1; i <= numero; i++) {
  resultado *= i;
}

console.log(resultado);
