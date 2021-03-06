// @ts-ignore
import React, { useEffect, useState } from 'react'
import { Arrows } from './components/Arrows'
import { Dots } from './components/Dots'
import { Slide } from './components/Slide'
import {Slider} from './components/Slider'

import './carousel.scss'

type size = 'large' | 'medium-large' | 'medium' | 'small' | 'verysmall'

interface CarouselProps {
  size: size;
  children: typeof Slide[] | any;
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

const Carousel = ({ size = 'large', children, arrowsNav = true, dotsNav = true, autoplay = true, autoplayIntervalTime = 5000,
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
      <Slider style={innerStyle} currSlideIdx={currSlideIdx}>
        {children}
      </Slider>
      {arrowsNav && <Arrows amount={children.length} currSlideIdx={currSlideIdx} setCurrSlideIdx={setCurrSlideIdx} arrowsContainerStyle={arrowsContainerStyle} previousArrowStyle={previousArrowStyle} nextArrowStyle={nextArrowStyle} />}
      {dotsNav && <Dots amount={children.length} currSlideIdx={currSlideIdx} setCurrSlideIdx={setCurrSlideIdx} dotsContainerStyle={dotsContainerStyle} dotStyle={dotStyle} />}
    </div>
  )
}

export {
  Carousel,
  CarouselProps,
}