const Music = require('../src/application/Music_service');
const Constants = require('../src/utils/Constants');
const Utils = require('../src/utils/utils');
const MusicRepository = require('../src/port/Music_repository');

jest.mock('../src/port/Music_repository');

test('CREATE - Dado cantor em branco', async () => {
    const data = {
        nome: "Musica Carnaval teste",
    
    }

    const id = Utils.generateUuid();

    MusicRepository.create.mockResolvedValue({ code: 17548 });

    const result = await Music.create(data);
    expect(result.cantor).toEqual(Constants.ErrorValidation.cantor);
})

test('CREATE - Dado válido', async () => {
    const data = {
        nome: "Musica do cristiano Araujo",
        cantor: "Cristiano Araujo",
    }

    const id = Utils.generateUuid();

    MusicRepository.create.mockResolvedValue({ ...data, id });

    const result = await Music.create(data);
    expect(result).toEqual({ ...data, id });
})
test('CREATE - Dado id retorno valido', async () => {
    const data = {
        nome: "thriller",
        cantor: "Michael Jackson",
    
    }

    const id = Utils.generateUuid();

    MusicRepository.create.mockResolvedValue({ code: 14500 });

    const result = await Music.create(data);
    expect(result).toEqual({ code: 14500 });
})


