import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Intro from './components/Intro';
import Gallery from './components/Gallery';
import Location from './components/Location';
import Remittance from './components/Remittance';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // 문서 제목 한국어로 설정
    document.title = '청첩장 - SEUNGWAN & BOYUN';
    
    // 로딩 상태 처리
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => {
      observer.observe(element);
    });
    
    // 스크롤 이벤트 처리
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);

    return () => {
      fadeElements.forEach(element => {
        observer.unobserve(element);
      });
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* 로딩 화면 */}
      <div className={`loading ${loading ? '' : 'hidden'}`}>
        <div className="loading-spinner"></div>
      </div>
      
      <div className="app">
        <Header />
        <main className="container">
          <Intro />
          <Gallery />
          <Location />
          <Remittance />
        </main>
        <Footer />
        
        {/* 스크롤 탑 버튼 */}
        <div 
          className={`scroll-to-top ${showScrollTop ? 'visible' : ''}`}
          onClick={scrollToTop}
        >
          <i className="fas fa-arrow-up"></i>
        </div>
      </div>
    </>
  );
}

export default App;