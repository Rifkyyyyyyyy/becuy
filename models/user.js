const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  nama: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['admin', 'dosen', 'mahasiswa'],
    required: true
  },

  // Hanya diisi sesuai role
  nim: {
    type: String,
    unique: true,
    sparse: true // penting: hanya index jika data ada
  },
  nidn: {
    type: String,
    unique: true,
    sparse: true
  },

  jurusan: String,
  angkatan: Number // khusus mahasiswa
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
