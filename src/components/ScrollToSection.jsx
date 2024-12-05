import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToSection = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    const sectionId = location.pathname.slice(1) || 'home';
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return <>{children}</>;
};

export default ScrollToSection;
