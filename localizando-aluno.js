const alunos = ['João', 'Juliana', 'Caio', 'Ana','Igor'];
const mediasDosAlunos=[10,7,9,6,8];
//includes ->booleano
//indexOf -> 4; Igor,8;
let listaDeNotasEAlunos=[alunos,mediasDosAlunos];
const exibeNomeNota=(nomeAluno)=>{
    if(listaDeNotasEAlunos[0].includes(nomeAluno)){
        let indice = listaDeNotasEAlunos[0].indexOf(nomeAluno);
        return listaDeNotasEAlunos[0][indice] + `,sua media é ` + listaDeNotasEAlunos[1][indice];
    }else{
        return `Infelizmente O aluno ${nomeAluno} não está cadastrado!`
    }
} 
console.log(exibeNomeNota("Jorge"));