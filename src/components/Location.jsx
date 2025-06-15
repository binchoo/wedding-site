import React from 'react';
import './Location.css';

const Location = () => {
  const openMap = () => {
    window.open('https://maps.google.com/?q=메리빌리아+셀레스메리홀+인천+연수구+송도동+170-1', '_blank');
  };

  return (
    <section className="section location fade-in" id="location">
      <h2>오시는 길</h2>
      <div className="divider"></div>
      <div className="venue-info">
        <p className="venue-title">메리빌리아 셀레스메리홀</p>
        <p>인천 연수구 송도동 170-1</p>
        <p className="venue-date">2025. 06. 29 SUN AM 11:30</p>
        <p className="venue-tel">032-864-5500</p>
      </div>
      
      <div className="map-container" onClick={openMap}>
        <img src="./images/map.png" alt="지도" className="map-image" />
      </div>
    </section>
  );
};

export default Location;