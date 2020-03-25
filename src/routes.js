const express = require("express");

const OngControllers = require("./controllers/OngControllers");

const routes = express.Router();

routes.get("/ongs", OngControllers.index);

routes.post("/ongs", OngControllers.create);

module.exports = routes;
