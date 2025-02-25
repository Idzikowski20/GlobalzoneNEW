const express = require("express");
const mongoose = require("mongoose");
const Blog = require("./models/Blog");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // Udostępnianie folderu 'uploads'

// Połączenie z MongoDB
mongoose.connect("mongodb+srv://Admin:Globalzone123@cluster0.hcrga.mongodb.net/blogDB?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => console.log("✅ Połączono z MongoDB")).on("error", console.error);

// Konfiguracja multer - zapis plików
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, `${file.fieldname}-${uniqueSuffix}${path.extname(file.originalname)}`);
  },
});
const upload = multer({ storage });

// 🔥 Usuwanie pliku
const deleteFile = (filePath) => {
  if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
};

// 📝 Tworzenie posta (z przesyłaniem pliku)
app.post("/api/blogs", upload.single("image"), async (req, res) => {
  try {
    const { title, content, tags } = req.body;

    console.log("✅ Odebrane dane:", req.body);
    console.log("📂 Odebrany plik:", req.file);

    if (!title || !content) {
      console.warn("⚠️ Brak tytułu lub treści");
      return res.status(400).json({ message: "❌ Brak tytułu lub treści" });
    }

    let parsedTags = [];
    try {
      parsedTags = Array.isArray(tags) ? tags : JSON.parse(tags);
      if (!Array.isArray(parsedTags)) throw new Error("Tags must be an array");
    } catch (err) {
      console.error("❌ Błąd parsowania tags:", err.message);
      return res.status(400).json({ message: "❌ Błąd w formacie tagów. Powinna być to tablica." });
    }

    const image = req.file ? `/uploads/${req.file.filename}` : null;

    const blog = new Blog({ title, content, image, tags: parsedTags });
    const savedBlog = await blog.save();

    console.log("✅ Post zapisany:", savedBlog);
    res.status(201).json(savedBlog);
  } catch (err) {
    console.error("❌ Błąd podczas zapisu posta:", err);
    res.status(500).json({ message: "❌ Błąd serwera - nie udało się utworzyć posta" });
  }
});

// 🚀 Uruchomienie serwera
app.listen(PORT, () => console.log(`🚀 Serwer działa na http://localhost:${PORT}`));
