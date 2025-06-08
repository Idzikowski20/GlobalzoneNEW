import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect, useRef } from 'react';
import HomePage from './components/HomePage/HomePage';
import ErrorPage from './components/ErrorPage/ErrorPage';
import BlogDetail from "./components/BlogDetail/BlogDetail";
import AdminPanel from "./components/AdminPanel/AdminPanel";  
import CreatePost from "./components/AdminPanel/CreatePost";  
import Navbar2 from "./components/HomePage/Navbar2";
const App = () => {
  const cursorRef = useRef(null);
    const cursor2Ref = useRef(null);
    const cursor3Ref = useRef(null);
  
    useEffect(() => {
      const cursor = cursorRef.current;
      const cursor2 = cursor2Ref.current;
      const cursor3 = cursor3Ref.current;
      const hoverTargets = document.querySelectorAll(".hover-target");
  
      if (!cursor || !cursor2 || !cursor3) return;
  
      const moveCursor = (event) => {
        cursor.style.left = `${event.clientX}px`;
        cursor.style.top = `${event.clientY}px`;
        cursor2.style.left = `${event.clientX}px`;
        cursor2.style.top = `${event.clientY}px`;
        cursor3.style.left = `${event.clientX}px`;
        cursor3.style.top = `${event.clientY}px`;
      };
  
      document.body.addEventListener("mousemove", moveCursor);
  
      const addHover = () => {
        cursor2.classList.add("hover");
        cursor3.classList.add("hover");
      };
  
      const removeHover = () => {
        cursor2.classList.remove("hover");
        cursor3.classList.remove("hover");
      };
  
      hoverTargets.forEach(target => {
        target.addEventListener("mouseover", addHover);
        target.addEventListener("mouseout", removeHover);
      });
  
      return () => {
        document.body.removeEventListener("mousemove", moveCursor);
        hoverTargets.forEach(target => {
          target.removeEventListener("mouseover", addHover);
          target.removeEventListener("mouseout", removeHover);
        });
      };
    }, []);
  return (
    <>
    <Navbar2/>
      <div className="bg-parallax bluur-70 z-index-1"></div>
      <div className='cursor' ref={cursorRef} id="cursor"></div>
      <div className='cursor2' ref={cursor2Ref} id="cursor2"></div>
      <div className='cursor3' ref={cursor3Ref} id="cursor3"></div>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/*" element={<ErrorPage />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/AdminPanel" element={<AdminPanel />} />
        <Route path="/CreatePost" element={<CreatePost />} /> 
      </Routes>
    </Router>
    </>
  );
};

export default App;
