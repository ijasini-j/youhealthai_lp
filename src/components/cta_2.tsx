import React, { useState, useEffect } from 'react';
import you_tech from '../assets/svgs/you_tech.svg';
import linkedinIcon from '../assets/svgs/linkedin.svg';

const CorporateCTA: React.FC = () => {
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section style={{
      ...container,
      minHeight: isMobile ? 'auto' : '800px', // Allow section to shrink on mobile
      padding: isMobile ? '60px 20px' : '100px 20px',
    }}>
      {/* Parent Company Branding */}
      <div style={{ ...brandWrapper, marginBottom: isMobile ? '30px' : '60px' }}>
        <div style={{ ...brandHeader, gap: isMobile ? '10px' : '20px' }}>
          <img 
            style={{ ...logoStyle, width: isMobile ? '40px' : '80px' }} 
            src={you_tech} 
            alt="YouTechnologies Logo" 
          />
          <h2 style={{ ...brandName, fontSize: isMobile ? '24px' : '36px' }}>
            YouTechnologies LTD
          </h2>
        </div>
        <div style={horizontalLine} />
        <p style={{ ...productNote, fontSize: isMobile ? '16px' : '24px' }}>
          YouHealthai is a product of YouTechnologies LTD
        </p>
      </div>

      {/* Mission Statement */}
      <div style={{ ...missionWrapper, margin: isMobile ? '20px 0' : '40px 0' }}>
        <h3 style={missionText}>
          <span style={{ color: 'black', fontWeight: '600' }}>YouTechnologies </span>
          <span style={{ color: '#4A4A4A', fontWeight: '400' }}>
            is focused on building technological solutions that cater to the individual needs of Africans.
          </span>
        </h3>
      </div>

      {/* Action Area */}
      <div style={{ 
        ...actionContainer, 
        flexDirection: isMobile ? 'column' : 'row',
        gap: isMobile ? '20px' : '40px' 
      }}>
        <button style={{ 
          ...contactButton, 
          width: isMobile ? '100%' : '325px',
          maxWidth: '325px',
          fontSize: isMobile ? '18px' : '24px',
          padding: isMobile ? '15px' : '20px'
        }}>
          Contact Us
        </button>
        <div style={iconBox}>
          <img src={linkedinIcon} style={{ width: '100%', height: 'auto' }} alt="LinkedIn" />
        </div>
      </div>
    </section>
  );
};

/* --- Modified Styles --- */

const container: React.CSSProperties = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'white',
  textAlign: 'center',
  boxSizing: 'border-box'
};

const brandWrapper: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '15px',
  width: '100%'
};

const brandHeader: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
};

const logoStyle: React.CSSProperties = {
  height: 'auto',
};

const brandName: React.CSSProperties = {
  fontFamily: 'Poppins, sans-serif',
  fontWeight: '600',
  margin: 0,
  color: 'black'
};

const horizontalLine: React.CSSProperties = {
  width: '100%',
  maxWidth: '600px',
  height: '1px',
  background: '#808080',
};

const productNote: React.CSSProperties = {
  color: '#808080',
  fontFamily: 'Roboto, sans-serif',
  margin: 0,
};

const missionWrapper: React.CSSProperties = {
  maxWidth: '1140px',
};

const missionText: React.CSSProperties = {
  fontSize: 'clamp(24px, 5vw, 60px)', // Lowered the minimum from 32px to 24px
  fontFamily: 'Poppins, sans-serif',
  lineHeight: '1.2',
  wordWrap: 'break-word',
  margin: 0
};

const actionContainer: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '40px',
  width: '100%'
};

const contactButton: React.CSSProperties = {
  background: '#0B3C5D',
  color: 'white',
  fontFamily: 'Inter, sans-serif',
  fontWeight: '700',
  border: 'none',
  borderRadius: '21px',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
  cursor: 'pointer',
};

const iconBox: React.CSSProperties = {
  width: '56px',
  height: '56px',
};

export default CorporateCTA;