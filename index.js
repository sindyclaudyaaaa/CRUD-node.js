// Create Server
const express = require('express'); //import module express
const app = express(); //eksekusi module express
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extend: false}))

//eksekusi express dgn memanggil variabel app
app.get('/test', function(request, respone){
    respone.send("abcdefgh")
})

app.listen('12345');