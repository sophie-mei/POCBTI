const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

//ROUTES

app.get('/consentement_import', (req, res) => {
    res.send('');
});

app.get('/data_import', (req, res) => {
    res.send();
});


//app.listen(3000);
app.listen(PORT, ()=> {
    console.log('Server is listening on port:${PORT}');
})
    