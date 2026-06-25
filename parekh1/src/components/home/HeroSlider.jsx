import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=1920',
    tag: 'New Collection',
    title: 'Exquisite Silk Collections',
    subtitle: 'Discover the heritage of Indian textiles with our premium silk sarees.',
    cta: 'Explore Collection',
    link: '/products',
  },
  {
    id: 2,
    image: 'https://plus.unsplash.com/premium_photo-1674718916590-4a560d46d655?q=80&w=1170&auto=format&fit=crop',
    tag: 'Best Seller',
    title: 'Premium Suiting Fabrics',
    subtitle: 'Crafting confidence with the finest blends of suiting and shirting.',
    cta: 'View Fabrics',
    link: '/products',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8SG9tZSUyMFVwaG9sc3Rlcnl8ZW58MHx8MHx8fDA%3D',
    tag: 'Home Decor',
    title: 'Elegant Home Upholstery',
    subtitle: 'Transform your living spaces with our luxurious home furnishing range.',
    cta: 'Shop Now',
    link: '/products',
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((p) => (p === slides.length - 1 ? 0 : p + 1));
  const prevSlide = () => setCurrent((p) => (p === 0 ? slides.length - 1 : p - 1));

  return (
    <>
      {/* ─── MOBILE: Card-style slider ─── */}
      <div className="sm:hidden w-full px-4 py-5 bg-brand-light">
        <div
          style={{
            position: 'relative',
            borderRadius: 20,
            overflow: 'hidden',
            height: 400,
            boxShadow: '0 12px 40px rgba(74,55,40,0.22)',
          }}
        >
          {/* Slides */}
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              style={{
                position: 'absolute',
                inset: 0,
                opacity: index === current ? 1 : 0,
                transition: 'opacity 0.8s ease',
              }}
            >
              {/* Image */}
              <img
                src={slide.image}
                alt={slide.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              {/* Gradient overlay */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(10,4,2,0.82) 0%, rgba(10,4,2,0.28) 55%, transparent 100%)',
              }} />

              {/* Content — bottom aligned */}
              <div style={{
                position: 'absolute',
                bottom: 0, left: 0, right: 0,
                padding: '16px 20px 20px',
                textAlign: 'center',
              }}>
                {/* Tag badge */}
                <span style={{
                  display: 'inline-block',
                  background: '#800000',
                  color: '#F5F5DC',
                  fontSize: 10,
                  fontWeight: 700,
                  fontFamily: '"Inter", sans-serif',
                  letterSpacing: 1.2,
                  padding: '3px 10px',
                  borderRadius: 99,
                  marginBottom: 8,
                  textTransform: 'uppercase',
                }}>
                  {slide.tag}
                </span>

                <h2 style={{
                  margin: '0 0 6px',
                  fontSize: 22,
                  fontWeight: 700,
                  fontFamily: '"Merriweather", serif',
                  color: '#FFFDF8',
                  lineHeight: 1.25,
                }}>
                  {slide.title}
                </h2>
                <p style={{
                  margin: '0 0 14px',
                  fontSize: 12.5,
                  color: 'rgba(255,253,248,0.72)',
                  fontFamily: '"Inter", sans-serif',
                  lineHeight: 1.6,
                }}>
                  {slide.subtitle}
                </p>

                <Link
                  to={slide.link}
                  style={{
                    display: 'inline-block',
                    padding: '9px 20px',
                    background: 'linear-gradient(135deg, #6B2737, #800000)',
                    color: '#F5F5DC',
                    borderRadius: 8,
                    fontFamily: '"Inter", sans-serif',
                    fontWeight: 600,
                    fontSize: 13,
                    textDecoration: 'none',
                    boxShadow: '0 4px 14px rgba(128,0,0,0.4)',
                  }}
                >
                  {slide.cta} →
                </Link>
              </div>
            </div>
          ))}

          {/* Center Chevron buttons — always visible, never overlap content */}
          <button
            onClick={prevSlide}
            style={{
              position: 'absolute',
              left: 5,
              top: '48%',
              transform: 'translateY(-50%)',
              zIndex: 20,
              width: 36, height: 36,
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.18)',
              backdropFilter: 'blur(6px)',
              border: '1px solid rgba(255,255,255,0.25)',
              color: '#fff',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <ChevronLeft style={{ width: 18, height: 18 }} />
          </button>
          <button
            onClick={nextSlide}
            style={{
              position: 'absolute',
              right: 5,
              top: '48%',
              transform: 'translateY(-50%)',
              zIndex: 20,
              width: 36, height: 36,
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.18)',
              backdropFilter: 'blur(6px)',
              border: '1px solid rgba(255,255,255,0.25)',
              color: '#fff',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <ChevronRight style={{ width: 18, height: 18 }} />
          </button>

          {/* Dots — top right */}
          <div style={{
            position: 'absolute', top: 14, right: 14, zIndex: 20,
            display: 'flex', gap: 5,
          }}>
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                style={{
                  width: i === current ? 20 : 7,
                  height: 7,
                  borderRadius: 99,
                  background: i === current ? '#F5F5DC' : 'rgba(255,255,255,0.4)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'width 0.3s ease, background 0.3s ease',
                  padding: 0,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ─── DESKTOP: Full-screen slider ─── */}
      <div className="hidden sm:block relative h-[calc(100vh-56px)] w-full overflow-hidden bg-brand-darkbrown">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === current ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <div className="absolute inset-0 bg-black/40 z-10" />
            <img
              src={slide.image}
              alt={slide.title}
              className={`w-full h-full object-cover transition-transform duration-[10000ms] ${index === current ? 'scale-110' : 'scale-100'
                }`}
            />
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-8">
              <span className="inline-block bg-brand-maroon text-white text-xs font-bold tracking-widest uppercase px-4 py-1 rounded-full mb-4 opacity-90">
                {slide.tag}
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-4 drop-shadow-lg">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl drop-shadow-md">
                {slide.subtitle}
              </p>
              <Link
                to={slide.link}
                className="px-8 py-4 bg-brand-maroon text-white font-bold text-lg rounded hover:bg-red-900 transition-colors shadow-lg"
              >
                {slide.cta}
              </Link>
            </div>
          </div>
        ))}

        {/* Desktop chevrons */}
        <button
          onClick={prevSlide}
          className="absolute left-5 top-1/2 -translate-y-1/2 z-30 p-2.5 bg-white/20 hover:bg-red-900/50 rounded-full text-white backdrop-blur-sm transition-all"
        >
          <ChevronLeft className="w-7 h-7" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-5 top-1/2 -translate-y-1/2 z-30 p-2.5 bg-white/20 hover:bg-red-900/50 rounded-full text-white backdrop-blur-sm transition-all"
        >
          <ChevronRight className="w-7 h-7" />
        </button>

        {/* Desktop dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-3 rounded-full transition-all ${index === current ? 'bg-brand-maroon w-8' : 'bg-white/50 w-3 hover:bg-white/80'
                }`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default HeroSlider;
