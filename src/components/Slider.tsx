import React from 'react';
import {Slide} from './Slide';
import './slider.scss';

interface SliderProps {
  children: typeof Slide[] | any;
  style?: React.CSSProperties;
  currSlideIdx: number;
}

const Slider = ({ style, children, currSlideIdx}: SliderProps) => {

  const clones = React.Children.map(children, (child, idx) => {
    return React.cloneElement(child, {style: {visibility: `${currSlideIdx === idx ? 'visible' : 'hidden'}`, opacity: `${currSlideIdx === idx ? '1' : '0'}`,  transition: 'all 1s'}})
  })

  return (
    <div className='c-slider' style={{...style }}>
        {clones}
    </div>
  )
}

export {
  Slider, 
  SliderProps
}