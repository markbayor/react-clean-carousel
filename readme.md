# react-clean-carousel

A simple carousel component with navigation and formattable styling.

# Usage
```
import {
  Carousel,
  Slide
} from 'react-clean-carousel'

import '../node_modules/react-clean-carousel/dist/main.css';
.
.
.
<Carousel>
  <Slide imageUrl="https://picsum.photos/900/400">
    children (whatever you want to put IN the slide e.g buttons, links, etc)
  </Slide>
</Carousel>
```
# Properties (props with ? at the end are optional)

## Carousel component

| Prop | Type | Default | Definition |
|:----------------:|:------------------------------------------------:|:--------------------------------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| size | string | 'large' | Defines the size of the carousel. 'large' is the standard 1400px wide on a FullHD panel, while the others may be used for other use cases: 'verylarge', 'medium', 'small', 'verysmall', respectively.
| children | Slide[] | undefined | The slides that will be used in the carousel, each with their own props. |
| autoplay? | boolean | true | Defines if the carousel should loop through the slides automatically. |
| autoplayIntervalTime? | number | 5000 | The time between each slide changing to the next, defined in miliseconds. |
| mainStyle? | React.CSSProperties | undefined | Used to override the styling of the main container of the carousel, should you need it. |
| innerStyle? | React.CSSProperties | undefined | Overrides the styling of the inner container of the carousel, the one that contains the Slides as its children. |
| arrowsNav? | boolean | true | Defines if you want to have arrow navigation or not. |
| dotsNav? | boolean | true | Defines if you want navigation with dots or not. |
| arrowsContainerStyle? | React.CSSProperties | undefined | Used to override the styling of the container of the navigation arrows, should you need to. |
| previousArrowStyle? | React.CSSProperties | undefined | Override the style of the previous slide navigation arrow |
| nextArrowStyle? | React.CSSProperties | undefined | Override the style of the next slide navigation arrow |
| dotsContainerStyle? | React.CSSProperties | undefined | Used to override the styling of the navigation dots' container. |
| dotStyle? | React.CSSProperties | undefined | Overrides the styling of the individual dots. |


## Slide component
| Prop | Type | Default | Definition |
|:----------------:|:------------------------------------------------:|:--------------------------------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| imageUrl | string | undefined | The url for the background image of that slide. |
| children | React.ReactNode[] | undefined | Whatever JSX children you may want to pass into that slide to have (links, buttons, etc.) | 
| style? | React.CSSProperties | undefined | Overrides the styling for the Slide container. |

---

## License

MIT © [markbayor](https://github.com/markbayor)