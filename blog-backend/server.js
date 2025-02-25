require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const Blog = require("./models/Blog");
const cors = require("cors");
const multer = require("multer");
const { v2: cloudinary } = require("cloudinary");
const { CloudinaryStorage } = require("multer-storage-cloudinary");

const app = express();
const PORT = process.env.PORT || 5000;

// 🌩️ Konfiguracja Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// 🗂️ Konfiguracja Multer + Cloudinary
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "blogs", // 📁 Folder w Cloudinary
    allowed_formats: ["jpg", "jpeg", "png", "webp"],
    transformation: [{ width: 800, height: 600, crop: "limit" }], // Opcjonalne: skalowanie
  },
});

const upload = multer({ storage });

// 🛡️ Middleware
app.use(cors());
app.use(express.json());

// 📄 Pobieranie wszystkich blogów
app.get("/api/blogs", async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (err) {
    console.error("❌ Błąd pobierania blogów:", err);
    res.status(500).json({ message: "❌ Wewnętrzny błąd serwera" });
  }
});

// 📝 Tworzenie posta z przesyłaniem pliku do Cloudinary
app.post("/api/blogs", upload.single("image"), async (req, res) => {
  try {
    const { title, content, tags } = req.body;

    if (!title || !content) {
      return res.status(400).json({ message: "❌ Brak tytułu lub treści" });
    }

    const parsedTags = tags ? JSON.parse(tags) : [];

    const imageUrl = req.file ? req.file.path : null; // Cloudinary zwraca URL obrazu

    const blog = new Blog({ title, content, image: imageUrl, tags: parsedTags });
    const savedBlog = await blog.save();

    res.status(201).json(savedBlog);
  } catch (err) {
    console.error("❌ Błąd tworzenia posta:", err);
    res.status(500).json({ message: "❌ Wewnętrzny błąd serwera" });
  }
});

// 🗑️ Usuwanie posta i pliku z Cloudinary
app.delete("/api/blogs/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: "❌ Post nie znaleziony" });

    // 🧹 Usuwanie obrazu z Cloudinary
    if (blog.image) {
      const publicId = blog.image.split("/").pop().split(".")[0]; // Pobiera public_id z URL
      await cloudinary.uploader.destroy(`blogs/${publicId}`).catch(() => {
        console.warn("⚠️ Nie znaleziono obrazu w Cloudinary");
      });
    }

    await Blog.findByIdAndDelete(req.params.id);
    res.json({ message: "✅ Post usunięty" });
  } catch (err) {
    console.error("❌ Błąd usuwania:", err);
    res.status(500).json({ message: "❌ Wewnętrzny błąd serwera" });
  }
});

// 🚀 Połączenie z MongoDB i uruchomienie serwera
mongoose.connect("mongodb+srv://Admin:Globalzone123@cluster0.hcrga.mongodb.net/blogDB?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("✅ Połączono z MongoDB");
    app.listen(PORT, () => console.log(`🚀 Serwer działa`));
  })
  .catch(err => console.error("❌ Błąd połączenia z MongoDB:", err));
