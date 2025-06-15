import React from 'react';
import './Location.css';

const Location = () => {
  const openMap = () => {
    window.open('https://maps.google.com/?q=메리빌리아+셀레스메리홀+인천+연수구+송도동+170-1', '_blank');
  };

  return (
    <section className="section location fade-in" id="location">
      <h2><strong>오시는 길</strong></h2>
      <div className="divider"></div>
      <div className="venue-info">
        <p className="venue-title"><strong>메리빌리아 셀레스메리홀</strong></p>
        <p>인천 연수구 송도동 170-1</p>
        <p className="venue-date"><strong>2025. 06. 29 SUN AM 11:30</strong></p>
        <p className="venue-tel"><strong>032-864-5500</strong></p>
      </div>
      
      <div className="map-container" onClick={openMap}>
        <img src="./images/map.png" alt="지도" className="map-image" />
      </div>
    </section>
  );
};

export default Location;