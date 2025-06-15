import React from 'react';

const ImagePlaceholder = ({ width = '100%', height = '300px', text = '이미지 준비중', bgColor = '#f0f0f0', textColor = '#888' }) => {
  const style = {
    width,
    height,
    backgroundColor: bgColor,
    color: textColor,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    padding: '20px',
    borderRadius: '4px',
    fontFamily: 'Noto Serif KR, serif',
  };

  return (
    <div style={style}>
      <div style={{ fontSize: '24px', marginBottom: '10px' }}>🖼️</div>
      <div>{text}</div>
    </div>
  );
};

export default ImagePlaceholder;