import React, { useState, useEffect, useRef } from 'react';
import nunImg from '../assets/images/nun_blue.png';
import partnerImg from '../assets/images/partner.png';
import scaleImg from '../assets/images/scale.png';

const Roadmap: React.FC = () => {
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 1024 : false);
  const [scrollPercent, setScrollPercent] = useState(0);
  const roadmapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!roadmapRef.current) return;
      const rect = roadmapRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Logic: Start when top of section is at bottom of screen, 
      // End when bottom of section is at top of screen.
      const distance = windowHeight - rect.top;
      const totalHeight = rect.height + windowHeight;
      let percentage = Math.min(Math.max(distance / totalHeight, 0), 1);
      
      setScrollPercent(percentage * 100);
    };

    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section ref={roadmapRef} style={{ ...roadmapSection, padding: isMobile ? '40px 10px' : '80px 20px' }}>
      
      <div style={{ ...headerContainer, marginBottom: isMobile ? '40px' : '100px' }}>
        <h2 style={{ ...title, fontSize: isMobile ? '32px' : '48px' }}>🚀 Our Roadmap</h2>
        <p style={subtitle}>Building the future, one milestone at a time</p>
      </div>

      <div style={{
        ...timelineTrack,
        top: isMobile ? '250px' : '650px',
        left: isMobile ? '30px' : '0',
        width: isMobile ? '40px' : '100%',
        height: isMobile ? '80%' : '60px', // Slimmer bar on desktop
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: 'flex-start',
        borderTop: isMobile ? 'none' : '3px solid #2B7E6F',
        borderBottom: isMobile ? 'none' : '3px solid #2B7E6F',
        borderLeft: isMobile ? '3px solid #2B7E6F' : 'none',
        borderRight: isMobile ? '3px solid #2B7E6F' : 'none',
      }}>
        {/* The Yellow Progress Trail */}
        <div style={{
          ...timelineProgress,
          background: '#EFBF04',
          opacity: 0.8,
          width: isMobile ? '100%' : `${scrollPercent}%`,
          height: isMobile ? `${scrollPercent}%` : '100%',
          transition: 'all 0.1s ease-out'
        }} />

        {/* The Moving Rocket */}
        <div style={{
          ...rocketIcon,
          position: 'absolute',
          left: isMobile ? '50%' : `${scrollPercent}%`,
          top: isMobile ? `${scrollPercent}%` : '50%',
          transform: isMobile 
            ? `translate(-50%, -50%) rotate(135deg)` 
            : `translate(-50%, -50%) rotate(45deg)`,
          transition: 'all 0.1s ease-out',
          zIndex: 3,
          marginLeft: 0 // Resetting the hardcoded margin from your style object
        }}>
          🚀
        </div>
      </div>

      <div style={{
        ...cardsContainer,
        // Ensure cards have margin-left on mobile to not overlap the vertical rocket
        paddingLeft: isMobile ? '60px' : '0'
      }}>
        {/* Phase 1 */}
        <div className="roadmap-card phase-1" style={phaseWrapper}>
          <div style={{ ...badge, background: '#D4F1ED', color: '#2B7E6F' }}>Pilot</div>
          <div style={card}>
            <div style={imageContainer}><img src={nunImg} style={imgFit} alt="" /></div>
            <h3 style={cardTitle}>Launch Pilot at Nile University Of Nigeria</h3>
            <ul style={cardList}>
              <li>Target 1,000+ students in first pilot phase</li>
              <li>Digitize student health records at Nile Clinic</li>
            </ul>
          </div>
        </div>

        {/* Phase 2 */}
        <div className="roadmap-card phase-2" style={phaseWrapper}>
          <div style={{ ...badge, background: '#FFDDDA', color: '#FF3522' }}>Expansion</div>
          <div style={{ ...card, minHeight: '520px' }}>
            <div style={{ ...imageContainer, background: '#FFECD0' }}><img src={partnerImg} style={imgFit} alt="" /></div>
            <h3 style={cardTitle}>Partner with Clinics and Hospitals in Abuja</h3>
            <ul style={cardList}>
              <li>Start with 1-2 trusted clinics in Abuja</li>
              <li>Build foundation for government partnerships</li>
            </ul>
          </div>
        </div>

        {/* Phase 3 */}
        <div className="roadmap-card phase-3" style={phaseWrapper}>
          <div style={{ ...badge, background: '#D6E8F1', color: '#0B78A8' }}>Scale</div>
          <div style={{ ...card, minHeight: '570px' }}>
            <div style={imageContainer}><img src={scaleImg} style={imgFit} alt="" /></div>
            <h3 style={cardTitle}>Scalable rollout to Lagos and beyond</h3>
            <ul style={cardList}>
              <li>Onboard 5,000-10,000 Lagos users in year one</li>
              <li>Test cross-provider data sharing</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

/* --- Styles --- */

const roadmapSection: React.CSSProperties = {
  width: '100%',
  padding: '80px 20px',
  background: 'white',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  overflow: 'hidden'
};

const headerContainer: React.CSSProperties = {
  textAlign: 'center',
  marginBottom: '100px'
};

const title: React.CSSProperties = {
  fontSize: '48px',
  fontFamily: 'Poppins, sans-serif',
  fontWeight: '700',
  color: '#2B7E6F',
  margin: 0
};

const subtitle: React.CSSProperties = {
  fontSize: '20px',
  fontFamily: 'Roboto, sans-serif',
  color: '#808080',
  marginTop: '10px'
};

const timelineTrack: React.CSSProperties = {
  position: 'absolute',
  top: '650px', // Adjusted to sit behind the cards
  width: '100%',
  height: '80px',
  background: '#BAE9E1',
  borderTop: '3px solid #2B7E6F',
  borderBottom: '3px solid #2B7E6F',
  zIndex: 1,
  display: 'flex',
  alignItems: 'center'
};

const timelineProgress: React.CSSProperties = {
  width: '20%',
  height: '100%',
  background: 'rgba(239, 191, 4, 0.3)',
};

const rocketIcon: React.CSSProperties = {
  fontSize: '40px',
  marginLeft: '-20px',
  transform: 'rotate(45deg)'
};

const cardsContainer: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'flex-start',
  gap: '40px',
  width: '100%',
  maxWidth: '1400px',
  zIndex: 2 // Sit above the timeline bar
};

const phaseWrapper: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '20px',
  flex: '1',
  minWidth: '320px',
  maxWidth: '450px'
};

const badge: React.CSSProperties = {
  padding: '10px 30px',
  borderRadius: '14px',
  fontSize: '22px',
  fontFamily: 'Roboto, sans-serif',
  fontWeight: '500'
};

const card: React.CSSProperties = {
  background: 'white',
  borderRadius: '10px',
  padding: '20px',
  boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
  border: '1px solid #808080',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px'
};

const imageContainer: React.CSSProperties = {
  width: '100%',
  height: '200px',
  borderRadius: '10px',
  overflow: 'hidden',
  border: '1px solid #2B7E6F'
};

const imgFit: React.CSSProperties = {
  width: '100%',
  height: '100%',
  objectFit: 'cover'
};

const cardTitle: React.CSSProperties = {
  fontSize: '22px',
  fontFamily: 'Roboto, sans-serif',
  fontWeight: '500',
  color: 'black',
  textAlign: 'center',
  lineHeight: '1.3'
};

const cardList: React.CSSProperties = {
  fontSize: '16px',
  fontFamily: 'Roboto, sans-serif',
  color: '#424242',
  fontWeight: '300',
  lineHeight: '1.6',
  paddingLeft: '20px'
};

export default Roadmap;