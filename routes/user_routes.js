const express = require('express');
const router = express.Router();

const {
  getAllMahasiswaController,
  getAllDosenController,
  createMahasiswaController,
  createDosenController,
  updateUserController,
  deleteUserController
} = require('../controller/user_controler'); // pastikan path-nya sesuai

// GET semua mahasiswa
router.get('/mahasiswa', getAllMahasiswaController);

// GET semua dosen
router.get('/dosen', getAllDosenController);

// POST tambah mahasiswa
router.post('/mahasiswa', createMahasiswaController);

// POST tambah dosen
router.post('/dosen', createDosenController);

// PUT update user by ID
router.put('/user/:id', updateUserController);

// DELETE user by ID
router.delete('/user/:id', deleteUserController);

module.exports = router;
