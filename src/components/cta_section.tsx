import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import circle from '../assets/svgs/circle.svg';
import arrow1 from '../assets/svgs/arrow_1.svg';
import arrow2 from '../assets/svgs/arrow_2.svg';
import arrow3 from '../assets/svgs/arrow_4.svg';
import arrow4 from '../assets/svgs/arrow_3.svg';

const arrowIcons = [arrow1, arrow2, arrow3, arrow4];

const CTASection: React.FC = () => {
  // 1. Correct State-based mobile detection
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { ref } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  // Dynamic Styles that need isMobile
  const dynamicArrowWrapper: React.CSSProperties = {
    ...arrowWrapper,
    gap: isMobile ? '60px' : '80px',
  };

  const dynamicArrowStyle: React.CSSProperties = {
    ...arrowStyle,
    width: isMobile ? '40px' : '70px',
  };

  const dynamicHeadline: React.CSSProperties = {
    ...headline,
    fontSize: isMobile ? '32px' : '52px',
    textAlign: isMobile ? 'center' : 'left',
  };

  const dynamicSubheadline: React.CSSProperties = {
    ...subheadline,
    fontSize: isMobile ? '20px' : '36px',
    textAlign: isMobile ? 'center' : 'left',
  };

  return (
    <section style={ctaWrapper} ref={ref}>
      <div style={{
        ...contentContainer,
        flexDirection: isMobile ? 'column' : 'row',
        textAlign: isMobile ? 'center' : 'left'
      }}>
        {/* Left Side: Text Content */}
        <div style={textSide}>
          <h2 style={dynamicHeadline}>What are you waiting for?</h2>
          <p style={dynamicSubheadline}>Be one of the first to try out YouHealthai</p>
        </div>

        {/* Right Side: Image and Button */}
        <div style={actionSide}>
          <div style={imageContainer}>
            <img src={circle} alt="YouHealthai preview" style={heroImage} />
            <a 
              href="https://forms.gle/6VqkFqDKVHQ4tLHW7" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{
                ...waitlistButton,
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center'
              }}
            >
              Join our Waitlist
</a>
          </div>

          {/* The Array of Arrows */}
          <div style={dynamicArrowWrapper}>
            {arrowIcons.map((arrow, index) => {
              // Determine which animation class to use
              let animationClass = "bounce-vertical"; // default
              if (index === 0) animationClass = "bounce-diag-right";
              if (index === arrowIcons.length - 1) animationClass = "bounce-diag-left";

              return (
                <img 
                  key={index} 
                  src={arrow} 
                  alt={`arrow decoration ${index + 1}`} 
                  className={animationClass} // Apply the specific diagonal class
                  style={{ 
                    ...dynamicArrowStyle, 
                    display: 'inline-block',
                    animationDelay: `${index * 0.15}s` 
                  }} 
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* Decorative Geometric Shapes */}
      {!isMobile && (
        <div style={decorativeOverlay}>
          <div style={{ ...shape, width: 54, height: 87, left: '55%' }} />
          <div style={{ ...shape, width: 75, height: 56, left: '57%', top: -20 }} />
          <div style={{ ...shape, width: 19, height: 66, left: '70%' }} />
          <div style={{ ...shape, width: 53, height: 46, left: '68%', top: -22 }} />
          <div style={{ ...shape, width: 57, height: 31, left: '80%', top: -25 }} />
        </div>
      )}
    </section>
  );
};

/* --- Static Styles --- */

const ctaWrapper: React.CSSProperties = {
  width: '100%',
  minHeight: '626px',
  background: '#4691B2',
  position: 'relative',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  padding: '60px 0',
};

const contentContainer: React.CSSProperties = {
  maxWidth: '1280px',
  width: '100%',
  margin: '0 auto',
  padding: '0 40px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '40px',
  zIndex: 2,
};

const textSide: React.CSSProperties = {
  flex: '1',
  minWidth: '300px',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
};

const headline: React.CSSProperties = {
  color: 'white',
  fontFamily: 'Poppins, sans-serif',
  fontWeight: '700',
  margin: 0,
};

const subheadline: React.CSSProperties = {
  color: 'white',
  fontFamily: 'Poppins, sans-serif',
  fontWeight: '600',
  margin: 0,
};

const actionSide: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '20px',
  overflow: 'visible', // Ensure this is visible!
};

const imageContainer: React.CSSProperties = {
  position: 'relative',
  display: 'inline-block',
};

const arrowWrapper: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  // Ensure arrows are on top of other elements
  position: 'relative',
  zIndex: 5, 
  // Allow arrows to move outside the 'box' during animation
  overflow: 'visible',
  paddingTop: '40px', // Extra space for the upward bounce
  marginTop: '-20px', // Pull it back up to maintain layout
};

const arrowStyle: React.CSSProperties = {
  height: 'auto',
};

const heroImage: React.CSSProperties = {
  display: 'block',
  maxWidth: '100%',
  height: 'auto',
};

const waitlistButton: React.CSSProperties = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  padding: '15px 30px',
  background: '#0B3C5D',
  color: 'white',
  border: 'none',
  borderRadius: '12px',
  cursor: 'pointer',
  whiteSpace: 'nowrap',
  zIndex: 10,
  fontSize: '16px',
  fontWeight: '600'
};

const decorativeOverlay: React.CSSProperties = {
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  height: '100px',
  pointerEvents: 'none',
};

const shape: React.CSSProperties = {
  position: 'absolute',
  bottom: 0,
  border: '10px white solid',
  opacity: 0.2,
};

export default CTASection;