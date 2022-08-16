const express = require('express');
 
const path = require('path');

const app = express();

const port = 4001;

app.listen(port,()=>{
    console.log('listening on port '+port);
})

// routes

app.use(express.static(path.join(__dirname,'..', 'public')));

app.get('/404page', (req, res) => {
    res.sendFile(path.join(__dirname, '..','public','pages', '404page.html'));
  });


app.get('/500page', (req, res) => {
    res.sendFile(path.join(__dirname, '..','public','pages', '500page.html'));
  });

  app.get('/landing', (req, res) => {
    res.sendFile(path.join(__dirname, '..','public','pages', 'landing.html'));
  });
