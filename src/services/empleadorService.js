const empleadorService = {}
var mongoose = require('mongoose')
const Empleador = require("../models/Empleador")

empleadorService.crearEmpleador = async (CrearEmpleadorModel) => {

    const newEmpleador = new Empleador({
        nombre: CrearEmpleadorModel.nombre,
        edad: CrearEmpleadorModel.edad,
        direccion: CrearEmpleadorModel.direccion
    })

    await newEmpleador.save()
    return true;
}

empleadorService.listarEmpleador = async () => {
    return await Empleador.find({})
}

empleadorService.traerEmpleador = async (idEmpleador) => {
    try {
        let empleador = await Empleador.find({"_id":idEmpleador});
        // let empleador = await Empleador.find({idEmpleador:idEmpleador});
        
        console.log(empleador)
        
        return empleador;
    } catch (error) {
        return null;
    }
}

empleadorService.actualizarEmpleador = async (ActualizarEmpleadorModel) => {

    console.log("datos a guardar ", ActualizarEmpleadorModel);
    var id = mongoose.Types.ObjectId(ActualizarEmpleadorModel.id);
    
    const empleador = await Empleador.findByIdAndUpdate({"_id":id} ,{nombre:ActualizarEmpleadorModel.nombre,
                                                                        edad:ActualizarEmpleadorModel.edad,
                                                                        direccion:ActualizarEmpleadorModel.direccion} )
        
    if (empleador) {//si existe el usario. ¿si tiene token entonces si existe el usuario???
        //luego de actualizar devuelve user que esl doc sin modificar
        //por eso llamamos a traer perfil que devuelve un json o null
       // let empleador = await Empleador.find({"_id":id});

       // console.log(empleador)
        
      //  return empleador;
        //return await this.traerEmpleador(id)
        return true
    }
    else {
        return false
    }
}

empleadorService.eliminarEmpleador = async (EliminarEmpleadorModel) => {
    let id = mongoose.Types.ObjectId(EliminarEmpleadorModel);

    const empleador = await Empleador.findByIdAndDelete({"_id": id})

    if(empleador){
        return true
    }else{
        return false
    }
}

empleadorService.buscarEmpleador = async (buscarPalabra) => {
    try{
        let buscador = new RegExp(`${buscarPalabra}`, 'i');
        //let empleador = Empleador.find({"nombre": buscador});
        let empleador = Empleador.find({$or: [{"nombre": buscador}, {"direccion": buscador}]});
        
        return empleador; 
    }catch(error){
        return null;
    }
}

module.exports = empleadorService;
