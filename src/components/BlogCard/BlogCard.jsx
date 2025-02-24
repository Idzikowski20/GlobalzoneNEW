import React, { useState, useEffect } from "react";
import axios from "axios";
const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);  // Zmienna do przechowywania blogów
  const [loading, setLoading] = useState(true);  // Flaga ładowania

  // Funkcja do pobierania postów z backendu
  useEffect(() => {
    axios.get("http://localhost:5000/api/blogs")
      .then((response) => {
        console.log("Odpowiedź z API:", response.data); // Dodajemy log
        setBlogs(response.data);  // Zaktualizuj stan po otrzymaniu odpowiedzi
        setLoading(false);  // Ustaw flagę ładowania na false
      })
      .catch((error) => {
        console.error("Błąd podczas pobierania blogów:", error);
        setLoading(false);  // Ustaw flagę na false w przypadku błędu
      });
  }, []);  // Pusta tablica zależności powoduje, że zapytanie wykona się tylko raz po załadowaniu komponentu

  if (loading) return <div class="loader">
  <span class="loader-text">Ładuje</span>
    <span class="load"></span>
  </div>;  // Pokazuje loading w czasie ładowania

  return (
    <div>
      {blogs.length === 0 ? (
        <p>Brak postów do wyświetlenia 🙁</p>  // Komunikat, jeśli brak postów
      ) : (
        <ul>
          {blogs.map((blog) => (
            <li key={blog._id}>
              <h3>{blog.title}</h3>
              <p>{blog.content}</p>
              {/* Możesz dodać więcej szczegółów, np. tagi, obrazek */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BlogPage;
