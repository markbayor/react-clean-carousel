import React from 'react';
import './arrows.scss';
interface ArrowsProps {
    amount: number;
    currSlideIdx: number;
    setCurrSlideIdx: React.Dispatch<React.SetStateAction<number>>;
    arrowsContainerStyle?: React.CSSProperties;
    previousArrowStyle?: React.CSSProperties;
    nextArrowStyle?: React.CSSProperties;
}
declare const Arrows: ({ amount, currSlideIdx, setCurrSlideIdx, arrowsContainerStyle, previousArrowStyle, nextArrowStyle }: ArrowsProps) => JSX.Element;
export { Arrows, ArrowsProps };
