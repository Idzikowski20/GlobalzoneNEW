import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BlogDetail = () => {
  const { id } = useParams();  // Pobieramy ID z URL
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/blogs/${id}`)
      .then((response) => {
        console.log("Odpowiedź z API:", response);  // Logowanie odpowiedzi
        setBlog(response.data);  // Przypisujemy dane bloga
      })
      .catch((error) => {
        console.error("Błąd podczas pobierania posta:", error);
      });
  }, [id]);

  if (!blog) return <div>Ładowanie...</div>;

  return (
    <div className="blog-detail selector relative z-0 bg-primary-dark">
      <div className="bg-parallax bluur-70"></div>
      {/* <div className='cursor' ref={cursorRef} id="cursor"></div>
      <div className='cursor2' ref={cursor2Ref} id="cursor2"></div>
      <div className='cursor3' ref={cursor3Ref} id="cursor3"></div> */}
      <h1>{blog.title}</h1>
      <img src={blog.image} alt={blog.title} />
      <p>{blog.content}</p>
      <p>
        {blog.tags.map((tag, i) => (
          <span key={i}>#{tag} </span>
        ))}
      </p>
    </div>
  );
};

export default BlogDetail;
