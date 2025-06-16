import React from 'react';
import './SpecialMessage.css';

const SpecialMessage = () => {
  return (
    <section className="section special-message fade-in" id="special-message">
      <h2><strong>당부의 말씀</strong></h2>
      <div className="divider"></div>
      <div className="message-container">
        <p className="message-text">
          소중한 분들을 모시고 싶은 마음이 간절하나<br/>
          가족들만의 조용한 예식으로 진행하고자 합니다.<br/><br/>
          축하의 마음으로 보내주시는 화환은<br/>
          정중히 사양하오니 넓은 마음으로 이해해 주시면<br/>
          더없는 감사를 드리겠습니다.<br/><br/>
          멀리서나마 따뜻한 축복과 응원을 보내주신다면<br/>
          더 행복하고 의미있는 결혼식이 되겠습니다.
        </p>
      </div>
      <div className="flower-divider">
        <img src="./images/flower-divider.png" alt="꽃 디바이더" />
      </div>
    </section>
  );
};

export default SpecialMessage;
