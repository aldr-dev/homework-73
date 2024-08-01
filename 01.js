const express = require('express');

const app = express();
const port = 8000;

app.get('/:message', (req, res) => {
    res.send(req.params.message);
});

app.listen(port, () => {
    console.log(`Server running at http://127.0.0.1:${port}`);
});