'use strict' //hanya menjalankan data di file ini saja

const express = require('express')
const pendudukController = require('../contollers/petugas.controller')
const router = new express.Router();

router.post("/", pendudukController.add)
router.get("/:id_petugas", pendudukController.get)
router.get("/",pendudukController.read)
router.delete("/:id_petugas", pendudukController.delete)
router.put("/:id_petugas", pendudukController.edit)
router.post("/registrasipetugas", pendudukController.registrasi)
router.post("/loginpetugas", pendudukController.login)
module.exports = router
