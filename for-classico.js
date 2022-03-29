const numeros =[100,200,300,400,500,600];
let soma=0;
for(let i=0;i<numeros.length;i++){
    soma+=numeros[i];
}
let media=soma/numeros.length;
console.log(`A média do aluno é:${media}`);