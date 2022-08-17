const express = require('express');
const { appendFile } = require('fs');
 
const path = require('path');

const app = express();

const port = 4003;

const {serverError, clientErrors} = require('./routes')

app.listen(port,()=>{
    console.log('listening on port '+port);
})



// routes codes
app.use(express.static(path.join(__dirname,'..', 'public')));



app.use("/api",() => {
  throw new Error('not implemented');
});

app.use(clientErrors);
app.use(serverError);
