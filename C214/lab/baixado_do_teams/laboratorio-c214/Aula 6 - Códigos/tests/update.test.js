const Constants = require('../src/utils/Constants');
const Validation = require('../src/utils/validation');

test('Caso válido', () => {
    const result = Validation.update({
        nome: "Meteoro da paixao",
        cantor: "Luan Santanaaaa"
    });
    expect(result).toEqual(undefined);
});

test('Caso válido sem nome', () => {
    const result = Validation.update({
        
        cantor: "Luan Santanaaaa"
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});


test('Caso inválido sem cantor', () => {
    const result = Validation.update({
        nome: "testecantornome",
    });
    expect(result.cantor).toEqual(Constants.ErrorValidation.cantor);
});

test('Caso inválido nome sem ser string', () => {
    const result = Validation.update({
        nome: 2,
        cantor: "Luan santana"
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});

test('Caso inválido cantor sem ser string', () => {
    const result = Validation.update({
        nome: "nome deMusicaPraTest",
        cantor: 2
    });
    expect(result.cantor).toEqual(Constants.ErrorValidation.cantor);
});