'use strict' //hanya menjalankan data di file ini saja

const express = require('express')
const pendudukController = require('../contollers/spp.controller')
const router = new express.Router();

router.post("/", pendudukController.add)
router.get("/:id_spp", pendudukController.get)
router.get("/",pendudukController.read)
router.delete("/:id_spp", pendudukController.delete)
router.put("/:id_spp", pendudukController.edit)
module.exports = router