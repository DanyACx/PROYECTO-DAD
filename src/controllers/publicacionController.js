ctrl = {}

const publicacionService = require("../services/publicacionService")
const RespuestaModel = require("../models/RespuestaModel")

ctrl.crearPublicacion = async (req, res) => {
    let respuesta = new RespuestaModel();

    try{
        if(await publicacionService.crearPublicacion(req.body)){
            respuesta.mensaje = "Publicacion Creada Correctamente"
            respuesta.status = 200
            console.log(req.body)
        }else{
            respuesta.mensaje = "Error en la publicacion"
            respuesta.status = 400
        }

    }catch(error){
        console.log(error)
        respuesta.mensaje = "Ocurrio un error en el servidor"
        respuesta.status = 500
    }
    res.status(respuesta.status).json(respuesta);//respondemos
}

ctrl.listarPublicaciones = async (req, res) => {
    try{
        let listaPublicaciones = await publicacionService.listarPublicaciones()
        res.status(200).json({data: listaPublicaciones})
    } catch (error){
        console.log(error)
        res.status(500).json({mensaje: "Salió algo mal, Uppss"})
    }
}

module.exports = ctrl;