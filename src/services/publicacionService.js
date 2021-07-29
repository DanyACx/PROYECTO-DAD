const publicacionService = {}
var mongoose = require('mongoose')
const Publicacion = require("../models/Publicacion")
const Empleador = require("../models/Empleador")

publicacionService.crearPublicacion = async (crearPublicacionModel) => {
    const newPublicacion = new Publicacion({
        titulo: crearPublicacionModel.titulo,
        subtitulo: crearPublicacionModel.subtitulo,
        descripcion: crearPublicacionModel.descripcion,
        idEmpleador: crearPublicacionModel.idEmpleador
    })

    await newPublicacion.save();
    return true;
}

publicacionService.listarPublicaciones = async () => {
    return await Publicacion.find({})
}

// buscar publicacion por empleador - por nombre de empleador
publicacionService.buscarPorEmpleador = async (buscarPalabra) => {
    try{
        let buscador = new RegExp(`${buscarPalabra}`, 'i');
        let publicaciones = Publicacion.find({});
    }catch(error){

    }
}

module.exports = publicacionService;