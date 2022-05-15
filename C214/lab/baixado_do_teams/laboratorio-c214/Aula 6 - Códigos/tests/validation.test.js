const Constants = require('../src/utils/Constants');
const Validation = require('../src/utils/validation');

test('Caso Inválido nome nao string', () => {
    const result = Validation.create({
        nome: 2,
        cantor:"Leo Santana"
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});


test('Caso Inválido cantor nao string', () => {
    const result = Validation.create({
        nome: "nome musica leo",
        cantor:2
    });
    expect(result.cantor).toEqual(Constants.ErrorValidation.cantor);
});

test('Caso válido', () => {
    const result = Validation.create({
        nome: "Meteoro da paixao",
        cantor: "Luan Santana"
    });
    expect(result).toEqual(undefined);
});

test('Caso inválido Retirando cantor ', () => {
    const result = Validation.create({
        nome: "musica aa",
    });
    expect(result.cantor).toEqual(Constants.ErrorValidation.cantor);
});

test('Caso inválido - Retirando nome', () => {
    const result = Validation.create({
        cantor: "Claudia leite"
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});
