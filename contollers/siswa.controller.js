'use strict'

const req = require('express/lib/request')
const res = require('express/lib/response')
const db = require('../db')

module.exports = {
    read: (req, res) =>{
        const sql = "select * from siswa"
        db.query(sql, (err, result) => {
            if(err) throw err
            res.json({
                message: "Berhasil",
                data: result
            })
        })
    },
    add: (req, res) =>{
        const nisn = req.body.nisn
        const nis = req.body.nis
        const nama = req.body.nama
        const id_kelas = req.body.id_kelas
        const alamat = req.body.alamat
        const level = req.body.level
        const sql = `insert into siswa (nisn, nis, nama, id_kelas, alamat, level) values ('${nisn}','${nis}', '${nama}','${id_kelas}','${alamat}','${level}')`
        db.query(sql, (err, result)=>{
            if(err) throw err
            res.json({
                message: "Berhasil Menambahkan Data"
            })
        })
    },
    get: (req, res) =>{
        const nisn = req.params.nisn
        const sql = `select * from siswa where id = '${nisn}'`
        db.query(sql, (err, result) => {
            if(err) throw err
            res.json({
                result
            })
        })
    },
    edit: (req, res) =>{
        const nisn = req.body.nisn
        const nis = req.body.nis
        const nama = req.body.nama
        const id_kelas = req.body.id_kelas
        const alamat = req.body.alamat
        const level = req.body.level
        const sql = `update siswa set nisn='${nisn}',nis='${nis}', nama='${nama}', id_kelas='${id_kelas}', alamat='${alamat}', level='${level}' where nisn='${nisn}'`
        db.query(sql, (err, result) =>{
            if(err) throw err
            res.json({
                message: "Berhasil mengubah data"
            })
        })
    },
    delete: (req, res) =>{
        const nisn = req.params.nisn
        const sql = `delete from siswa where nisn='${nisn}'`
        db.query(sql, (err, result) =>{
            if(err) throw err
            res.json({
                message: "Berhasil menghapus data"
            })
        })
    }
}