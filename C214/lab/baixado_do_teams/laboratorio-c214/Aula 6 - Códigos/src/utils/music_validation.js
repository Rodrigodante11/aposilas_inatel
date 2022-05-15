const create = {
    nome: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    cantor: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

const update = {
    nome: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    cantor: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

const get = {
    cantor: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

const deleteBy = {
    nome: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

module.exports = {
    create,
    update,
    get,
    deleteBy,
};