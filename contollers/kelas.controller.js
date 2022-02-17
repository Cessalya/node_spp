'use strict'

const req = require('express/lib/request')
const res = require('express/lib/response')
const db = require('../db')

module.exports = {
    read: (req, res) =>{
        const sql = "select * from kelas"
        db.query(sql, (err, result) => {
            if(err) throw err
            res.json({
                message: "Berhasil",
                data: result
            })
        })
    },
    add: (req, res) =>{
        const id_kelas = req.body.id_kelas
        const nama_kelas = req.body.nama_kelas
        const jurusan = req.body.jurusan
        const angkatan = req.body.angkatan
        const sql = `insert into kelas (id_kelas, nama_kelas, jurusan, angkatan) values ('${id_kelas}','${nama_kelas}', '${jurusan}','${angkatan}')`
        db.query(sql, (err, result)=>{
            if(err) throw err
            res.json({
                message: "Berhasil Menambahkan Data"
            })
        })
    },
    get: (req, res) =>{
        const id_kelas = req.params.id_kelas
        const sql = `select * from kelas where id = '${id_kelas}'`
        db.query(sql, (err, result) => {
            if(err) throw err
            res.json({
                result
            })
        })
    },
    edit: (req, res) =>{
        const id_kelas = req.body.id_kelas
        const nama_kelas = req.body.nama_kelas
        const jurusan = req.body.jurusan
        const angkatan = req.body.angkatan
        const sql = `update kelas set id_kelas='${id_kelas}',nama_kelas='${nama_kelas}', jurusan='${jurusan}', angkatan='${angkatan}', where id_kelas='${id_kelas}'`
        db.query(sql, (err, result) =>{
            if(err) throw err
            res.json({
                message: "Berhasil mengubah data"
            })
        })
    },
    delete: (req, res) =>{
        const id_kelas = req.params.id_kelas
        const sql = `delete from kelas where id_kelas='${id_kelas}'`
        db.query(sql, (err, result) =>{
            if(err) throw err
            res.json({
                message: "Berhasil menghapus data"
            })
        })
    }
}