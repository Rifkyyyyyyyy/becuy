const kelasService = require('../service/kelas');

const createKelas = async (req, res) => {
  try {
    const kelas = await kelasService.createKelas(req.body);
    res.status(201).json(kelas);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getAllKelas = async (req, res) => {
  try {
    const list = await kelasService.getAllKelas();
    res.status(200).json(list);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getKelasById = async (req, res) => {
  try {
    const kelas = await kelasService.getKelasById(req.params.id);
    res.status(200).json(kelas);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

const updateKelas = async (req, res) => {
  try {
    const kelas = await kelasService.updateKelas(req.params.id, req.body);
    res.status(200).json(kelas);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

const deleteKelas = async (req, res) => {
  try {
    const kelas = await kelasService.deleteKelas(req.params.id);
    res.status(200).json({ message: 'Kelas dihapus', kelas });
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

module.exports = {
  createKelas,
  getAllKelas,
  getKelasById,
  updateKelas,
  deleteKelas
};
