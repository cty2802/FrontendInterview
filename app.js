import express from 'express';
import path from 'path';
import { getResponse } from './app/helper/service.js';

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/items/', (req, res) => {
  const page = +req.query.page || 1;

  res.send(getResponse(page));
});

app.listen(port, () => {
  console.log(`Test project is here: http://localhost:${port}`);
});



