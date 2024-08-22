const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let TagsSchema = Schema({
    id: {
        type: String,
        required: true
    },
    nome: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: true
    },
    quality: {
        type: String,
        required: true
    },
    itenId: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    }
},
    {
        collection: 'Tags'
    });

module.exports = mongoose.model('TagsSchema', TagsSchema);