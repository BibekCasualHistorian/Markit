import React from 'react';
import '../CSS/DashContent.css';

const Content = ({ content }) => {
  return (
    <div className='content'>
      <h1>{content}</h1>
    </div>
  );
};

export default Content;

