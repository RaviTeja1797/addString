const express = require("express");
const expressInstance = express();

expressInstance.get("/", (request, response) => {
  response.send("Express JS");
});

expressInstance.listen(3000);

module.exports = expressInstance;
