const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let OperadorSchema = Schema({
    id: {
        type: String,
        required: true
    },
    nome: {
        type: String,
        required: true
    },
    cargo: {
        type: String,
        required: true
    },
    turno: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    usuario: {
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true
    },
    login: {
        type: String,
        required: true
    }

},
    {
        collection: 'Operador'
    });

module.exports = mongoose.model('OperadorSchema', OperadorSchema);