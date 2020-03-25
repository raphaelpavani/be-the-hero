const express = require("express");

const routes = express.Router();

routes.post("/ongs", (request, response) => {
  const body = request.body;

  return response.json({
    evento: "semana Omnistack11.0",
    aluno: "Raphael Pavani"
  });
});

module.exports = routes;
