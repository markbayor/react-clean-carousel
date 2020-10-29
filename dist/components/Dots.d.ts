import React from 'react';
import './dots.scss';
interface DotsProps {
    amount: number;
    currSlideIdx: number;
    setCurrSlideIdx: React.Dispatch<React.SetStateAction<number>>;
    dotsContainerStyle?: React.CSSProperties;
    dotStyle?: React.CSSProperties;
}
declare const Dots: ({ amount, currSlideIdx, setCurrSlideIdx, dotsContainerStyle, dotStyle }: DotsProps) => JSX.Element;
export { Dots, DotsProps };
