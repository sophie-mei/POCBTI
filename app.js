const express = require('express');
const app = express();

//ROUTES

app.get('/consentement_import', (req, res) => {
    res.send('x');
});

app.get('/data_import', (req, res) => {
    res.send();
});


app.listen(3000);
    