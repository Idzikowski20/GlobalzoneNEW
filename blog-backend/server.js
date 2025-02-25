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
    transformation: [{ width: 800, height: 600, crop: "limit" }],
  },
});

const upload = multer({ storage });

// 🛡️ Middleware
app.use(cors({ origin: "*" }));
app.use(express.json());

// 🌍 Sprawdzenie działania serwera
app.get("/", (req, res) => {
  res.send("✅ Serwer działa! Sprawdź dostępne endpointy w dokumentacji.");
});

// 📄 Pobieranie wszystkich blogów
app.get("/api/blogs", async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json(blogs);
  } catch (err) {
    console.error("❌ Błąd pobierania blogów:", err);
    res.status(500).json({ message: "❌ Błąd serwera podczas pobierania blogów" });
  }
});

// 📄 Pobieranie pojedynczego bloga po ID
app.get("/api/blogs/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "❌ Nieprawidłowy format ID." });
    }

    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).json({ message: "❌ Post nie znaleziony" });
    }

    res.json(blog);
  } catch (error) {
    console.error("❌ Błąd pobierania posta:", error);
    res.status(500).json({ message: "❌ Błąd serwera podczas pobierania posta" });
  }
});

// 📝 Tworzenie nowego posta
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
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "❌ Nieprawidłowy format ID." });
    }

    const blog = await Blog.findById(id);
    if (!blog) return res.status(404).json({ message: "❌ Post nie znaleziony" });

    // 🧹 Usuwanie obrazu z Cloudinary, jeśli istnieje
    if (blog.image) {
      const publicId = blog.image.split("/").pop().split(".")[0];
      try {
        await cloudinary.uploader.destroy(`blogs/${publicId}`);
      } catch (err) {
        console.warn("⚠️ Nie udało się usunąć obrazu z Cloudinary:", err);
      }
    }

    await Blog.findByIdAndDelete(id);
    res.json({ message: "✅ Post usunięty" });
  } catch (err) {
    console.error("❌ Błąd usuwania posta:", err);
    res.status(500).json({ message: "❌ Wewnętrzny błąd serwera" });
  }
});

// 🚀 Połączenie z MongoDB i uruchomienie serwera
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("✅ Połączono z MongoDB");
    app.listen(PORT, () => console.log(`🚀 Serwer działa na porcie ${PORT}`));
  })
  .catch(err => console.error("❌ Błąd połączenia z MongoDB:", err));
