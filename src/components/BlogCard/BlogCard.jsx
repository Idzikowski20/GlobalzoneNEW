import React, { useState, useEffect } from "react";
import axios from "axios";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/blogs`);
        console.log("Dane pobrane:", response.data);
        setBlogs(response.data);
      } catch (err) {
        console.error("Błąd podczas pobierania blogów:", err);
        setError("Nie udało się pobrać blogów. Spróbuj ponownie później.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading)
    return (
      <div className="loader-container">
        <div className="loader">
          <span className="loader-text">Ładowanie...</span>
          <span className="load"></span>
        </div>
      </div>
    );

  if (error)
    return <div className="text-center text-red-500">{error}</div>;

  return (
    <div>
      {blogs.length === 0 ? (
        <p className="text-center text-gray-400">Brak postów do wyświetlenia 🙁</p>
      ) : (
        <ul>
          {blogs.map((blog) => (
            <li key={blog._id} className="mb-4 p-4 border border-gray-300 rounded-lg">
              <h3 className="text-lg font-bold">{blog.title}</h3>
              <p>{blog.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BlogPage;
