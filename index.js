'use strict'

//Inisialisasi
const express = require("express")
const req = require("express/lib/request")

//implementasi
const app = express()
app.use(express.json())

//menghubungkan ke database
const db = require('./db')
db.connect(error => {
    if(error){
        console.log(error.message)
    }else{
        console.log("Nysql Connect")
    }
})

app.get("/", (req, res) => {
    res.send({
        message: "Berhasil menjalankan GET",
        data:{
            description :
            "Endpoint ini menampilkan data"
        }
    })
});

app.use("/siswa", require('./routes/siswa.route'))
app.use("/kelas", require('./routes/kelas.route'))
app.use("/petugas", require('./routes/petugas.route'))
app.use("/spp", require('./routes/spp.route'))



const port = 1000;
app.listen(port, () => {
    console.log(`App running in server ${port}`)
});