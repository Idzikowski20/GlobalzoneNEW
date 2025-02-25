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
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1E9);
    cb(null, `${file.fieldname}-${uniqueSuffix}${path.extname(file.originalname)}`);
  },
});
const upload = multer({ storage });

// 🔥 Usuwanie pliku
const deleteFile = (filePath) => {
  if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
};

// 🌍 Strona główna
app.get("/", (req, res) => res.send("Witaj na mojej aplikacji!"));

// 📄 Pobieranie wszystkich blogów
app.get("/api/blogs", async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: "❌ Błąd pobierania blogów" });
  }
});

// 📄 Pobieranie pojedynczego bloga
app.get("/api/blogs/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: "❌ Post nie znaleziony" });
    res.json(blog);
  } catch (err) {
    res.status(500).json({ message: "❌ Błąd pobierania posta" });
  }
});

// 📝 Tworzenie posta (z przesyłaniem pliku)
app.post("/api/blogs", upload.single("image"), async (req, res) => {
  try {
    const { title, content, tags } = req.body;

    if (!title || !content) return res.status(400).json({ message: "❌ Brak tytułu lub treści" });

    const parsedTags = typeof tags === "string" ? JSON.parse(tags) : [];
    const image = req.file ? `/uploads/${req.file.filename}` : null;

    const blog = new Blog({ title, content, image, tags: parsedTags });
    const savedBlog = await blog.save();

    res.status(201).json(savedBlog);
  } catch (err) {
    console.error("❌ Błąd tworzenia posta:", err);
    res.status(400).json({ message: "❌ Nie udało się utworzyć posta" });
  }
});

// ✏️ Edycja posta (z opcją zmiany obrazka)
app.put("/api/blogs/:id", upload.single("image"), async (req, res) => {
  try {
    const { title, content, tags } = req.body;
    const blog = await Blog.findById(req.params.id);

    if (!blog) return res.status(404).json({ message: "❌ Post nie znaleziony" });

    // Usuwanie starego obrazka, jeśli przesłano nowy
    if (req.file && blog.image) deleteFile(path.join(__dirname, blog.image));

    blog.title = title || blog.title;
    blog.content = content || blog.content;
    blog.tags = tags ? JSON.parse(tags) : blog.tags;
    blog.image = req.file ? `/uploads/${req.file.filename}` : blog.image;

    const updatedBlog = await blog.save();
    res.json(updatedBlog);
  } catch (err) {
    console.error("❌ Błąd edycji:", err);
    res.status(400).json({ message: "❌ Nie udało się edytować posta" });
  }
});

// 🗑️ Usuwanie posta (z kasowaniem obrazka)
app.delete("/api/blogs/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: "❌ Post nie znaleziony" });

    if (blog.image) deleteFile(path.join(__dirname, blog.image));

    await Blog.findByIdAndDelete(req.params.id);
    res.json({ message: "✅ Post usunięty" });
  } catch (err) {
    console.error("❌ Błąd usuwania:", err);
    res.status(500).json({ message: "❌ Nie udało się usunąć posta" });
  }
});

// 🚀 Uruchomienie serwera
app.listen(PORT, () => console.log(`🚀 Serwer działa`));
