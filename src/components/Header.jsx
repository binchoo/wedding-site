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
        <h1>결혼합니다</h1>
        <div className="couple-names">
          <span>홍승완</span>
          <span className="ampersand">&</span>
          <span>최보윤</span>
        </div>
        <p className="wedding-date">2025. 06. 29 SUN AM 11:30</p>
      </div>
      <div className="scroll-indicator" onClick={scrollToIntro}>
        ↓
      </div>
    </header>
  );
};

export default Header;