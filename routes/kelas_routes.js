const express = require('express');
const router = express.Router();
const kelasController = require('../controller/kelas_controler');

// Prefix: /kelas
router.post('/kelas', kelasController.createKelas);
router.get('/kelas', kelasController.getAllKelas);
router.get('/kelas/:id', kelasController.getKelasById);
router.put('/kelas/:id', kelasController.updateKelas);
router.delete('/kelas/:id', kelasController.deleteKelas);

module.exports = router;
