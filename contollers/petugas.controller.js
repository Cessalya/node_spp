'use strict'

const req = require('express/lib/request')
const res = require('express/lib/response')
const db = require('../db')

module.exports = {
    read: (req, res) =>{
        const sql = "select * from petugas"
        db.query(sql, (err, result) => {
            if(err) throw err
            res.json({
                message: "Berhasil",
                data: result
            })
        })
    },
    add: (req, res) =>{
        const username = req.body.username
        const password = req.body.password
        const nama_petugas = req.body.nama_petugas
        const level = req.body.level
        const sql = `insert into petugas (username, password, nama_petugas, level) values ('${username}','${password}', '${nama_petugas}','${level}')`
        db.query(sql, (err, result)=>{
            if(err) throw err
            res.json({
                message: "Berhasil Menambahkan Data"
            })
        })
    },
    get: (req, res) =>{
        const id_petugas = req.params.id_petugas
        const sql = `select * from petugas where id = '${id_petugas}'`
        db.query(sql, (err, result) => {
            if(err) throw err
            res.json({
                result
            })
        })
    },
    edit: (req, res) =>{
        const username = req.body.username
        const password = req.body.password
        const nama_petugas = req.body.nama_petugas
        const level = req.body.level
        const sql = `update siswa set username='${username}',password='${password}', nama_petugas='${nama_petugas}', level='${level}' where id_petugas='${id_petugas}'`
        db.query(sql, (err, result) =>{
            if(err) throw err
            res.json({
                message: "Berhasil mengubah data"
            })
        })
    },
    delete: (req, res) =>{
        const id_petugas = req.params.id_petugas
        const sql = `delete from petugas where id_petugas='${id_petugas}'`
        db.query(sql, (err, result) =>{
            if(err) throw err
            res.json({
                message: "Berhasil menghapus data"
            })
        })
    }
}