import React from 'react';
import './Header.css';

const Header = () => {
  const scrollToIntro = () => {
    const introSection = document.querySelector('.intro');
    if (introSection) {
      introSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <div className="header-content fade-in">
        <h1><strong>결혼합니다</strong></h1>
        <div className="couple-names">
          <span><strong>홍승완</strong></span>
          <span className="ampersand">&</span>
          <span><strong>최보윤</strong></span>
        </div>
        <p className="wedding-date"><strong>2025. 06. 29 SUN AM 11:30</strong></p>
      </div>
      <div className="scroll-indicator" onClick={scrollToIntro}>
        ↓
      </div>
    </header>
  );
};

export default Header;