const express = require("express")
const routes = require("../routes/index")
const morgan = require("morgan")

module.exports = app => {
    app.set("port", process.env.PORT)

    app.use(morgan("dev"))
    app.use(express.urlencoded({extended: false}))
    app.use(express.json())

    routes(app)

    return app;
}

