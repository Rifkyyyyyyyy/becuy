const User = require('../models/user');
const crypto = require('crypto');

const hashPassword = (password) => {
  return crypto.createHash('sha256').update(password).digest('hex');
};

const registerUser = async (data) => {
  const { nama, email, password, role, nim, nidn, jurusan, angkatan } = data;

  const existingUser = await User.findOne({ email });
  if (existingUser) throw new Error('Email sudah terdaftar');

  const hashedPassword = hashPassword(password);

  const user = new User({
    nama,
    email,
    password: hashedPassword,
    role,
    nim: role === 'mahasiswa' ? nim : undefined,
    nidn: role === 'dosen' ? nidn : undefined,
    jurusan,
    angkatan: role === 'mahasiswa' ? angkatan : undefined
  });

  await user.save();
  return user;
};

const loginUser = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error('Email tidak ditemukan');

  const hashedPassword = hashPassword(password);
  if (user.password !== hashedPassword) throw new Error('Password salah');

  return user;
};

module.exports = { registerUser, loginUser };
