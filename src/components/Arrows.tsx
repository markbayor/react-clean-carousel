import React from 'react';
import './arrows.scss'

interface ArrowsProps {
  amount: number;
  currSlideIdx: number;
  setCurrSlideIdx: React.Dispatch<React.SetStateAction<number>>;
  arrowsContainerStyle?: React.CSSProperties;
  previousArrowStyle?: React.CSSProperties;
  nextArrowStyle?: React.CSSProperties;
}

const Arrows = ({ amount, currSlideIdx, setCurrSlideIdx, arrowsContainerStyle, previousArrowStyle, nextArrowStyle }: ArrowsProps) => {

  const changeSlide = (direction: 'previous' | 'next') => {
    switch (direction) {
      case 'previous':
        setCurrSlideIdx(((currSlideIdx - 1) + amount) % amount)
        break
      case 'next':
        setCurrSlideIdx((currSlideIdx + 1) % amount)
        break
    }
  }

  return (
    <div className="c-arrows" style={arrowsContainerStyle}>
      <div style={previousArrowStyle} onClick={() => changeSlide('previous')} className='c-arrows__previous'></div>
      <div style={nextArrowStyle} onClick={() => changeSlide('next')} className='c-arrows__next'></div>
    </div>
  )
}

export {
  Arrows,
  ArrowsProps
}