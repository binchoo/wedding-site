import React from 'react';
import './Intro.css';

const Intro = () => {
  return (
    <section className="section intro fade-in" id="intro">
      <h2>the marriage of SEUNGWAN x BOYUN</h2>
      <div className="divider"></div>
      <p className="intro-text">
        아직 모든 게 서툰 두 젊은이가<br/>
        사랑이라는 이름으로 연을 맺고자 합니다.<br/><br/>
        따스한 햇살처럼 밝고 건강하게 살아갈<br/>
        앞날을 위해 부디 오셔서 축복과 지혜를 보내주시면<br/>
        더없는 기쁨이자 감사로 여기며 살아가겠습니다.
      </p>
      
      <div className="flower-divider">
        <img src="/images/flower-divider.png" alt="꽃 디바이더" />
      </div>
      
      <div className="intro-details">
        <div className="intro-detail">
          <h3>일시</h3>
          <p>2025. 06. 29 SUN</p>
          <p>AM 11:30</p>
        </div>
        <div className="intro-detail">
          <h3>장소</h3>
          <p>메리빌리아 셀레스메리홀</p>
          <p>인천 연수구 송도동 170-1</p>
        </div>
      </div>
      
      <div className="flower-divider">
        <img src="/images/flower-divider.png" alt="꽃 디바이더" />
      </div>
      
      <div className="family-info">
        <div className="family">
          <p className="parent-names">홍광기 · 김희순 의 장남</p>
          <p className="child-name">승완</p>
        </div>
        <div className="family">
          <p className="parent-names">최태준 · 박지유 의 장녀</p>
          <p className="child-name">보윤</p>
        </div>
      </div>
    </section>
  );
};

export default Intro;