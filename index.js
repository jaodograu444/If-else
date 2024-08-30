

console.log(`trabalhando com condidicionais.`);

console.log(`Destinos oferecidos:`);

const listaDeDestinos = new Array(
`kyoto`,
`Shenzhen`,
`Bali`,
`Bangkol`,
`Moscou`
);

console.log(listaDeDestinos);

const idadeComprador = 18;
const menorAcompanhado = true;

if (idadeComprador >= 18) {
  console.log(`Comprador maior de idade, destino selecionado foi: ${listaDeDestinos[2]}`));
}
  
  if ( idadeComprador < 18 && menorAcompanhado == true) {
         console.log(`O menor se encontra acompanhado, então ele pode realizar a viagem.`);
  
console.log(`O destino escolhido foi: ${listaDeDestinos[4]}`);
    
} else if (idadeComprador < 18 && menorAcompanhado == false) { 
  console.log("O comprador é menor e nao esta acompanhando");
  }


