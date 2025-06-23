const krsService = require('../service/krs_service');

const createKrs = async (req, res) => {
  try {
    const krs = await krsService.createKrs(req.body);
    res.status(201).json(krs);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getAllKrs = async (req, res) => {
  try {
    const list = await krsService.getAllKrs();
    res.status(200).json(list);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getKrsById = async (req, res) => {
  try {
    const krs = await krsService.getKrsById(req.params.id);
    res.status(200).json(krs);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

const updateKrs = async (req, res) => {
  try {
    const krs = await krsService.updateKrs(req.params.id, req.body);
    res.status(200).json(krs);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

const deleteKrs = async (req, res) => {
  try {
    const krs = await krsService.deleteKrs(req.params.id);
    res.status(200).json({ message: 'KRS dihapus', krs });
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

module.exports = {
  createKrs,
  getAllKrs,
  getKrsById,
  updateKrs,
  deleteKrs
};
