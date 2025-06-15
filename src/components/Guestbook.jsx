import React, { useState } from 'react';
import './Guestbook.css';

const Guestbook = () => {
  const initialComments = [
    {
      id: 1,
      name: '김지영',
      date: '2023년 9월 10일',
      message: '축하합니다! 두 분의 앞날에 행복이 가득하길 바랍니다. 특별한 날을 함께 축하할 수 있어 기쁩니다!',
      avatar: './images/avatar1.jpg'
    },
    {
      id: 2,
      name: '박민수',
      date: '2023년 9월 12일',
      message: '두 분의 사랑이 평생 지속되길 바랍니다. 결혼을 진심으로 축하드립니다!',
      avatar: './images/avatar2.jpg'
    },
    {
      id: 3,
      name: '이하은',
      date: '2023년 9월 15일',
      message: '오랜 친구의 결혼을 축하합니다. 앞으로도 지금처럼 서로 아끼고 사랑하며 행복하게 사세요!',
      avatar: './images/avatar3.jpg'
    },
    {
      id: 4,
      name: '최준호',
      date: '2023년 9월 18일',
      message: '결혼 정말 축하드립니다! 두 분의 새 출발을 진심으로 축하하며, 항상 건강하고 행복한 가정 이루시길 바랍니다.',
      avatar: './images/avatar4.jpg'
    }
  ];
  
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState({
    name: '',
    message: ''
  });
  const [currentPage, setCurrentPage] = useState(1);
  const commentsPerPage = 3;
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewComment(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // In a real implementation, this would send data to a server
    const comment = {
      id: comments.length + 1,
      name: newComment.name,
      date: new Date().toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      message: newComment.message,
      avatar: './images/avatar-default.jpg'
    };
    
    setComments(prev => [comment, ...prev]);
    setNewComment({ name: '', message: '' });
    setCurrentPage(1); // Go to first page after adding a comment
  };
  
  // Get current comments
  const indexOfLastComment = currentPage * commentsPerPage;
  const indexOfFirstComment = indexOfLastComment - commentsPerPage;
  const currentComments = comments.slice(indexOfFirstComment, indexOfLastComment);
  
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
  return (
    <section className="section guestbook fade-in" id="guestbook">
      <h2>방명록</h2>
      <div className="divider"></div>
      
      <form className="guestbook-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="guestbook-name">성함</label>
          <input
            type="text"
            id="guestbook-name"
            name="name"
            value={newComment.name}
            onChange={handleChange}
            placeholder="성함을 입력해주세요"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="guestbook-message">메시지</label>
          <textarea
            id="guestbook-message"
            name="message"
            value={newComment.message}
            onChange={handleChange}
            placeholder="축하 메시지를 남겨주세요"
            rows="3"
            required
          ></textarea>
        </div>
        
        <button type="submit" className="btn guestbook-btn">메시지 남기기</button>
      </form>
      
      <div className="comments-list">
        {currentComments.map(comment => (
          <div key={comment.id} className="comment">
            <div className="comment-avatar">
              <img src={comment.avatar} alt={comment.name} />
            </div>
            <div className="comment-content">
              <div className="comment-header">
                <h4>{comment.name}</h4>
                <span className="comment-date">{comment.date}</span>
              </div>
              <p className="comment-message">{comment.message}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Pagination */}
      {comments.length > commentsPerPage && (
        <div className="pagination">
          {Array.from({ length: Math.ceil(comments.length / commentsPerPage) }).map((_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={currentPage === index + 1 ? 'active' : ''}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </section>
  );
};

export default Guestbook;