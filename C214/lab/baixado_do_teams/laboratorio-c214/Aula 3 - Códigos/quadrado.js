const validate = require('validate.js');
const QuadradoConstraint = require('./validate');

const Quadrado = {
    perimetro(lado) {
        const validateLado = validate({ lado },  QuadradoConstraint.quadradoConstraint);
        console.log("Validate", validateLado);
        if(validateLado !== undefined){
            return 'Error';
        }
        var p = lado * 4;
        return p;
    },

    area(lado) {
        const validateLado = validate({ lado },  QuadradoConstraint.quadradoConstraint);
        if(validateLado !== undefined){
            return 'Error';
        }
        var a = lado * lado;
        return a;
    }
};

module.exports = Quadrado;