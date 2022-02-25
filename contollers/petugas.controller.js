'use strict'
const bcrypt = require('bcrypt')
const req = require('express/lib/request')
const res = require('express/lib/response')
const jwt = require('jsonwebtoken')
const db = require('../db')

const secret = '#$@^%$^%*&%$$@&'


function hashPassword(password){
    const salt = bcrypt.genSaltSync(10)
    return bcrypt.hashSync(password, salt)
}
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
    }, 
    registrasi: (req, res) => {
        const{
            nama,
            email,
            password
        }= req.body
        if (!nama, !email || !password) res.status(402).json({message: 'nama, email dan password harus diisi'})
        return db.query('insert into akun_siswa set ?', {nama, email, password: hashPassword(password)}, (err, result) =>{
            if(err) return res.status(500).json({err})

            return res.json({message: 'registrasi berhasil', data: result})
        })   
    },
    login: (req, res) => {
        const {
            email, 
            password
        } = req.body
        
        if( !email || !password) res.status(402).json({message: "email dan password harus diisi."})

        return db.query('select * from akun where email = ?', email , (err, result)=>{
            if(err) return res.status(500).json({err})

            const user = result[0]
            if(typeof user === 'undefined')return res.status(401).json({message: "user tidak ditemukan"})
            if(!bcrypt.compareSync(password, user.password)) return res.status(401).json({message: "email atau password tidak sesuai"})

            const token = jwt.sign({data: user}, secret)

            return res.json({message: 'login berhasil. silahkan menggunakan token dibawah ini untuk mengakses endpoint private lain', token})
        })

    },
}
