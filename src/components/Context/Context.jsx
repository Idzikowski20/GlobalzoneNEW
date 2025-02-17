import React, { createContext, useEffect, useState } from 'react';

const Context = createContext();

const ContextProvider = ({ children }) => {
  // Search Form
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };
  // SidePanel
  const [sidePanelOpen, setSidePanelOpen] = useState(false);

  const handleOpen = () => {
    setSidePanelOpen(true);
  };

  const handleClose = () => {
    setSidePanelOpen(false);
  };
  
  // Sticky Navbar
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    let timeoutId;

    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsSticky(window.scrollY > 0);
      }, 200); // Delay of 200 milliseconds
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <JobContext.Provider value={{ 
      isFormOpen, 
      handleOpenForm, 
      handleCloseForm,
      isSticky, 
      sidePanelOpen,
      handleOpen,
      handleClose,
      }}>
      {children}
    </JobContext.Provider>
  );
};

export { Context, ContextProvider };
