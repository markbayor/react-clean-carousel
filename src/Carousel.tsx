// @ts-ignore
import React, { useEffect, useState } from 'react'
import { Arrows } from './components/Arrows'
import { Dots } from './components/Dots'
import { Slide } from './components/Slide'

import './carousel.scss'

type size = 'verylarge' | 'large' | 'medium' | 'small' | 'verysmall'

interface CarouselProps {
  size: size;
  children: typeof Slide[];
  autoplay?: boolean;
  autoplayIntervalTime?: number;

  mainStyle?: React.CSSProperties;
  innerStyle?: React.CSSProperties;

  arrowsNav?: boolean;
  dotsNav?: boolean;
  arrowsContainerStyle?: React.CSSProperties;
  previousArrowStyle?: React.CSSProperties;
  nextArrowStyle?: React.CSSProperties;
  dotsContainerStyle?: React.CSSProperties;
  dotStyle?: React.CSSProperties;
}

const Carousel = ({ size = 'large', children, arrowsNav, dotsNav, autoplay = true, autoplayIntervalTime = 5000,
  mainStyle,
  innerStyle,
  arrowsContainerStyle,
  previousArrowStyle,
  nextArrowStyle,
  dotsContainerStyle,
  dotStyle }: CarouselProps) => {
  const [currSlideIdx, setCurrSlideIdx] = useState(0)
  if (children.length > 5) {
    children = children.slice(4) // cannot excede 5 dots on the navbar
  }

  useEffect(() => {
    if (autoplay) {
      const timer = setTimeout(() => setCurrSlideIdx((currSlideIdx + 1) % children.length), autoplayIntervalTime)
      return () => {
        clearInterval(timer)
      }
    }
  }, [currSlideIdx])

  return (
    <div style={mainStyle} className={`c-carousel c-carousel--${size}`}>
      <div style={innerStyle} className="c-carousel__inner">
        {children[currSlideIdx]}
      </div>
      {arrowsNav && <Arrows amount={children.length} currSlideIdx={currSlideIdx} setCurrSlideIdx={setCurrSlideIdx} arrowsContainerStyle={arrowsContainerStyle} previousArrowStyle={previousArrowStyle} nextArrowStyle={nextArrowStyle} />}
      {dotsNav && <Dots amount={children.length} currSlideIdx={currSlideIdx} setCurrSlideIdx={setCurrSlideIdx} dotsContainerStyle={dotsContainerStyle} dotStyle={dotStyle} />}
    </div>
  )
}

export {
  Carousel,
  CarouselProps,
}