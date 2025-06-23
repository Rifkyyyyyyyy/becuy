const mongoose = require('mongoose');

const mataKuliahSchema = new mongoose.Schema({
  kode: { type: String, required: true, unique: true },
  nama: { type: String, required: true },
  sks: { type: Number, default: 3 },
}, { timestamps: true });

module.exports = mongoose.model('MataKuliah', mataKuliahSchema);
