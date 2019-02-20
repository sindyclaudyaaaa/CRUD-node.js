// Create Server

const express = require('express'); //import module express
const app = express(); //eksekusi module express
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const DBurl = "mongodb://127.0.0.1:27017/";
const DBname = "data_coba";

let dbo = null;

MongoClient.connect(DBurl, (error, db) => {
    if(error) throw error;
    dbo = db.db(DBname);
});



app.get('/coba', (request, response) => {
    dbo.collection("data").find().toArray((err, res) => {
        if(err) throw err;
        response.json(res); 
    })
});

app.use(bodyParser.urlencoded({extend: false}))

app.get('/siswa/:nama', (request, respone)=>{
    let namaSiswa = request.params.nama;
    response.end("menampilkan nama siswa "+ namaSiswa);
});

app.post('/siswa', (request, response)=>{
    let namaSiswa = request.body.nama;
    let alamat = request.body.alamat;
    response.end('menampilkan siswa baru ' + namaSiswa + ', yang beralamat di ' + alamat);
});

app.delete('/siswa/:id', (request, response)=>{
    let id = request.params.id;
    let namaSiswa = request.body.nama;
    response.end('id '+ id + ' telah dihapus, dengan nama: '+namaSiswa);
});

app.put('/siswa/:id', (request, response)=>{
    let id = request.params.id;
    let namaSiswa = request.body.nama;
    let alamat = request.body.alamat;
    response.end('siswa dengan id: '+id+' telah diupdate')
});

app.listen('6789');