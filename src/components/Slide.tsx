import React from 'react';
import './slide.scss';

interface SlideProps {
  imageUrl: string;
  children: React.ReactNode | React.ReactNode[]
  linkUrl?: string;
  style?: React.CSSProperties;
}

const Slide = ({ style, linkUrl, imageUrl, children }: SlideProps) => {
  return (
    <div className='c-slide' style={style}>
      <a href={linkUrl} className='c-slide'>
        <img className='c-slide__img' src={imageUrl} />
      </a>
        <div className='c-slide__inner'>
          {children}
        </div>
    </div>
  )
}

export {
  Slide,
  SlideProps
}