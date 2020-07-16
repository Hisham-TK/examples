const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hi there 2");
});

app.listen(8080, () => console.log("App starts on 8080"));
 