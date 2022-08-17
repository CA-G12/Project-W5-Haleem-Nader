const express = require('express');
const { appendFile } = require('fs');
 


const path = require('path');

const app = express();

const port = process.env.PORT||4003;

const {serverError, clientErrors} = require('./routes')





// routes codes
app.use((req,res,next)=>{
  console.log(req.url);
  next();
})




app.use(express.static(path.join(__dirname,'..', 'public')));


app.get('/authors/:athName',(req,res) => {
  console.log(req.params.athName);
})


app.use("/api",() => {
  throw new Error('not implemented');
});



app.use(clientErrors);
app.use(serverError);

app.listen(port,()=>{
  console.log('listening on port '+port);
})
