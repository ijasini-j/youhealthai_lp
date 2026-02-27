import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import heart from '../assets/svgs/bi_heart-pulse-fill.svg';
import chat from '../assets/svgs/ci_chat.svg';
import calender from '../assets/svgs/calender.svg';
import clipboard from '../assets/svgs/clipboard.svg';

const FeaturesSection: React.FC = () => {
  const [isMobile] = useState(window.innerWidth < 768);
  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger when 30% of section is visible
    triggerOnce: true,
  });
  return (
    <section 
      ref={ref} 
      className={inView ? 'is-visible' : ''} 
      style={sectionWrapper}
    >
<div className="accent-bar accent-bar-1" style={{
        ...accentBarOne,
        width: isMobile ? '150px' : '300px',
        height: isMobile ? '16px' : '32px',
        top: isMobile ? '20px' : '40px',
        left: isMobile ? '-10px' : '-50px',
      }} />

      <div className="accent-bar accent-bar-2" style={{
        ...accentBarTwo,
        width: isMobile ? '200px' : '390px',
        height: isMobile ? '16px' : '32px',
        top: isMobile ? '50px' : '90px',
        left: isMobile ? '-10px' : '-10px',
        // right: isMobile ? '40px' : '-10px',

      }} />

      <div style={container}>
        <header style={headerStyles}>
          <h2 style={titletext}>Be on top of your Healthcare Journey</h2>
          <p style={subtitletext}>Using intuitive features that smoothen your healthcare experience</p>
        </header>

        <div style={featuresGrid}>
          {featureData.map((feature, index) => (
            <div key={index} style={featureCard}>
              {/* Icon Container */}
              <div style={{ ...iconBox, background: feature.iconBg }}>
                <img 
                src={feature.icon} 
                alt={`${feature.title} icon`} 
                style={iconStyles} 
              />
              </div>

              <div style={textWrapper}>
                <h3 style={cardTitle}>{feature.title}</h3>
                <p style={cardDescription}>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* --- Data --- */
const featureData = [
  {
    title: "Health Dashboard",
    description: "See your complete health picture in one place. Your medical history, vitals, medications, and trends, all organized automatically.",
    iconBg: "rgba(255, 52, 34, 0.17)",
    icon: clipboard,
  },
  {
    title: "AI Chatbot",
    description: "A 24/7 health assistant that answers your questions instantly using your personal medical data for tailored, real-time guidance.",
    iconBg: "rgba(11, 120, 168, 0.17)",
    icon: chat,
  },
  {
    title: "Life tracking",
    description: "Track your sleep, activity, and mood. See how your daily habits shape your health.",
    iconBg: "rgba(255, 52, 34, 0.17)",
    icon: heart,
  },
  {
    title: "Hospital Booking",
    description: "Find nearby doctors and book appointments instantly. No waiting, no queues.",
    iconBg: "rgba(1, 173, 146, 0.17)",
    icon: calender,
  }
];

/* --- Styles --- */
const sectionWrapper: React.CSSProperties = {
  width: '100%',
  padding: '100px 0',
  background: 'white',
  position: 'relative',
  overflow: 'hidden',
  borderTop: '0.35px solid #808080',
};

const container: React.CSSProperties = {
  maxWidth: '1280px',
  margin: '0 auto',
  padding: '0 20px',
  position: 'relative',
  zIndex: 2,
};

const headerStyles: React.CSSProperties = {
  textAlign: 'center',
  marginBottom: '60px',
};

const titletext: React.CSSProperties = {
  color: '#2B7E6F',
  fontSize: '48px',
  fontFamily: 'Poppins, sans-serif',
  fontWeight: '700',
  marginBottom: '16px',
};

const subtitletext: React.CSSProperties = {
  color: '#808080',
  fontSize: '20px',
  fontFamily: 'Roboto, sans-serif',
};

const featuresGrid: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 500px), 1fr))',
  gap: '40px',
  width: '100%',
};

const featureCard: React.CSSProperties = {
  background: 'white',
  padding: '35px',
  borderRadius: '20px',
  border: '0.83px solid #808080',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  transition: 'transform 0.2s ease',
  // Add these two lines to ensure cards stay inside the grid
  width: '100%', 
  boxSizing: 'border-box', 
};

const iconBox: React.CSSProperties = {
  width: '84px',
  height: '84px',
  borderRadius: '13px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
};

const textWrapper: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
};

const cardTitle: React.CSSProperties = {
  fontSize: '26px',
  fontFamily: 'Poppins, sans-serif',
  fontWeight: '500',
  color: 'black',
};

const cardDescription: React.CSSProperties = {
  fontSize: '16.5px',
  fontFamily: 'Poppins, sans-serif',
  color: 'black',
  lineHeight: '1.6',
};

const accentBarOne: React.CSSProperties = {
  background: '#00AD92',
  position: 'absolute',
  zIndex: 1,
};

const accentBarTwo: React.CSSProperties = {
  background: '#2B7E6F',
  position: 'absolute',
  zIndex: 1,
};

const iconStyles: React.CSSProperties = {
  width: '50px',    // Adjust size based on your Figma design
  height: '50px',   // Usually icons are 24px or 32px
  objectFit: 'contain',
  display: 'block'
};

export default FeaturesSection;