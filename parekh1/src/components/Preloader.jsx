import React, { useEffect, useState } from 'react';

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    let current = 0;
    const interval = setInterval(() => {
      current += Math.random() * 18 + 4;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setTimeout(() => {
          setFadeOut(true);
          setTimeout(() => {
            onComplete && onComplete();
          }, 600);
        }, 300);
      }
      setProgress(Math.floor(current));
    }, 120);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`preloader-overlay ${fadeOut ? 'preloader-fadeout' : ''}`}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #2C1810 0%, #4A3728 40%, #6B2737 80%, #800000 100%)',
        transition: 'opacity 0.6s ease, transform 0.6s ease',
        opacity: fadeOut ? 0 : 1,
        pointerEvents: fadeOut ? 'none' : 'all',
      }}
    >
      {/* Decorative background orbs */}
      <div style={{
        position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none'
      }}>
        <div style={{
          position: 'absolute', top: '15%', left: '10%', width: 300, height: 300,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(128,0,0,0.25) 0%, transparent 70%)',
          animation: 'orbFloat1 6s ease-in-out infinite',
        }} />
        <div style={{
          position: 'absolute', bottom: '15%', right: '10%', width: 250, height: 250,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(245,245,220,0.08) 0%, transparent 70%)',
          animation: 'orbFloat2 8s ease-in-out infinite',
        }} />
        <div style={{
          position: 'absolute', top: '50%', left: '50%', width: 400, height: 400,
          transform: 'translate(-50%, -50%)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(74,55,40,0.3) 0%, transparent 60%)',
          animation: 'orbPulse 4s ease-in-out infinite',
        }} />
      </div>
{/* bshdb */}
      {/* Main Logo Ring */}
      <div style={{ position: 'relative', marginBottom: 40 }}>
        {/* Outer rotating ring */}
        <div style={{
          width: 120, height: 120,
          borderRadius: '50%',
          border: '2px solid rgba(245,245,220,0.15)',
          borderTop: '2px solid #F5F5DC',
          borderRight: '2px solid rgba(245,245,220,0.5)',
          animation: 'spinSlow 2.5s linear infinite',
          position: 'absolute',
          top: -12, left: -12,
          width: 120, height: 120,
        }} />

        {/* Middle rotating ring (opposite) */}
        <div style={{
          width: 96, height: 96,
          borderRadius: '50%',
          border: '2px solid rgba(128,0,0,0.3)',
          borderBottom: '2px solid #CC3344',
          borderLeft: '2px solid rgba(204,51,68,0.4)',
          animation: 'spinFast 1.8s linear infinite reverse',
          position: 'absolute',
          top: 0, left: 0,
          width: 96, height: 96,
        }} />

        {/* Center circle with AW logo */}
        <div style={{
          width: 96, height: 96,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, rgba(245,245,220,0.12), rgba(245,245,220,0.04))',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(245,245,220,0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          animation: 'logoPulse 2s ease-in-out infinite',
          boxShadow: '0 0 40px rgba(128,0,0,0.4), inset 0 0 20px rgba(245,245,220,0.05)',
        }}>
          <span style={{
            fontSize: 22,
            fontWeight: 800,
            fontFamily: '"Merriweather", serif',
            color: '#F5F5DC',
            textShadow: '0 0 20px rgba(245,245,220,0.5)',
            letterSpacing: '1px',
          }}>AW</span>
        </div>
      </div>

      {/* Brand Name */}
      <div style={{ textAlign: 'center', marginBottom: 8, animation: 'fadeInUp 0.8s ease 0.2s both' }}>
        <h1 style={{
          fontSize: 28,
          fontWeight: 700,
          fontFamily: '"Merriweather", serif',
          color: '#F5F5DC',
          letterSpacing: 4,
          margin: 0,
          textShadow: '0 2px 20px rgba(0,0,0,0.5)',
        }}>
          AURAWEAVE
        </h1>
        <p style={{
          fontSize: 11,
          letterSpacing: 6,
          color: 'rgba(245,245,220,0.55)',
          margin: '6px 0 0',
          fontFamily: '"Inter", sans-serif',
          textTransform: 'uppercase',
        }}>
          SINCE EXCELLENCE
        </p>
      </div>

      {/* Thin horizontal divider with glow */}
      <div style={{
        width: 160,
        height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(245,245,220,0.4), transparent)',
        margin: '20px 0',
        animation: 'fadeInUp 0.8s ease 0.4s both',
      }} />

      {/* Progress Bar Container */}
      <div style={{
        width: 240,
        animation: 'fadeInUp 0.8s ease 0.5s both',
      }}>
        {/* Progress bar track */}
        <div style={{
          height: 3,
          background: 'rgba(245,245,220,0.1)',
          borderRadius: 99,
          overflow: 'hidden',
          position: 'relative',
        }}>
          {/* Progress fill */}
          <div style={{
            height: '100%',
            width: `${progress}%`,
            background: 'linear-gradient(90deg, #800000, #CC3344, #F5F5DC)',
            borderRadius: 99,
            transition: 'width 0.15s ease',
            position: 'relative',
            boxShadow: '0 0 8px rgba(204,51,68,0.6)',
          }}>
            {/* Shimmer effect */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)',
              animation: 'shimmer 1.5s ease infinite',
            }} />
          </div>
        </div>

        {/* Progress percentage */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: 10,
          alignItems: 'center',
        }}>
          <span style={{
            fontSize: 11,
            color: 'rgba(245,245,220,0.4)',
            fontFamily: '"Inter", sans-serif',
            letterSpacing: 1,
          }}>LOADING</span>
          <span style={{
            fontSize: 13,
            fontWeight: 600,
            color: '#F5F5DC',
            fontFamily: '"Inter", sans-serif',
          }}>{progress}%</span>
        </div>
      </div>

      {/* Bottom dots animation */}
      <div style={{
        display: 'flex',
        gap: 8,
        marginTop: 32,
        animation: 'fadeInUp 0.8s ease 0.6s both',
      }}>
        {[0, 1, 2].map((i) => (
          <div key={i} style={{
            width: 6, height: 6,
            borderRadius: '50%',
            background: '#800000',
            animation: `dotBounce 1.2s ease-in-out ${i * 0.2}s infinite`,
            boxShadow: '0 0 6px rgba(128,0,0,0.6)',
          }} />
        ))}
      </div>

      {/* Keyframe styles injected */}
      <style>{`
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes spinFast {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes logoPulse {
          0%, 100% { transform: scale(1);   box-shadow: 0 0 40px rgba(128,0,0,0.4), inset 0 0 20px rgba(245,245,220,0.05); }
          50%       { transform: scale(1.06); box-shadow: 0 0 60px rgba(128,0,0,0.6), inset 0 0 30px rgba(245,245,220,0.08); }
        }
        @keyframes orbFloat1 {
          0%, 100% { transform: translateY(0) scale(1); }
          50%       { transform: translateY(-30px) scale(1.1); }
        }
        @keyframes orbFloat2 {
          0%, 100% { transform: translateY(0) scale(1); }
          50%       { transform: translateY(25px) scale(0.9); }
        }
        @keyframes orbPulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1);   opacity: 0.6; }
          50%       { transform: translate(-50%, -50%) scale(1.15); opacity: 1; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes dotBounce {
          0%, 80%, 100% { transform: scale(0.8); opacity: 0.4; }
          40%            { transform: scale(1.4); opacity: 1; }
        }
        @keyframes shimmer {
          from { transform: translateX(-100%); }
          to   { transform: translateX(200%); }
        }
      `}</style>
    </div>
  );
};

export default Preloader;
