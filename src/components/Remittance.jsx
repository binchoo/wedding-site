import React, { useState } from 'react';
import './Remittance.css';

const Remittance = () => {
  const [activePopup, setActivePopup] = useState(null);

  const openPopup = (idx) => {
    setActivePopup(idx);
  };

  const closePopup = () => {
    setActivePopup(null);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        alert('계좌번호가 복사되었습니다.');
      })
      .catch(err => {
        console.error('계좌번호 복사 실패:', err);
      });
  };

  return (
    <section className="section remittance fade-in" id="remittance">
      <h2>마음 전하기</h2>
      <div className="divider"></div>
      
      <div className="btn-container">
        <button className="btn account-btn groom" onClick={() => openPopup(1)}>
          신랑 측 계좌번호
        </button>
        <button className="btn account-btn bride" onClick={() => openPopup(2)}>
          신부 측 계좌번호
        </button>
      </div>

      {/* 신랑 측 계좌번호 팝업 */}
      {activePopup === 1 && (
        <div className="popup-overlay">
          <div className="account-popup">
            <button className="close-x" onClick={closePopup}>×</button>
            <div className="account-list">
              <dl>
                <dt><span>신랑혼주</span> 계좌</dt>
                <dd><span>하나은행</span> (예금주: <span>김희순</span>)</dd>
                <dd><span>84991018287107</span></dd>
                <dd>
                  <button className="copy-btn" onClick={() => copyToClipboard('84991018287107')}>
                    계좌번호 복사
                  </button>
                </dd>
              </dl>
              <dl>
                <dt><span>신랑혼주</span> 계좌</dt>
                <dd><span>신한은행</span> (예금주: <span>홍광기</span>)</dd>
                <dd><span>110203731220</span></dd>
                <dd>
                  <button className="copy-btn" onClick={() => copyToClipboard('110203731220')}>
                    계좌번호 복사
                  </button>
                </dd>
              </dl>
              <dl>
                <dt><span>신랑</span> 계좌</dt>
                <dd><span>카카오뱅크</span> (예금주: <span>홍승완</span>)</dd>
                <dd><span>3333022103038</span></dd>
                <dd>
                  <button className="copy-btn" onClick={() => copyToClipboard('3333022103038')}>
                    계좌번호 복사
                  </button>
                </dd>
              </dl>
            </div>
            <button className="close-btn" onClick={closePopup}>닫기</button>
          </div>
        </div>
      )}

      {/* 신부 측 계좌번호 팝업 */}
      {activePopup === 2 && (
        <div className="popup-overlay">
          <div className="account-popup">
            <button className="close-x" onClick={closePopup}>×</button>
            <div className="account-list">
              <dl>
                <dt><span>신부혼주</span> 계좌</dt>
                <dd><span>국민은행</span> (예금주: <span>최태준</span>)</dd>
                <dd><span>596401-01-360173</span></dd>
                <dd>
                  <button className="copy-btn" onClick={() => copyToClipboard('59640101360173')}>
                    계좌번호 복사
                  </button>
                </dd>
              </dl>
              <dl>
                <dt><span>신부</span> 계좌</dt>
                <dd><span>카카오뱅크</span> (예금주: <span>최보윤</span>)</dd>
                <dd><span>3333319110602</span></dd>
                <dd>
                  <button className="copy-btn" onClick={() => copyToClipboard('3333319110602')}>
                    계좌번호 복사
                  </button>
                </dd>
              </dl>
            </div>
            <button className="close-btn" onClick={closePopup}>닫기</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Remittance;