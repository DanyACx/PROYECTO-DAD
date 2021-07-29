ctrl = {}

const empleadorService = require("../services/empleadorService")
const RespuestaModel = require("../models/RespuestaModel")

ctrl.crearEmpleador = async (req, res) => {
    let respuesta = new RespuestaModel();

    try{
        if(await empleadorService.crearEmpleador(req.body)){
            respuesta.mensaje = "Empleador Creada Correctamente"
            respuesta.status = 200
            console.log(req.body)
        }else{
            respuesta.mensaje = "Error en el empleador"
            respuesta.status = 400
        }
    }catch (error){
        console.log(error)
        respuesta.mensaje = "Ocurrio un error en el servidor"
        respuesta.status = 500
    }
    res.status(respuesta.status).json(respuesta);//respondemos
}

ctrl.listarEmpleador = async (req, res) => {
    try{
        let listarEmpleador = await empleadorService.listarEmpleador()
        res.status(200).json({data: listarEmpleador})
    }catch(error){
        console.log(error)
        res.status(500).json({mensaje: "Salió algo mal"})
    }
}

ctrl.actualizarEmpleador = async (req, res) => {
    try {                              
        let resActualizar = await empleadorService.actualizarEmpleador(req.body)
        if (resActualizar) {
            //res.status(200).json(resActualizar)
            res.status(200).json({mensaje: "Se actualizo empleador"})
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ mensaje: "Ocurrio un erro en el servidor" })
    }
}

ctrl.eliminarEmpleador = async (req, res) => {

    try{
        let resEliminar = await empleadorService.eliminarEmpleador(req.params.id)

        if(resEliminar){
            res.status(200).json({mensaje: "Se elimino empleador"})
        }
    }catch(error){
        console.log(error)
        res.status(500).json({mensaje: "Ocurrio un error en el servidro"})
    }
}

ctrl.buscarEmpleador = async (req, res) => {
    try{
        //console.log("Palabra a buscar",req.params) ;
        let listaEmpleador = await empleadorService.buscarEmpleador(req.params.buscador)
        res.status(200).json({data: listaEmpleador})
    }catch(error){
        console.log(error)
        res.status(500).json({mensaje: "Ocurrio un error en el servidro"})
    }
}

module.exports = ctrl;