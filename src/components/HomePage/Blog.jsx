import React, { useState, useEffect } from "react";
import axios from "axios";  // Dodajemy import axios
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../../styles";
import { SectionWrapper } from "../../hoc";
import { fadeIn, textVariant } from "../../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="background-dark blog-post"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        <div className="">
          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
          </div>

          <div>
            <button className="learn-more">
              <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
              </span>
              <span
                onClick={() => window.open(source_code_link, "_blank")}
                className="button-text"
              >
                Czytaj więcej
              </span>
            </button>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const [blogs, setBlogs] = useState([]);  // Zmienna do przechowywania blogów
  const [loading, setLoading] = useState(true);  // Flaga ładowania

  useEffect(() => {
    // Funkcja do pobierania blogów z API
    axios
      .get("http://localhost:5000/api/blogs")  // Tu podaj adres swojego API
      .then((response) => {
        console.log("Odpowiedź z API:", response);  // Dodajemy logowanie odpowiedzi
        setBlogs(response.data);  // Przypisujemy pobrane blogi do stanu
        setLoading(false);  // Po zakończeniu ładowania ustaw flagę
      })
      .catch((error) => {
        console.error("Błąd podczas pobierania blogów:", error);
        setLoading(false);  // Jeśli wystąpił błąd, przestań ładować
      });
  }, []);  // Używamy pustej tablicy zależności, aby funkcja wykonała się tylko raz po załadowaniu komponentu

  // Jeśli blogi się ładują
  if (loading) return   <div class="loader">
  <span class="loader-text">Ładuje</span>
    <span class="load"></span>
</div>;

  // Jeśli nie ma blogów
  if (blogs.length === 0) return <div>
    Brak postów do wyświetlenia 🙁
    </div>;

  return (
    <>
      <section id="news">
        <motion.div variants={textVariant()}>
          <h2 className={`${styles.sectionHeadText}`}>Blog informacyjny</h2>
        </motion.div>
        <div className="blog-post-container">
          {blogs.map((blog, index) => (
            <ProjectCard
              key={`project-${index}`}
              index={index}
              name={blog.title}
              description={blog.content}
              tags={blog.tags}
              image={blog.image}
              source_code_link={`/blog/${blog._id}`}  // Link do szczegółów posta
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default SectionWrapper(Works, "");
