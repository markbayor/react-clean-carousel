import React from 'react';
import { Slide } from './components/Slide';
import './carousel.scss';
declare type size = 'verylarge' | 'large' | 'medium' | 'small' | 'verysmall';
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
declare const Carousel: ({ size, children, arrowsNav, dotsNav, autoplay, autoplayIntervalTime, mainStyle, innerStyle, arrowsContainerStyle, previousArrowStyle, nextArrowStyle, dotsContainerStyle, dotStyle }: CarouselProps) => JSX.Element;
export { Carousel, CarouselProps, };
