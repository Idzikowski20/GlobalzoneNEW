import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { styles } from "../../styles";

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log("🔑 ID z URL:", id);

  // ✅ Pobieranie szczegółów posta
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        console.log("🔎 Pobieranie posta o ID:", id);
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/blogs/${id}`);
        setBlog(response.data);
      } catch (err) {
        console.error("❌ Błąd pobierania posta:", err?.response?.data || err.message);
        setError("❌ Nie udało się pobrać posta. Sprawdź ID lub spróbuj później.");
      } finally {
        setLoading(false);
      }
    };

    if (id && id.length === 24) {
      fetchBlog();
    } else {
      setError("❌ Nieprawidłowy format ID.");
      setLoading(false);
    }
  }, [id]);

  // ✅ Pobieranie listy wszystkich blogów
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/blogs`);
        setBlogs(response.data);
      } catch (err) {
        console.error("❌ Błąd pobierania listy blogów:", err);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) return <div className="text-center text-white">⏳ Ładowanie...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;
  if (!blog) return <div className="text-center text-gray-400">🙁 Post nie istnieje</div>;

  return (
    <div className="blog-detail p-6">
      <div className="flex flex-col lg:flex-row gap-11">
        
        {/* 🔎 Szczegóły posta */}
        <div className="lg:w-4/5">
          <h1 className={`${styles.sectionHeadText} text-center`}>{blog.title}</h1>
          {blog.image && (
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full max-h-96 object-cover rounded-lg my-4"
              onError={(e) => (e.target.src = "/placeholder-image.jpg")} // Placeholder przy błędzie wczytania
            />
          )}
          <p className="text-white text-lg mt-4">{blog.content}</p>
          {blog.tags?.length > 0 && (
            <div className="mt-4">
              {blog.tags.map((tag, i) => (
                <span key={i} className="mr-2 text-gray-400">#{tag}</span>
              ))}
            </div>
          )}
        </div>

        {/* 📄 Lista innych blogów */}
        <div className="lg:w-1/5 bg-primary-dark p-4 rounded-lg">
          <h2 className="text-white text-xl font-semibold mb-4">Inne wpisy</h2>
          <ul className="space-y-4">
            {blogs
              .filter((item) => item._id !== id) // Filtruje bieżący post
              .map((item) => (
                <li key={item._id}>
                  <Link to={`/blog/${item._id}`} className="flex items-center gap-3">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-16 h-16 object-cover rounded-md"
                        onError={(e) => (e.target.src = "/placeholder-image.jpg")}
                      />
                    ) : (
                      <div className="w-16 h-16 bg-gray-700 flex justify-center items-center rounded-md text-gray-400">
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
