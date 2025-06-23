const Krs = require('../models/krs');

const createKrs = async (data) => {
  try {
    const krs = await Krs.create(data);
    return krs;
  } catch (err) {
    throw new Error('Gagal membuat KRS: ' + err.message);
  }
};

const getAllKrs = async () => {
  try {
    const list = await Krs.find()
      .populate('mahasiswa', 'nama nim email')
      .populate({
        path: 'kelas',
        populate: {
          path: 'mata_kuliah dosen',
          select: 'nama kode'
        }
      });
    return list;
  } catch (err) {
    throw new Error('Gagal mengambil data KRS: ' + err.message);
  }
};

const getKrsById = async (id) => {
  try {
    const krs = await Krs.findById(id)
      .populate('mahasiswa', 'nama nim email')
      .populate({
        path: 'kelas',
        populate: {
          path: 'mata_kuliah dosen',
          select: 'nama kode'
        }
      });

    if (!krs) throw new Error('KRS tidak ditemukan');
    return krs;
  } catch (err) {
    throw new Error('Gagal mengambil data KRS: ' + err.message);
  }
};

const updateKrs = async (id, data) => {
  try {
    const krs = await Krs.findByIdAndUpdate(id, data, { new: true });
    if (!krs) throw new Error('KRS tidak ditemukan');
    return krs;
  } catch (err) {
    throw new Error('Gagal mengupdate KRS: ' + err.message);
  }
};

const deleteKrs = async (id) => {
  try {
    const krs = await Krs.findByIdAndDelete(id);
    if (!krs) throw new Error('KRS tidak ditemukan');
    return krs;
  } catch (err) {
    throw new Error('Gagal menghapus KRS: ' + err.message);
  }
};

module.exports = {
  createKrs,
  getAllKrs,
  getKrsById,
  updateKrs,
  deleteKrs
};
