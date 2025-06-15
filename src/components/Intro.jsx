import React from 'react';
import './Intro.css';

const Intro = () => {
  return (
    <section className="section intro fade-in" id="intro">
      <h2>the marriage of</h2>
      <h2><strong>SEUNGWAN x BOYUN</strong></h2>
      <div className="divider"></div>
      <p className="intro-text">
        아직 모든 게 서툰 두 젊은이가<br/>
        사랑이라는 이름으로 연을 맺고자 합니다.<br/><br/>
        따스한 햇살처럼 밝고 건강하게 살아갈<br/>
        앞날을 위해 부디 오셔서 축복과 지혜를 보내주시면<br/>
        더없는 기쁨이자 감사로 여기며 살아가겠습니다.
      </p>
      
      <div className="flower-divider">
        <img src="./images/flower-divider.png" alt="꽃 디바이더" />
      </div>
      
      <div className="intro-details">
        <div className="intro-detail">
          <h3><strong>일시</strong></h3>
          <p><strong>2025. 06. 29 SUN</strong></p>
          <p>AM 11:30</p>
        </div>
        <div className="intro-detail">
          <h3><strong>장소</strong></h3>
          <p><strong>메리빌리아 셀레스메리홀</strong></p>
          <p>인천 연수구 송도동 170-1</p>
        </div>
      </div>
      
      <div className="flower-divider">
        <img src="./images/flower-divider.png" alt="꽃 디바이더" />
      </div>
      
      <div className="family-info">
        <div className="family">
          <p className="parent-names">홍광기 · 김희순 의 장남</p>
          <p className="child-name"><strong>승완</strong></p>
        </div>
        <div className="family">
          <p className="parent-names">최태준 · 박지유 의 장녀</p>
          <p className="child-name"><strong>보윤</strong></p>
        </div>
      </div>
    </section>
  );
};

export default Intro;