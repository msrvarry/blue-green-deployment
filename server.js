// server.js
const express = require('express');
const app = express();
const port = 3000;

// Read DEPLOYMENT_COLOR and APP_VERSION from the environment
const COLOR = process.env.DEPLOYMENT_COLOR || 'UNKNOWN';
const VERSION = process.env.APP_VERSION || 'V0';

app.get('/', (req, res) => {
  // Output status, version, and color
  res.send(`<h1>App Running: ${COLOR} Environment - Version ${VERSION}</h1>`);
});

app.get('/status', (req, res) => {
  res.json({
    status: 'HEALTHY',
    version: VERSION,
    environment: COLOR
  });
});

app.listen(port, () => {
  console.log(`Node.js API listening on port ${port} in ${COLOR} env.`);
});