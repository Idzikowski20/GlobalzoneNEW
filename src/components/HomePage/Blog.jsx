import React, { useState, useEffect } from "react";
import axios from "axios";
import Tilt from "react-tilt";
import { Link } from "react-router-dom";
import { styles } from "../../styles";
import { SectionWrapper } from "../../hoc";

// ✅ Funkcja do przycinania tekstu
const truncateText = (text, maxLength = 150) => {
  if (!text) return "";
  return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
};

const ProjectCard = ({ name, description, tags, image, source_code_link }) => (
  <Tilt options={{ max: 45, scale: 1, speed: 450 }} className="background-dark blog-post">
    {/* 🖼️ Obrazek posta */}
    <div className="relative w-full h-[230px]">
      {image ? (
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-2xl"
          onError={(e) => { e.target.onerror = null; e.target.src = "/placeholder-image.jpg"; }}
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gray-700 text-gray-400 rounded-2xl">
          Brak obrazka
        </div>
      )}
    </div>

    {/* 📝 Tytuł i skrócony opis */}
    <div className="mt-5">
      <h3 className="text-white font-bold text-[24px]">{name || "Bez tytułu"}</h3>
      <p className="mt-2 text-gray-300 text-[14px]">
        {truncateText(description || "Brak opisu dla tego posta.")}
      </p>
    </div>

    {/* 🔗 Przycisk "Czytaj więcej" */}
    <div className="mt-4">
      <Link to={source_code_link} className="learn-more">
        <span className="circle" aria-hidden="true">
          <span className="icon arrow"></span>
        </span>
        <span className="button-text">Czytaj więcej</span>
      </Link>
    </div>

    {/* 🏷️ Tagi */}
    {tags?.length > 0 && (
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag, i) => (
          <p key={i} className="text-[14px] text-gray-400">#{tag}</p>
        ))}
      </div>
    )}
  </Tilt>
);

const Works = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ✅ Pobieranie postów z API
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/blogs`);
        setBlogs(Array.isArray(response.data) ? response.data : []);
      } catch (err) {
        console.error("❌ Błąd podczas pobierania blogów:", err);
        setError("Nie udało się pobrać blogów. Spróbuj ponownie później.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading)
    return (
      <div className="loader flex-center">
        <span className="loader-text">⏳ Ładowanie postów...</span>
      </div>
    );

  if (error) return <div className="text-center text-red-500">{error}</div>;

  if (blogs.length === 0)
    return <div className="text-center text-gray-400">🙁 Brak postów do wyświetlenia</div>;

  return (
    <section id="news">
      <h2 className={`${styles.sectionHeadText} text-center mb-8`}>📰 Blog informacyjny</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 blog-post-container">
        {blogs.map((blog, index) => (
          <ProjectCard
            key={`project-${index}`}
            name={blog.title}
            description={blog.content}
            tags={blog.tags || []}
            image={blog.image}
            source_code_link={`/blog/${blog._id}`}
          />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Works, "");
