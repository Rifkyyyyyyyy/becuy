const MataKuliah = require('../models/mataKuliah');

const createMataKuliah = async (data) => {
  try {
    const mk = await MataKuliah.create(data);
    return mk;
  } catch (err) {
    throw new Error('Gagal menambahkan mata kuliah: ' + err.message);
  }
};

const getAllMataKuliah = async () => {
  try {
    const list = await MataKuliah.find();
    return list;
  } catch (err) {
    throw new Error('Gagal mengambil data mata kuliah: ' + err.message);
  }
};

const getMataKuliahById = async (id) => {
  try {
    const mk = await MataKuliah.findById(id);
    if (!mk) throw new Error('Mata kuliah tidak ditemukan');
    return mk;
  } catch (err) {
    throw new Error('Gagal mengambil mata kuliah: ' + err.message);
  }
};

const updateMataKuliah = async (id, data) => {
  try {
    const mk = await MataKuliah.findByIdAndUpdate(id, data, { new: true });
    if (!mk) throw new Error('Mata kuliah tidak ditemukan');
    return mk;
  } catch (err) {
    throw new Error('Gagal mengupdate mata kuliah: ' + err.message);
  }
};

const deleteMataKuliah = async (id) => {
  try {
    const mk = await MataKuliah.findByIdAndDelete(id);
    if (!mk) throw new Error('Mata kuliah tidak ditemukan');
    return mk;
  } catch (err) {
    throw new Error('Gagal menghapus mata kuliah: ' + err.message);
  }
};

module.exports = {
  createMataKuliah,
  getAllMataKuliah,
  getMataKuliahById,
  updateMataKuliah,
  deleteMataKuliah
};
