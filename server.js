const express = require('express');
const { handleScore } = require('./controllers/score');
const port = 3000;

const app = express();
app.set('query parser', 'simple');
app.use(express.json());

app.get('/', (req, res) => { handleScore(req, res) });

app.listen(port, () => console.log('running on port', port));