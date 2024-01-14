const { Schema } = require('mongoose');
const Pokemon = new Schema({
    id: {
        type: Number,
        required: true
    },
    nome: {
        type: String,
        required: true
    },
    altura: {
        type: Number,
        required: true,
        min: 0
    },
    peso: {
        type: Number,
        required: true,
        min: 0
    },
    imagem: {
        type: String,
        required: true,
        validate: {
            validator: (value) => {
                return value && value.startWith('http') && value.endWith('.png');
            },
            message: () => "A imagem deve ser uma URL absoluta"
        }
    },
    ataques: {
        type: String,
        required: true
    },
    estatisticas: {
        type: Object,
        required: true
    }
});
module.export = Pokemon;
