
const express = require('express'); 
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extend: false})) 


app.get('/test', (req, res)=>{
    res.end("ini get XI RPL 6");
});


app.post(/'test', (req, res)=>{
    res.end("ini post XI RPL 6");
});


app.listen('8080', (e)=>{
    console.log(e);
});