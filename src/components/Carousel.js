import React, { useState } from 'react';
import "./css/carousel.css";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: "https://ae01.alicdn.com/kf/H797edfb2a7994ca1bd4d42354d6d2dafq.jpg",
    altText: 'Beanie Gs',
    caption: 'Beanie Gs'
  },
  {
    src: 'https://ae01.alicdn.com/kf/H4f83ae1023b148268864a8f27424bce62.jpg',
    altText: 'Beanie Gs',
    caption: 'Beanie Gs'
  },
  {
    src: "https://ae01.alicdn.com/kf/HTB1k3zuaRWD3KVjSZKPq6yp7FXa2.jpg",
    altText: 'Beanie Gs',
    caption: 'Beanie Gs'
  }
];

const HeroImage = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption  color="secondary" captionHeader={item.caption} />
      </CarouselItem>
    );
  });


  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default HeroImage;