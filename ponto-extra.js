const notas=[10,9,8,6,5];

const notasAtualizadas=notas.map(nota=>nota==10?nota:++nota);//vai retornar o valor da nota após incrementar mais 1
console.log(notasAtualizadas);

const nomes=["ana Julia","Caio vinicius","BIA silva"];
const nomesAtualizados=nomes.map(nome=>nome.toUpperCase());
console.log(nomesAtualizados);
const novasAtualizacoes=nomes.map(nome=>nome.toLocaleLowerCase());
console.log(novasAtualizacoes);