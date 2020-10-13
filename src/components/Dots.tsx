import React from 'react'
import './dots.scss'

interface DotsProps {
  amount: number;
  currSlideIdx: number;
  setCurrSlideIdx: React.Dispatch<React.SetStateAction<number>>;
  dotsContainerStyle?: React.CSSProperties;
  dotStyle?: React.CSSProperties;
}

const Dots = ({ amount, currSlideIdx, setCurrSlideIdx, dotsContainerStyle, dotStyle }: DotsProps) => {
  const indexes = Array.from(Array(amount).keys())

  return (
    <div className="c-dots" style={dotsContainerStyle}>
      {indexes.map((index) => {
        return (
          <div style={dotStyle} key={index} className={currSlideIdx === index ? 'c-dots__dot active' : 'c-dots__dot'} onClick={() => setCurrSlideIdx(index)} ></div>
        )
      })}
    </div>
  )
}

export {
  Dots,
  DotsProps
}