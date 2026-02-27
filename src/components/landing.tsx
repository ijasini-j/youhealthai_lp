import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import yh from '../assets/svgs/you_tech.svg';
import st_abj from '../assets/svgs/st_abj_crd.svg';
import hnrs from '../assets/svgs/hnr_crd.svg';
import nun from '../assets/svgs/nun_crd.svg';
import Navbar from './nav';

/* --- PROPS INTERFACES --- */
interface ResponsiveProps {
  isMobile: boolean;
}

const HeroSection: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{ width: '100%', overflow: 'hidden', background: '#fff' }}>
      {/* --- HERO AREA --- */}
      <section style={{ 
        minHeight: isMobile ? 'auto' : '100vh', 
        position: 'relative', 
        background: 'linear-gradient(270deg, #01AD92 0%, #00473C 100%)', 
        overflow: 'hidden',
        paddingBottom: isMobile ? '60px' : '0px' 
      }}>
        <BackgroundCircles isMobile={isMobile} />
        <Navbar />

        {/* Main Hero Content */}
        <div style={{
          ...contentContainerStyles,
          flexDirection: isMobile ? 'column' : 'row',
          padding: isMobile ? '40px 5%' : '80px 5%',
          textAlign: isMobile ? 'center' : 'left',
          alignItems: isMobile ? 'center' : 'center',
          gap: isMobile ? '60px' : '40px'
        }}>
          
          {/* Large Background Text - Hidden on Mobile */}
          {!isMobile && <div style={bgTextStyles}>YouHealthai</div>}

          <div style={{ zIndex: 2, maxWidth: '700px', display: 'flex', flexDirection: 'column', alignItems: isMobile ? 'center' : 'flex-start' }}>
            <h1 style={heroTitleStyles}>Smarter healthcare Starts with YOU</h1>
            <p style={{
              ...heroSubtextStyles,
              fontSize: isMobile ? '18px' : '24px',
              margin: isMobile ? '0 auto 30px' : '0 0 40px'
            }}>
              Empowering you with control over your health data, providing AI-powered insights for a healthier life.
            </p>
            
            {/* Powered By Tag */}
            <div style={{
              ...poweredByStyles,
              padding: isMobile ? '8px 16px' : '10px 20px',
              gap: isMobile ? '10px' : '15px',
              // Ensures the tag itself doesn't try to center its own content
              justifyContent: 'flex-start',
              // If you want to force it left regardless of the parent:
              alignSelf: 'flex-start' 
            }}>
              <img src={yh} alt="Tech Icon" style={{ height: isMobile ? '28px' : '40px' }} />
              <span style={{ fontSize: isMobile ? '14px' : '18px', color: '#272727' }}>
                powered by <strong>YouTechnologies LTD</strong>
              </span>
            </div>
          </div>

          {/* Countdown Card */}
          <CountdownCard isMobile={isMobile} />
        </div>
      </section>

      {/* --- PARTNERS SECTION --- */}
      <section 
        ref={ref} 
        className={inView ? 'is-visible' : ''} 
        style={{
          ...partnerSectionStyles,
          padding: isMobile ? '30px 5%' : '60px 5%'
        }}
      >
        <h3 style={{ color: '#424242', textAlign: 'center', marginBottom: '40px' }}>
          Our Partners
        </h3>
        
        <div style={{
          ...partnerGridStyles, 
          gap: isMobile ? '20px' : '80px',
          flexWrap: 'nowrap',
        }}>
          <a href="https://www.linkedin.com/feed/update/urn:li:activity:7389373219541041153" target="_blank" rel="noopener noreferrer" className="partner-link">
            <img src={st_abj} alt="Partner 1" style={{ width: isMobile ? '90px' : '150px', height: 'auto' }} />
          </a>
          
          <a href="https://www.linkedin.com/feed/update/urn:li:activity:7337964087844196355" target="_blank" rel="noopener noreferrer" className="partner-link">
            <img src={nun} alt="Partner 2" style={{ width: isMobile ? '120px' : '200px', height: 'auto' }} />
          </a>
          
          <a href="https://www.linkedin.com/feed/update/urn:li:activity:7392616907763376128" target="_blank" rel="noopener noreferrer" className="partner-link">
            <img src={hnrs} alt="Partner 3" style={{ width: isMobile ? '100px' : '180px', height: 'auto' }} />
          </a>
        </div>
      </section>
    </div>
  );
};

/* --- SUB-COMPONENTS --- */

const CountdownCard: React.FC<ResponsiveProps> = ({ isMobile }) => {
  const targetDate = new Date('2026-03-14T00:00:00').getTime();
  const [timeLeft, setTimeLeft] = useState({ days: '00', hours: '00', minutes: '00', seconds: '00' });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)).toString().padStart(2, '0'),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0'),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0'),
          seconds: Math.floor((difference % (1000 * 60)) / 1000).toString().padStart(2, '0')
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div style={{
      ...countdownCardStyles,
      padding: isMobile ? '25px 15px' : '40px',
      width: isMobile ? '100%' : 'auto',
      maxWidth: isMobile ? '350px' : '500px'
    }}>
      <div style={liveTagStyles}>🚀 We are live in...</div>
      
      <div style={{ display: 'flex', gap: isMobile ? '5px' : '15px', alignItems: 'center', justifyContent: 'center' }}>
        <TimeBlock value={timeLeft.days} label="Days" isMobile={isMobile} />
        <span style={{...separatorStyle, fontSize: isMobile ? '28px' : '48px'}}>:</span>
        <TimeBlock value={timeLeft.hours} label="Hours" isMobile={isMobile} />
        <span style={{...separatorStyle, fontSize: isMobile ? '28px' : '48px'}}>:</span>
        <TimeBlock value={timeLeft.minutes} label="Minutes" isMobile={isMobile} />
        <span style={{...separatorStyle, fontSize: isMobile ? '28px' : '48px'}}>:</span>
        <TimeBlock value={timeLeft.seconds} label="Seconds" isMobile={isMobile} />
      </div>

      <a 
        href="https://forms.gle/6VqkFqDKVHQ4tLHW7" 
        target="_blank" 
        rel="noopener noreferrer" 
        style={{
          ...waitlistBtnLarge,
          textDecoration: 'none',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center'
        }}
      >
        Join our Waitlist <span style={{ marginLeft: '8px' }}>&rarr;</span>
      </a>
    </div>
  );
};

const TimeBlock = ({ value, label, isMobile }: { value: string, label: string, isMobile: boolean }) => (
  <div style={{ textAlign: 'center', minWidth: isMobile ? '45px' : '60px' }}>
    <div style={{ 
      fontSize: isMobile ? '28px' : '48px', 
      fontWeight: '600', 
      color: 'black', 
      fontFamily: 'Poppins',
      lineHeight: 1
    }}>
      {value}
    </div>
    <div style={{ fontSize: isMobile ? '9px' : '14px', color: '#808080', textTransform: 'uppercase', marginTop: '5px' }}>
      {label}
    </div>
  </div>
);

const BackgroundCircles: React.FC<ResponsiveProps> = ({ isMobile }) => {
  // Using vw units to ensure circles scale with screen width and never overflow
  return (
    <>
      <div className="animated-circle" style={{ ...circleBase, width: isMobile ? '100vw' : '1068px', height: isMobile ? '100vw' : '1068px', left: isMobile ? '-20%' : '-165px', top: isMobile ? '-10%' : '-159px', background: '#2B7E6F', animationDelay: '0s' }} />
      <div className="animated-circle" style={{ ...circleBase, width: isMobile ? '80vw' : '912px', height: isMobile ? '80vw' : '912px', left: isMobile ? '-15%' : '-151px', top: isMobile ? '-5%' : '-161px', background: '#449687', animationDelay: '0.2s' }} />
      <div className="animated-circle" style={{ ...circleBase, width: isMobile ? '60vw' : '573px', height: isMobile ? '60vw' : '573px', left: isMobile ? '-10%' : '-151px', top: isMobile ? '0%' : '-161px', background: '#80C2B6', animationDelay: '0.4s' }} />
    </>
  );
};

/* --- STYLES OBJECTS --- */

const contentContainerStyles: React.CSSProperties = {
  maxWidth: '1300px', 
  margin: '0 auto', 
  display: 'flex', 
  justifyContent: 'space-between', 
  zIndex: 5,
  position: 'relative'
};

const heroTitleStyles: React.CSSProperties = {
  fontSize: 'clamp(32px, 7vw, 64px)', 
  fontWeight: 700, 
  color: 'white', 
  marginBottom: '24px', 
  lineHeight: '1.2'
};

const heroSubtextStyles: React.CSSProperties = {
  color: 'white', opacity: 0.9, lineHeight: '1.5'
};

const bgTextStyles: React.CSSProperties = {
  position: 'absolute', left: '-100px', top: '50px', fontSize: '200px',
  fontWeight: 800, color: 'rgba(248, 250, 252, 0.05)', whiteSpace: 'nowrap', zIndex: 1
};

const countdownCardStyles: React.CSSProperties = {
  background: 'rgba(255, 255, 255, 0.95)', borderRadius: '22px',
  boxShadow: '0 20px 40px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column',
  alignItems: 'center', gap: '20px', backdropFilter: 'blur(10px)', zIndex: 5
};

const waitlistBtnLarge: React.CSSProperties = {
  width: '100%', background: 'linear-gradient(270deg, #4BA2C8 0%, #4691B2 100%)',
  color: 'white', padding: '15px', borderRadius: '17px', border: 'none',
  fontWeight: 700, fontSize: '18px', cursor: 'pointer', marginTop: '10px'
};

const liveTagStyles: React.CSSProperties = {
  background: 'linear-gradient(90deg, #00CCAC 0%, #2EAF99 100%)', color: 'white',
  padding: '8px 24px', borderRadius: '20px', fontWeight: 'bold', fontSize: '14px'
};

const partnerSectionStyles: React.CSSProperties = {
  padding: '60px 5%', background: 'white'
};

const partnerGridStyles: React.CSSProperties = {
  display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap'
};

const circleBase: React.CSSProperties = {
  position: 'absolute', borderRadius: '50%', border: '1px solid white', opacity: 0.3, zIndex: 0
};

const poweredByStyles: React.CSSProperties = {
  display: 'flex', alignItems: 'center', background: 'white', borderRadius: '12px', width: 'fit-content'
};

const separatorStyle: React.CSSProperties = {
  fontWeight: 'bold', color: 'black', paddingBottom: '10px'
};

export default HeroSection;