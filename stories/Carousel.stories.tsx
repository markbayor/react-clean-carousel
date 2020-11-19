import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import {Carousel, CarouselProps} from '../src/Carousel'
import {Slide, SlideProps} from '../src/index'

export default {
  title: 'Example/Carousel',
  component: Carousel,
} as Meta;

const Template: Story<CarouselProps> = (args) => <Carousel {...args}>
  <Slide linkUrl='https://www.google.com' imageUrl="https://picsum.photos/900/400"><div className='c-slide--testdiv'>Hello there</div></Slide>
  <Slide linkUrl='https://www.google.com' imageUrl="https://picsum.photos/901/400"><div className='c-slide--testdiv'>Hello there</div></Slide>
  <Slide linkUrl='https://www.google.com' imageUrl="https://picsum.photos/902/400"><div className='c-slide--testdiv'>Hello there</div></Slide>
  <Slide linkUrl='https://www.google.com' imageUrl="https://picsum.photos/903/400"><div className='c-slide--testdiv'>Hello there</div></Slide>
</Carousel>

export const Primary = Template.bind({});
Primary.args = {
  arrowsNav: true,
  dotsNav: true,
  autoplay: true,
  autoplayIntervalTime: 5000,
};