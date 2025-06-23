const express = require('express');
const router = express.Router();
const controller = require('../controller/mataKuliah_controler');

// prefix: /matakuliah
router.post('/matakuliah', controller.createMataKuliah);
router.get('/matakuliah', controller.getAllMataKuliah);
router.get('/matakuliah/:id', controller.getMataKuliahById);
router.put('/matakuliah/:id', controller.updateMataKuliah);
router.delete('/matakuliah/:id', controller.deleteMataKuliah);

module.exports = router;
