const express = require('express');
 const fetch = require('node-fetch')


const path = require('path');

const app = express();

const port = process.env.PORT||4003;

const {serverError, clientErrors} = require('./routes')

app.use(express.static(path.join(__dirname,'..', 'public')));

app.get('/authors/:athName',(req,res) => {
  fetch(`https://goquotes-api.herokuapp.com/api/v1/random?count=2500`)
.then(response =>{
  return  response.json()
})
.then(data => {
  const arr2 = data.quotes.filter((ele)=>{
    return ele.author === req.params.athName;
  });
  res.json(arr2)
})
.catch(err => console.log(err, "err"));
})


app.use(clientErrors);
app.use(serverError);

app.listen(port,()=>{
  console.log('listening on port '+port);
})
 