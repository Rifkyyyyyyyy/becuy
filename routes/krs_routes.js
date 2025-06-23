const express = require('express');
const router = express.Router();
const controller = require('../controller/krs_controller');

// prefix: /krs
router.post('/krs', controller.createKrs);
router.get('/krs', controller.getAllKrs);
router.get('/krs/:id', controller.getKrsById);
router.put('/krs/:id', controller.updateKrs);
router.delete('/krs/:id', controller.deleteKrs);

module.exports = router;
