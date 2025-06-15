import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-names">SEUNGWAN x BOYUN</div>
        <div className="footer-date">2025. 06. 29 SUN AM 11:30</div>
        
        <div className="flower-divider">
          <img src="/images/flower-divider.png" alt="꽃 디바이더" />
        </div>
        
        <div className="venue-info">
          <p>메리빌리아 셀레스메리홀</p>
          <p>인천 연수구 송도동 170-1</p>
          <p>032-864-5500</p>
        </div>
        
        <div className="family-info">
          <div className="family-row">
            <p><strong>신랑 측 혼주</strong>: 아버지 홍광기, 어머니 김희순</p>
          </div>
          <div className="family-row">
            <p><strong>신부 측 혼주</strong>: 아버지 최태준, 어머니 박지유</p>
          </div>
        </div>
        
        <div className="copyright">
          © {new Date().getFullYear()} SEUNGWAN & BOYUN Wedding
        </div>
      </div>
    </footer>
  );
};

export default Footer;