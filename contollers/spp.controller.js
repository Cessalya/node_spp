'use strict'

const req = require('express/lib/request')
const res = require('express/lib/response')
const db = require('../db')

module.exports = {
    read: (req, res) =>{
        const sql = "select * from spp"
        db.query(sql, (err, result) => {
            if(err) throw err
            res.json({
                message: "Berhasil",
                data: result
            })
        })
    },
    add: (req, res) =>{
        const id_spp = req.body.id_spp
        const angkatan = req.body.angkatan
        const tahun_ajaran = req.body.tahun_ajaran
        const nominal = req.body.nominal
        const sql = `insert into spp (id_spp, angkatan, tahun_ajaran, nominal) values ('${id_spp}','${angkatan}', '${tahun_ajaran}','${nominal}')`
        db.query(sql, (err, result)=>{
            if(err) throw err
            res.json({
                message: "Berhasil Menambahkan Data"
            })
        })
    },
    get: (req, res) =>{
        const id_spp = req.params.id_spp
        const sql = `select * from spp where id_spp = '${id_spp}'`
        db.query(sql, (err, result) => {
            if(err) throw err
            res.json({
                result
            })
        })
    },
    edit: (req, res) =>{
        const id_spp = req.body.id_spp
        const angkatan = req.body.angkatan
        const tahun_ajaran = req.body.tahun_ajaran
        const nominal = req.body.nominal
        const sql = `update spp set id_spp='${id_spp}',angkatan='${angkatan}', tahun_ajaran='${tahun_ajaran}', nominal='${nominal}' where id_spp='${id_spp}'`
        db.query(sql, (err, result) =>{
            if(err) throw err
            res.json({
                message: "Berhasil mengubah data"
            })
        })
    },
    delete: (req, res) =>{
        const id_spp = req.params.id_spp
        const sql = `delete from siswa where id_spp='${id_spp}'`
        db.query(sql, (err, result) =>{
            if(err) throw err
            res.json({
                message: "Berhasil menghapus data"
            })
        })
    }
}