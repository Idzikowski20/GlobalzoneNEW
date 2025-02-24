import React, { useState } from "react";
import axios from "axios";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [tags, setTags] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Przekształcamy tagi na tablicę, usuwamy nadmiarowe spacje
    const tagsArray = tags.split(",").map((t) => t.trim()).filter(t => t !== "");
    try {
      // Wysyłamy dane do backendu
      const response = await axios.post("http://localhost:5000/api/blogs", {
        title,
        content,
        image,
        tags: tagsArray,  // Tagi są teraz tablicą
      });
      setMessage("Post utworzony pomyślnie!");
      // Opcjonalnie wyczyść formularz
      setTitle("");
      setContent("");
      setImage("");
      setTags("");
    } catch (error) {
      console.error("Błąd tworzenia posta:", error);
      setMessage("Wystąpił błąd podczas tworzenia posta");
    }
  };

  return (
    <div className="admin-panel">
      <h2>Panel Administracyjny - Utwórz nowy post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Tytuł:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Treść:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Obrazek (URL):</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div>
          <label>Tagi (oddzielone przecinkami):</label>
          <input
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </div>
        <button type="submit">Utwórz post</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default CreatePost;
