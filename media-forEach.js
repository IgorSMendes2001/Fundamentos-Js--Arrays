//Jeito diferente de organizar o laço de repetição do For
const notas=[10,7.5,8,9.5];
let soma=0;
//função callback pois o parâmetro da função não é um dado e sim outra função,podendo assim chamar outra função
notas.forEach(nota => {
    soma+=nota;
});
let media=soma/notas.length;
console.log(media);
// notas.forEach(function(nota){
//     soma+=nota;
// })
const nomes =["Igor","Layo","Silas","Selma","Gabi"];
nomes.forEach(nome=>{
    console.log(nome);
})