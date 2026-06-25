import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroSilkMobile from '../../assets/hero_silk_mobile.png';
import heroSuitingMobile from '../../assets/hero_suiting_mobile.png';
import heroUpholsteryMobile from '../../assets/hero_upholstery_mobile.png';

import heroSilkDesktop from '../../assets/hero_silk_desktop.png';
import heroSuitingDesktop from '../../assets/hero_suiting_desktop.png';
import heroUpholsteryDesktop from '../../assets/hero_upholstery_desktop.png';

const slides = [
  {
    id: 1,
    imageMobile: heroSilkMobile,
    imageDesktop: heroSilkDesktop,
    title: 'Exquisite Silk Collections',
    subtitle: 'Discover the heritage of Indian textiles with our premium silk sarees.',
    cta: 'Explore Collection',
    link: '/products'
  },
  {
    id: 2,
    imageMobile: heroSuitingMobile,
    imageDesktop: heroSuitingDesktop,
    title: 'Premium Suiting Fabrics',
    subtitle: 'Crafting confidence with the finest blends of suiting and shirting.',
    cta: 'View Fabrics',
    link: '/products'
  },
  {
    id: 3,
    imageMobile: heroUpholsteryMobile,
    imageDesktop: heroUpholsteryDesktop,
    title: 'Elegant Home Upholstery',
    subtitle: 'Transform your living spaces with our luxurious home furnishing range.',
    cta: 'Shop Now',
    link: '/products'
  }
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  return (
    <div className="relative h-[calc(100vh-5rem)] w-full overflow-hidden bg-brand-darkbrown">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10 z-10" />
          <picture className="absolute inset-0 w-full h-full">
            <source media="(min-width: 768px)" srcSet={slide.imageDesktop} />
            <img
              src={slide.imageMobile}
              alt={slide.title}
              className={`w-full h-full object-cover transition-transform duration-[20000ms] ease-out ${
                index === current ? 'scale-110' : 'scale-100'
              }`}
            />
          </picture>
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-end md:justify-center text-center px-4 md:px-12 pb-32 md:pb-12 mt-12">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl sm:whitespace-nowrap font-serif text-white mb-3 sm:mb-6 drop-shadow-xl tracking-wide max-w-6xl leading-tight transform translate-y-0 transition-transform duration-1000">
              {slide.title}
            </h1>
            <p className="text-sm sm:text-lg md:text-2xl text-white/90 mb-6 sm:mb-12 max-w-2xl drop-shadow-md font-light tracking-wide">
              {slide.subtitle}
            </p>
            <Link
              to={slide.link}
              className="btn-outline-premium text-white border-white hover:bg-white hover:text-black text-sm sm:text-lg px-6 py-2 sm:px-10 sm:py-3 tracking-widest uppercase transition-all duration-500"
            >
              {slide.cta}
            </Link>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-[calc(50%-3.5rem)] bottom-16 md:left-4 md:bottom-auto md:top-1/2 translate-y-0 md:-translate-y-1/2 z-30 p-2 bg-white/20 hover:bg-[#022c22]/40 rounded-full text-white backdrop-blur-sm transition-all"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute left-[calc(50%+0.5rem)] md:left-auto md:right-4 bottom-16 md:bottom-auto md:top-1/2 translate-y-0 md:-translate-y-1/2 z-30 p-2 bg-white/20 hover:bg-[#022c22]/40 rounded-full text-white backdrop-blur-sm transition-all"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-12 h-1 rounded-full transition-all duration-500 ${
              index === current ? 'bg-[#C48B5D]' : 'bg-white/30 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
