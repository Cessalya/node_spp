const mysql = require("mysql")

//koneksi
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "node_spp"
})

module.exports = db;