const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const version = process.env.VERSION || "blue"; // default version

app.get("/", (req, res) => {
  res.send(`<h1>Hello from ${version} deployment!</h1>`);
});

app.listen(port, () => {
  console.log(`Running ${version} app on port ${port}`);
});
