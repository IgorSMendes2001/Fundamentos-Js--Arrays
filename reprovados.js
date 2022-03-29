const nomes=['Ana','Marcos','Maria','Mauro','Jamelão'];
const notas=[7,4.5,8,7.5,0];
const reprovados=nomes.filter((_,indice)=>notas[indice]<5)//o underline serve para substituir um dos parâmetros que não serão utilizados
console.log(`Alunos reprovados:${reprovados}`)