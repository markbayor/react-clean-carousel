import React from 'react';
import './slide.scss';
interface SlideProps {
    imageUrl: string;
    children: React.ReactNode | React.ReactNode[];
    style?: React.CSSProperties;
}
declare const Slide: ({ style, imageUrl, children }: SlideProps) => JSX.Element;
export { Slide, SlideProps };
