import React, { useState, useEffect } from "react";
import axios from "axios";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const api = axios.create({
      baseURL: import.meta.env.VITE_API_URL,
    });

    api.get('/api/blogs')
      .then(response => {
        setBlogs(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Błąd podczas pobierania blogów:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return (
    <div className="loader-container">
      <div className="loader">
        <span className="loader-text">Ładuje</span>
        <span className="load"></span>
      </div>
    </div>
  );

  return (
    <div>
      {blogs.length === 0 ? (
        <p>Brak postów do wyświetlenia 🙁</p>
      ) : (
        <ul>
          {blogs.map((blog) => (
            <li key={blog._id}>
              <h3>{blog.title}</h3>
              <p>{blog.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BlogPage;
