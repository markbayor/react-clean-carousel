import React from 'react';
import './slide.scss';

interface SlideProps {
  imageUrl: string;
  children: React.ReactNode | React.ReactNode[]
  style?: React.CSSProperties;
}

const Slide = ({ style, imageUrl, children }: SlideProps) => {
  return (
    <div className='c-slide' style={style}>
      <img className='c-slide__img' src={imageUrl} />
      {children}
    </div>
  )
}

export {
  Slide,
  SlideProps
}