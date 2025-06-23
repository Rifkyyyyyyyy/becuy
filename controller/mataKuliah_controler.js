const mataKuliahService = require('../service/mataKuliah_service');

const createMataKuliah = async (req, res) => {
  try {
    const mk = await mataKuliahService.createMataKuliah(req.body);
    res.status(201).json(mk);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getAllMataKuliah = async (req, res) => {
  try {
    const list = await mataKuliahService.getAllMataKuliah();
    res.status(200).json(list);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getMataKuliahById = async (req, res) => {
  try {
    const mk = await mataKuliahService.getMataKuliahById(req.params.id);
    res.status(200).json(mk);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

const updateMataKuliah = async (req, res) => {
  try {
    const mk = await mataKuliahService.updateMataKuliah(req.params.id, req.body);
    res.status(200).json(mk);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

const deleteMataKuliah = async (req, res) => {
  try {
    const mk = await mataKuliahService.deleteMataKuliah(req.params.id);
    res.status(200).json({ message: 'Mata kuliah dihapus', mk });
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

module.exports = {
  createMataKuliah,
  getAllMataKuliah,
  getMataKuliahById,
  updateMataKuliah,
  deleteMataKuliah

}