'use strict' //hanya menjalankan data di file ini saja

const express = require('express')
const pendudukController = require('../contollers/siswa.controller')
const router = new express.Router();

router.post("/", pendudukController.add)
router.get("/:nisn", pendudukController.get)
router.get("/",pendudukController.read)
router.delete("/:nisn", pendudukController.delete)
router.put("/:nisn", pendudukController.edit)
module.exports = router