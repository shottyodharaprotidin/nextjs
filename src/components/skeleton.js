import React from 'react';

const Skeleton = ({ className, style }) => {
  return (
    <div 
      className={`skeleton-loader ${className || ''}`} 
      style={style}
    ></div>
  );
};

export default Skeleton;
