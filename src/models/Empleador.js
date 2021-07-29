const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const empleadorSchema = new Schema ({

    nombre: String,
    edad: String,
    direccion: String

});

module.exports = mongoose.model('empleador', empleadorSchema);