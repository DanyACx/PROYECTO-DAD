const express = require("express")
const router = express.Router();

const publicacion = require("../controllers/publicacionController")
const empleador = require("../controllers/empleadorController")

module.exports = app => {
    router.get('/', (req, res) => {res.send('GOSAZO SERVER')})


    router.get("/listarPublicaciones", publicacion.listarPublicaciones)
    router.post("/crearPublicacion",publicacion.crearPublicacion)

    //Empleador
    router.post("/crearEmpleador",empleador.crearEmpleador)// para crear empleador
    router.get("/listarEmpleador", empleador.listarEmpleador)
    router.put("/editarEmpleador", empleador.actualizarEmpleador)
    router.delete("/eliminarEmpleador/:id", empleador.eliminarEmpleador)
    router.get("/buscarEmpleador/:buscador", empleador.buscarEmpleador)

    app.use(router)
}