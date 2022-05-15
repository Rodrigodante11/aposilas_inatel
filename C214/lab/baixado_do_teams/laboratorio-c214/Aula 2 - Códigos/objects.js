var Pessoa = {
    nome: 'Maria',
    idade: 30,
    sexo: 'Feminino',
};

console.log(Pessoa);

Pessoa.nome = 'Rafaela';

console.log(Pessoa);

let mapa = {
    cantoSuperiorEsquerdo : { x : 1, y : 1 },
    cantoSuperiorDireito : { x : 10, y : 1 },
    cantoInferiorEsquerdo : { x : 1, y : 10 },
    cantoInferiorDireito : { x : 10, y : 10 }
}

console.log(mapa.cantoSuperiorDireito)
console.log(mapa.cantoSuperiorDireito.x)

mapa.cantoInferiorEsquerdo = { x: 0, y: 0};
console.log(mapa.cantoInferiorEsquerdo)
mapa.cantoInferiorEsquerdo.y = 8;
console.log(mapa.cantoInferiorEsquerdo)