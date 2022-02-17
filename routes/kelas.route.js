'use strict' //hanya menjalankan data di file ini saja

const express = require('express')
const pendudukController = require('../contollers/kelas.controller')
const router = new express.Router();

router.post("/", pendudukController.add)
router.get("/:id_kelas", pendudukController.get)
router.get("/",pendudukController.read)
router.delete("/:id_kelas", pendudukController.delete)
router.put("/:id_kelas", pendudukController.edit)
module.exports = router