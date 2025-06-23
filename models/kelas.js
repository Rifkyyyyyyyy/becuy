const mongoose = require('mongoose');

const kelasSchema = new mongoose.Schema({
  nama_kelas: { type: String, required: true },
  dosen: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true // dosen wajib
  },
  mata_kuliah: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'MataKuliah',
    required: true
  },
  semester: { type: Number, required: true },
  tahun_ajaran: { type: String, required: true } // contoh: "2024/2025"
}, { timestamps: true });

module.exports = mongoose.model('Kelas', kelasSchema);
