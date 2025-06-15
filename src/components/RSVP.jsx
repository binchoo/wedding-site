import React, { useState } from 'react';
import './RSVP.css';

const RSVP = () => {
  const [formData, setFormData] = useState({
    name: '',
    attendance: 'attending',
    guests: '1',
    message: '',
    phone: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real implementation, this would send data to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };
  
  if (submitted) {
    return (
      <section className="section rsvp fade-in" id="rsvp">
        <h2>참석 여부</h2>
        <div className="divider"></div>
        <div className="rsvp-success">
          <div className="success-image">
            <img src="./images/check.png" alt="성공" />
          </div>
          <h3>감사합니다!</h3>
          <p>참석 여부가 성공적으로 등록되었습니다.</p>
          <p>소중한 날에 함께해 주셔서 감사합니다.</p>
          <button className="btn" onClick={() => setSubmitted(false)}>다시 작성하기</button>
        </div>
      </section>
    );
  }
  
  return (
    <section className="section rsvp fade-in" id="rsvp">
      <h2>참석 여부</h2>
      <div className="divider"></div>
      <p className="rsvp-text">
        저희의 특별한 날에 함께해 주실 수 있는지 알려주세요.
      </p>
      
      <form className="rsvp-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">성함</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="성함을 입력해주세요"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="phone">연락처</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="연락처를 입력해주세요"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="attendance">참석 여부</label>
          <select
            id="attendance"
            name="attendance"
            value={formData.attendance}
            onChange={handleChange}
          >
            <option value="attending">참석합니다</option>
            <option value="not-attending">참석하지 못합니다</option>
          </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="guests">참석 인원</label>
          <select
            id="guests"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
          >
            <option value="1">1명</option>
            <option value="2">2명</option>
            <option value="3">3명</option>
            <option value="4">4명</option>
          </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="message">신랑신부에게 메시지 (선택사항)</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="축하 메시지를 남겨주세요"
            rows="3"
          ></textarea>
        </div>
        
        <button type="submit" className="btn rsvp-btn">참석 여부 전송</button>
      </form>
    </section>
  );
};

export default RSVP;