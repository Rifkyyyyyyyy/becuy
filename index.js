require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();

const auth = require('./routes/auth_routes')
const kelas = require('./routes/kelas_routes')
const krs = require('./routes/krs_routes')
const mataKuliah = require('./routes/matakuliah_routes')
const user = require('./routes/user_routes')


// ===========================
// 🔗 Koneksi ke MongoDB
// ===========================
mongoose.connect('mongodb://127.0.0.1:27017/unpam', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('✅ MongoDB connected'))
  .catch((err) => console.error('❌ MongoDB error:', err.message));

// ===========================
// 🔧 Middleware
// ===========================
app.use(express.json());


app.use(auth);
app.use(kelas);
app.use(krs);
app.use(mataKuliah);
app.use(user)


const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
