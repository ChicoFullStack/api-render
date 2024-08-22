const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let ClienteSchema = Schema({
    id: {
        type: String,
        required: true
    },
    nome: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: false
    },
    cnpj: {
        type: String,
        required: false
    },
    tipo: {
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
        collection: 'Cliente'
    });

module.exports = mongoose.model('ClienteSchema', ClienteSchema);