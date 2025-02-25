import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { styles } from "../../styles";
import Footer from "../HomePage/Footer";

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [blogs, setBlogs] = useState([]); // Lista wszystkich blogów
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Pobranie szczegółów konkretnego bloga
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        console.log("🔎 Pobieranie posta o ID:", id);
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/blogs/${id}`);
        console.log("✅ Odpowiedź z API:", response.data);
  
        if (response.data) {
          setBlog(response.data);
        } else {
          setError("❌ Nie znaleziono posta o podanym ID.");
        }
      } catch (err) {
        console.error("❌ Błąd pobierania posta:", err.response?.data || err.message);
        setError("Nie udało się pobrać posta. Sprawdź ID lub spróbuj później.");
      } finally {
        setLoading(false);
      }
    };
  
    if (id) fetchBlog(); // ✅ Wywołanie tylko jeśli ID istnieje
  }, [id]);
  
  

  // Pobranie listy wszystkich blogów
  useEffect(() => {
    console.log(blogs); // Zobacz jakie pole zawiera identyfikator
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/blogs`);
        setBlogs(response.data);
      } catch (err) {
        console.error("Błąd podczas pobierania listy blogów:", err);
      }
    };
    fetchBlogs();
  }, []);

  if (loading) return <div className="text-center text-white text-lg">Ładowanie...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;
  if (!blog) return <div className="text-center text-gray-400">Nie znaleziono posta 🙁</div>;

  return (
    <div className="blog-detail selector relative z-0 bg-primary-dark p-6">
      <div className="bg-parallax bluur-70 z-index-1"></div>

      {/* Kontener dwukolumnowy */}
      <div className="margin-top-50 flex flex-col lg:flex-row gap-11">
        {/* Lewa kolumna - szczegóły bloga */}
        <div className="blog-detail-container">
          <div className="blog-detail-card">
            <h1 className={`${styles.sectionHeadText} home-title text-center`}>{blog.title}</h1>
          </div>
          {blog.image && (
            <div className="blog-detail-card">
              <img src={blog.image} alt={blog.title} className="w-full max-h-96 object-cover rounded-lg mb-4" />
            </div>
          )}
          <div className="blog-detail-card">
            <p className="text-white text-lg">{blog.content}</p>
          </div>
          {blog.tags && blog.tags.length > 0 && (
            <div className="blog-detail-card">
              <p className="mt-4 text-gray-400">
                {blog.tags.map((tag, i) => (
                  <span key={i} className="mr-2">#{tag}</span>
                ))}
              </p>
            </div>
          )}
        </div>

        {/* Prawa kolumna - lista blogów z obrazkami */}
        <div className="blog-detail-blogs-container w-full lg:w-1/5 bg-primary-dark p-4 rounded-lg">
          <h2 className="text-white text-xl font-semibold mb-4">Zobacz również</h2>
          <ul className="space-y-4">
            {blogs.map((item) => (
              <li key={item._id}>
                <Link to={`/blog/${item._id}`} className="flex items-center gap-3">
                    {item.image ? (
                      <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded-md" />
                    ) : (
                      <div className="w-16 h-16 flex items-center justify-center bg-gray-700 text-gray-400 rounded-md">
                        Brak
                      </div>
                    )}
                    <span className="text-sm font-medium">{item.title}</span>
                  </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
