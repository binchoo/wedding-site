import React from 'react';
import './Intro.css';

const Intro = () => {
  return (
    <section className="section intro fade-in" id="intro">
      <h2>the marriage of</h2>
      <h2><strong>SEUNGWAN x BOYUN</strong></h2>
      <div className="divider"></div>
      <p className="intro-text">
        저희딸 보윤이가 평생을 함께할 귀한 사람을 만나 결혼 이라는 인연을 맺습니다.<br/>
        함께 모시고 싶은 마음 당연하지만<br/>
        간소한 결혼을 고집하는<br/> 
        딸의 마음을 따라 조용한 예식을 올리고자 합니다.<br/>
        넓은 사랑으로 축복과 응원을 부탁 드립니다.<br/><br/>
        ※ 화환등 선물을 보내실까 부담되어 인천 지역 예식장이라는 사실만을 알려드립니다.<br/><br/>
        변함없이 여러분의 대소사에<br/>
        꼭 참석 하겠습니다.
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
