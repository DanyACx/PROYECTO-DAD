const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const publicacionSchema = new Schema ({

    titulo: String,
    subtitulo: String,
    descripcion: String,
    idEmpleador: String

});

module.exports = mongoose.model('publicacion', publicacionSchema);