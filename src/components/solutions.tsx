import React from 'react';
import watch from '../assets/images/watch.png';
import card from '../assets/images/card.png';

const SolutionsSection: React.FC = () => {
  return (
    <section style={containerStyle}>
      <h2 style={mainTitle}>Providing Life saving technology</h2>
      
      <div style={contentGrid}>
        {/* Solution 1: Proactive Care */}
        <div style={solutionCard}>
          <div style={imageWrapper}>
            <img 
              style={imageStyle} 
              src={watch} 
              alt="Wearable technology integration" 
            />
          </div>
          <h3 style={cardTitle}>Proactive Care via Wearables</h3>
          <p style={cardDescription}>
            Integrates real-time health monitoring (blood pressure, glucose) to enable 
            early interventions and reduce Nigeria’s growing chronic disease burden.
          </p>
        </div>

        {/* Vertical Divider (Desktop Only) */}
        <div style={verticalDivider} />

        {/* Solution 2: Emergency Access */}
        <div style={solutionCard}>
          <div style={imageWrapper}>
            <img 
              style={imageStyle} 
              src={card} 
              alt="Emergency data access systems" 
            />
          </div>
          <h3 style={cardTitle}>Emergency Access Anywhere</h3>
          <p style={cardDescription}>
            Ensures life-saving data is retrievable online (NFC LifeCards, QR codes) 
            and offline (USSD codes), bridging connectivity gaps during crises.
          </p>
        </div>
      </div>
    </section>
  );
};

/* --- Styles --- */

const containerStyle: React.CSSProperties = {
  padding: '80px 40px',
  background: 'white',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '60px',
  width: '100%',
};

const mainTitle: React.CSSProperties = {
  color: '#2B7E6F',
  fontSize: '48px',
  fontFamily: 'Poppins, sans-serif',
  fontWeight: '700',
  textAlign: 'center',
};

const contentGrid: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row', // Side-by-side on desktop
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'flex-start',
  gap: '40px',
  maxWidth: '1200px',
};

const solutionCard: React.CSSProperties = {
  flex: '1',
  minWidth: '300px',
  maxWidth: '550px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '20px',
};

const imageWrapper: React.CSSProperties = {
  height: '350px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const imageStyle: React.CSSProperties = {
  maxHeight: '100%',
  maxWidth: '100%',
  objectFit: 'contain',
};

const cardTitle: React.CSSProperties = {
  textAlign: 'center',
  color: 'black',
  fontSize: '32px',
  fontFamily: 'Poppins, sans-serif',
  fontWeight: '700',
  margin: 0,
};

const cardDescription: React.CSSProperties = {
  textAlign: 'center',
  color: '#424242',
  fontSize: '20px',
  fontFamily: 'Poppins, sans-serif',
  fontWeight: '500',
  lineHeight: '1.6',
};

const verticalDivider: React.CSSProperties = {
  width: '1px',
  alignSelf: 'stretch',
  background: '#808080',
  opacity: 0.3,
  // Hide on mobile screens via media query would be ideal here
};

export default SolutionsSection;