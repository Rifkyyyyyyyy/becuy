const {
  getAllDosen,
  getAllMahasiswa,
  createMahasiswa,
  createDosen,
  updateUserById,
  deleteUserById
} = require('../service/user_services');

// Get semua mahasiswa
const getAllMahasiswaController = async (req, res) => {
  try {
    const mahasiswa = await getAllMahasiswa();
    res.status(200).json({
      success: true,
      message: 'Data mahasiswa berhasil diambil',
      data: mahasiswa
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get semua dosen
const getAllDosenController = async (req, res) => {
  try {
    const dosen = await getAllDosen();
    res.status(200).json({
      success: true,
      message: 'Data dosen berhasil diambil',
      data: dosen
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Tambah mahasiswa
const createMahasiswaController = async (req, res) => {
  try {
    const mahasiswa = await createMahasiswa(req.body);
    res.status(201).json({
      success: true,
      message: 'Mahasiswa berhasil ditambahkan',
      data: mahasiswa
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Tambah dosen
const createDosenController = async (req, res) => {
  try {
    const dosen = await createDosen(req.body);
    res.status(201).json({
      success: true,
      message: 'Dosen berhasil ditambahkan',
      data: dosen
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Update user by ID
const updateUserController = async (req, res) => {
  try {
    const updatedUser = await updateUserById(req.params.id, req.body);
    res.status(200).json({
      success: true,
      message: 'User berhasil diperbarui',
      data: updatedUser
    });
  } catch (error) {
    res.status(404).json({ success: false, message: error.message });
  }
};

// Delete user by ID
const deleteUserController = async (req, res) => {
  try {
    const result = await deleteUserById(req.params.id);
    res.status(200).json({
      success: true,
      message: result.message
    });
  } catch (error) {
    res.status(404).json({ success: false, message: error.message });
  }
};

module.exports = {
  getAllMahasiswaController,
  getAllDosenController,
  createMahasiswaController,
  createDosenController,
  updateUserController,
  deleteUserController
};
