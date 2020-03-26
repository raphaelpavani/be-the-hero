const express = require("express");

const OngControllers = require("./controllers/OngControllers");
const IncidentControllers = require("./controllers/incidentControllers");

const routes = express.Router();

routes.get("/ongs", OngControllers.index);

routes.post("/ongs", OngControllers.create);

routes.get("/incidents", IncidentControllers.index);
routes.post("/incidents", IncidentControllers.create);
routes.delete("/incidents/:id", IncidentControllers.delete);

module.exports = routes;
