const express = require('express');
const app = express();
//import request from "request";
//import post from "post";
const request = require("request");
const post = request.post;
const PORT = process.env.PORT || 4000;

//ROUTES

//app.get('/consentement_import', (req, res) => {
    //res.send('');
//});

app.get('/data/import', (req, res) => {
    res.send();
});



app.post("/consent/import", async function (req, res) {

  // Request body validation
  if (req.body.serviceExportUrl != undefined && req.body.signedConsent != undefined) {

    const serviceExportUrl = req.body.serviceExportUrl;

    // Send request to the EXPORT SERVICE's data export endpoint
    request.post(
      {
        url: serviceExportUrl,
        form: {
          signedConsent: req.body.signedConsent,
          dataImportUrl: req.body.dataImportUrl,
        },
      },
      function (err, response, body) {
        // Do stuff in the request callback if you wish
      }
    );

    return res.status(200).json({
      success: true,
      message:"Data export request successfully sent to the export service."
    });

  } else {
    res.status(400).json({error: "missing-body-param-error", message: "Missing parameters from the request body." });
  }
});

app.listen(PORT, ()=> {
    console.log('Server is listening on port:${PORT}');
})
    