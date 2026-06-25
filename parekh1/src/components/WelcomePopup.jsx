import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const WelcomePopup = ({ onClose }) => {
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 400);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setVisible(false);
      onClose && onClose();
    }, 450);
  };

  if (!visible) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={handleClose}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(10, 4, 2, 0.65)',
          backdropFilter: 'blur(5px)',
          zIndex: 8000,
          animation: closing ? 'backdropOut 0.45s ease forwards' : 'backdropIn 0.35s ease forwards',
        }}
      />

      {/* Popup Card */}
      <div
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 8001,
          width: '92%',
          maxWidth: 440,
          animation: closing
            ? 'popupOut 0.45s cubic-bezier(0.4,0,1,1) forwards'
            : 'popupIn 0.5s cubic-bezier(0.34,1.56,0.64,1) forwards',
        }}
      >
        <div style={{
          background: '#FFFDF8',
          borderRadius: 18,
          overflow: 'hidden',
          boxShadow: '0 30px 70px rgba(74,55,40,0.3), 0 0 0 1px rgba(128,0,0,0.07)',
        }}>

          {/* Top Banner */}
          <div style={{
            background: 'linear-gradient(135deg, #4A3728 0%, #6B2737 55%, #800000 100%)',
            padding: '28px 28px 22px',
            position: 'relative',
            overflow: 'hidden',
          }}>
            {/* Subtle decorative circles */}
            <div style={{
              position: 'absolute', top: -25, right: -25,
              width: 110, height: 110, borderRadius: '50%',
              background: 'rgba(255,255,255,0.05)',
              pointerEvents: 'none',
            }} />
            <div style={{
              position: 'absolute', bottom: -20, left: -15,
              width: 80, height: 80, borderRadius: '50%',
              background: 'rgba(245,245,220,0.04)',
              pointerEvents: 'none',
            }} />

            {/* Close button */}
            <button
              onClick={handleClose}
              style={{
                position: 'absolute', top: 12, right: 12,
                width: 30, height: 30, borderRadius: '50%',
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.18)',
                color: '#F5F5DC',
                fontSize: 14, cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
            >✕</button>

            {/* Heading — no logo */}
            <h2 style={{
              margin: 0,
              fontSize: 21,
              fontWeight: 700,
              fontFamily: '"Merriweather", serif',
              color: '#F5F5DC',
              letterSpacing: 0.8,
            }}>
              Welcome to AuraWeave
            </h2>
            <p style={{
              margin: '8px 0 0',
              fontSize: 13,
              color: 'rgba(245,245,220,0.6)',
              fontFamily: '"Inter", sans-serif',
            }}>
              Your trusted partner in textile excellence
            </p>
          </div>

          {/* Body */}
          <div style={{ padding: '22px 28px 24px' }}>
            <p style={{
              fontSize: 14,
              color: '#4A3728',
              fontFamily: '"Inter", sans-serif',
              lineHeight: 1.75,
              margin: '0 0 22px',
            }}>
              Discover our exclusive range of premium textiles — from exquisite silk sarees to suiting fabrics, curated to meet the diverse needs of our clients.
            </p>

            {/* Buttons */}
            <div style={{ display: 'flex', gap: 10 }}>
              <Link
                to="/trade-enquiry"
                onClick={handleClose}
                style={{
                  flex: 1,
                  display: 'block',
                  textAlign: 'center',
                  padding: '11px 14px',
                  background: 'linear-gradient(135deg, #6B2737, #800000)',
                  color: '#F5F5DC',
                  borderRadius: 9,
                  fontFamily: '"Inter", sans-serif',
                  fontWeight: 600,
                  fontSize: 13,
                  textDecoration: 'none',
                  boxShadow: '0 4px 14px rgba(128,0,0,0.28)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 7px 20px rgba(128,0,0,0.38)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 14px rgba(128,0,0,0.28)';
                }}
              >
                Trade Enquiry
              </Link>
              <button
                onClick={handleClose}
                style={{
                  flex: 1,
                  padding: '11px 14px',
                  background: 'transparent',
                  border: '1.5px solid rgba(74,55,40,0.22)',
                  borderRadius: 9,
                  color: '#4A3728',
                  fontFamily: '"Inter", sans-serif',
                  fontWeight: 600,
                  fontSize: 13,
                  cursor: 'pointer',
                  transition: 'border-color 0.2s, background 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = '#800000';
                  e.currentTarget.style.background = 'rgba(128,0,0,0.04)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(74,55,40,0.22)';
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                Explore Site →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes backdropIn  { from { opacity: 0; } to { opacity: 1; } }
        @keyframes backdropOut { from { opacity: 1; } to { opacity: 0; } }
        @keyframes popupIn  { from { opacity: 0; transform: translate(-50%, -47%) scale(0.9); } to { opacity: 1; transform: translate(-50%, -50%) scale(1); } }
        @keyframes popupOut { from { opacity: 1; transform: translate(-50%, -50%) scale(1); } to { opacity: 0; transform: translate(-50%, -53%) scale(0.92); } }
      `}</style>
    </>
  );
};

export default WelcomePopup;
