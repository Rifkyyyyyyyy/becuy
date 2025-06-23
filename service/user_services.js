const User = require('../models/user'); // sesuaikan path-nya

// Get semua mahasiswa
const getAllMahasiswa = async () => {
  try {
    return await User.find({ role: 'mahasiswa' });
  } catch (error) {
    console.error('getAllMahasiswa error:', error);
    throw new Error('Gagal mengambil data mahasiswa');
  }
};

// Get semua dosen
const getAllDosen = async () => {
  try {
    console.log('dosen dipangil')
    return await User.find({ role: 'dosen' });
  } catch (error) {
    console.error('getAllDosen error:', error);
    throw new Error('Gagal mengambil data dosen');
  }
};

// Tambah mahasiswa
const createMahasiswa = async (data) => {
  try {
    const { nama, email, password, nim, jurusan, angkatan } = data;

    if (!nama || !email || !password || !nim) {
      throw new Error('Data mahasiswa tidak lengkap');
    }

    const mahasiswa = new User({
      nama,
      email,
      password,
      role: 'mahasiswa',
      nim,
      jurusan,
      angkatan
    });

    return await mahasiswa.save();
  } catch (error) {
    console.error('createMahasiswa error:', error);
    throw new Error(error.message || 'Gagal menambahkan mahasiswa');
  }
};

// Tambah dosen
const createDosen = async (data) => {
  try {
    const { nama, email, password, nidn, jurusan } = data;

    console.log(`json : ${JSON.stringify(data)}`);

    if (!nama || !email || !password || !nidn) {
      throw new Error('Data dosen tidak lengkap');
    }

    const dosen = new User({
      nama,
      email,
      password,
      role: 'dosen',
      nidn,
      jurusan
    });

    return await dosen.save();
  } catch (error) {
    console.error('createDosen error:', error);
    throw new Error(error.message || 'Gagal menambahkan dosen');
  }
};

// Update user by ID
const updateUserById = async (id, newData) => {
  try {
    const user = await User.findById(id);
    if (!user) {
      throw new Error('User tidak ditemukan');
    }

    Object.assign(user, newData);
    return await user.save();
  } catch (error) {
    console.error('updateUserById error:', error);
    throw new Error(error.message || 'Gagal memperbarui user');
  }
};

// Hapus user by ID
const deleteUserById = async (id) => {
  try {
    const user = await User.findById(id);
    if (!user) {
      throw new Error('User tidak ditemukan');
    }
    await User.findByIdAndDelete(id);
    return { message: 'User berhasil dihapus' };
  } catch (error) {
    console.error('deleteUserById error:', error);
    throw new Error(error.message || 'Gagal menghapus user');
  }
};

module.exports = {
  getAllMahasiswa,
  getAllDosen,
  createMahasiswa,
  createDosen,
  updateUserById,
  deleteUserById
};
