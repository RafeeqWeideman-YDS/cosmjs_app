const express = require('express');
const { getProposals } = require('./api');

const app = express();
const port = 5000;

app.get('/proposals', async (req, res) => {
  const proposals = await getProposals();
  res.json(proposals);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
