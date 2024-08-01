const express = require('express');
const Vigenere = require('caesar-salad').Vigenere;
const app = express();
const port = 8000;
const password = 'password';

app.get('/:message', (req, res) => {
   return res.send(req.params.message);
});

app.get('/encode/:message', (req, res) => {
  return res.send(Vigenere.Cipher(password).crypt(req.params.message));
});

app.get('/decode/:message', (req, res) => {
   return res.send(Vigenere.Decipher(password).crypt(req.params.message));
});

app.listen(port, () => {
    console.log(`Server running at http://127.0.0.1:${port}`);
});