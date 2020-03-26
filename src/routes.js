const express = require("express");

const OngControllers = require("./controllers/OngControllers");
const IncidentControllers = require("./controllers/incidentControllers");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

const routes = express.Router();

routes.post("/session", SessionController.create);

routes.get("/ongs", OngControllers.index);
routes.post("/ongs", OngControllers.create);

routes.get("/profile", ProfileController.index);

routes.get("/incidents", IncidentControllers.index);
routes.post("/incidents", IncidentControllers.create);
routes.delete("/incidents/:id", IncidentControllers.delete);

module.exports = routes;
