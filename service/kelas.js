const Kelas = require('../models/kelas');

const createKelas = async (data) => {
  try {
    const kelas = await Kelas.create(data);
    return kelas;
  } catch (err) {
    throw new Error('Gagal membuat kelas: ' + err.message);
  }
};

const getAllKelas = async () => {
  try {
    const kelasList = await Kelas.find()
      .populate('dosen', 'nama email')
      .populate('mata_kuliah', 'nama');
    return kelasList;
  } catch (err) {
    throw new Error('Gagal mengambil data kelas: ' + err.message);
  }
};

const getKelasById = async (id) => {
  try {
    const kelas = await Kelas.findById(id)
      .populate('dosen', 'nama email')
      .populate('mata_kuliah', 'nama');

    if (!kelas) throw new Error('Kelas tidak ditemukan');
    return kelas;
  } catch (err) {
    throw new Error('Gagal mengambil data kelas: ' + err.message);
  }
};

const updateKelas = async (id, data) => {
  try {
    const kelas = await Kelas.findByIdAndUpdate(id, data, { new: true });
    if (!kelas) throw new Error('Kelas tidak ditemukan');
    return kelas;
  } catch (err) {
    throw new Error('Gagal mengupdate kelas: ' + err.message);
  }
};

const deleteKelas = async (id) => {
  try {
    const kelas = await Kelas.findByIdAndDelete(id);
    if (!kelas) throw new Error('Kelas tidak ditemukan');
    return kelas;
  } catch (err) {
    throw new Error('Gagal menghapus kelas: ' + err.message);
  }
};

module.exports = {
  createKelas,
  getAllKelas,
  getKelasById,
  updateKelas,
  deleteKelas
};
