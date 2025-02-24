const express = require("express");
const mongoose = require("mongoose");
const Blog = require("./models/Blog");
var cors = require('cors')
const app = express();
const PORT = 5000;
// Middleware
app.use(cors());
app.use(express.json());

// Połączenie z MongoDB za pomocą Mongoose
mongoose.connect("mongodb+srv://Admin:Globalzone123@cluster0.hcrga.mongodb.net/blogDB?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Błąd połączenia z MongoDB:"));
db.once("open", () => console.log("✅ Połączono z MongoDB"));

app.get('/', (req, res) => {
  res.send('Witaj na mojej aplikacji!');
});

// Pobieranie wszystkich blogów
app.get("/api/blogs", async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Pobieranie pojedynczego bloga
app.get("/api/blogs/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: "Post nie znaleziony" });
    res.json(blog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Tworzenie nowego posta
app.post("/api/blogs", async (req, res) => {
  const { title, content, image, tags } = req.body;
  const blog = new Blog({ title, content, image, tags });
  try {
    const savedBlog = await blog.save();
    res.status(201).json(savedBlog);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Edycja posta
app.put("/api/blogs/:id", async (req, res) => {
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedBlog) return res.status(404).json({ message: "Post nie znaleziony" });
    res.json(updatedBlog);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Usuwanie posta
app.delete("/api/blogs/:id", async (req, res) => {
  try {
    const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
    if (!deletedBlog) return res.status(404).json({ message: "Post nie znaleziony" });
    res.json({ message: "Post usunięty" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Uruchomienie serwera
app.listen(PORT, () => console.log(`🚀 Serwer działa na https://globalzone-backend.onrender.com`));
