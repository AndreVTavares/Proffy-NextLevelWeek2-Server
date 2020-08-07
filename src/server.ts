import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  response.send('Hellooow')
});

app.listen(3333, () => {
  console.log('Servidor operando...');
});
