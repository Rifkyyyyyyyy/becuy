const mongoose = require('mongoose');

const krsSchema = new mongoose.Schema({
  mahasiswa: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true // role = mahasiswa
  },
  kelas: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Kelas',
    required: true
  },
  semester: { type: Number, required: true },
  tahun_ajaran: { type: String, required: true }, // "2024/2025"
}, { timestamps: true });

module.exports = mongoose.model('Krs', krsSchema);
