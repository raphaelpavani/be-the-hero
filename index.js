const express = require("express");

const app = express();

app.get("/", (request, response) => {
  return response.json({
    evento: "semana Omnistack11.0",
    aluno: "Raphael"
  });
});

app.listen(3333);
