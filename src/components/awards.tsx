import React from 'react';
import honorisImg from '../assets/images/honoris_cl.png';
import firstplaceImg from '../assets/images/first_place.png';
import finalistImg from '../assets/images/finalist.png';
import moonshotImg from '../assets/images/moonshot.png';

const AwardsSection: React.FC = () => {
  const awards = [
    {
      title: "Member",
      org: "Honoris Collective Labs",
      sub: "Nile University Of Nigeria",
      img: honorisImg,
      color: "rgba(239, 191, 4, 0.40)"
    },
    {
      title: "1st Place",
      org: "Nile University Startup 5.0",
      sub: "out of 65 participants",
      img: firstplaceImg,
      color: "rgba(239, 191, 4, 0.40)"
    },
    {
      title: "Finalist",
      org: "Startup Abuja Hackathon 2025",
      sub: "Finals out of 5k+ African startups",
      img: finalistImg,
      color: "rgba(239, 191, 4, 0.40)"
    },
    {
      title: "Global Innovator",
      org: "Moonshot Awards 2025",
      sub: "2nd Round",
      img: moonshotImg,
      color: "rgba(239, 191, 4, 0.40)",
      bg: "#9ED6E8"
    }
  ];

  return (
    <section style={containerStyle}>
      <h2 style={titleStyle}>Our Awards</h2>
      <p style={subtitleStyle}>Recognised for excellence, innovation, and impact</p>

      {/* Horizontal Scroll Container */}
      <div style={carouselContainer}>
        {awards.map((award, index) => (
          <div key={index} style={awardCard}>
            {/* Image Wrapper */}
            <div style={{ ...imgWrapper, background: award.bg || '#D9D9D9' }}>
              <img src={award.img} alt={award.title} style={cardImg} />
            </div>

            <div style={divider} />

            {/* Content Wrapper */}
            <div style={contentBox}>
              <div style={{ ...badgeStyle, background: `radial-gradient(ellipse at center, ${award.color} 0%, rgba(239,191,4,0) 100%)` }}>
                <h3 style={awardTitle}>{award.title}</h3>
              </div>
              <h4 style={awardOrg}>{award.org}</h4>
              <p style={awardSub}>{award.sub}</p>
            </div>

            {/* Arrow Button */}
            <div style={arrowBtn}>
              <span>→</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

/* --- Styles --- */

const containerStyle: React.CSSProperties = {
  padding: '80px 0',
  background: '#B3EBE2',
  textAlign: 'center',
  overflow: 'hidden'
};

const titleStyle: React.CSSProperties = {
  fontSize: '48px',
  fontFamily: 'Poppins, sans-serif',
  fontWeight: '700',
  color: '#2B7E6F',
  marginBottom: '10px'
};

const subtitleStyle: React.CSSProperties = {
  fontSize: '20px',
  color: '#808080',
  fontFamily: 'Roboto, sans-serif',
  marginBottom: '60px'
};

const carouselContainer: React.CSSProperties = {
  display: 'flex',
  gap: '35px',
  padding: '0 5% 40px 5%',
  overflowX: 'auto',
  scrollSnapType: 'x mandatory',
  scrollbarWidth: 'none', // Hides scrollbar for Firefox
  msOverflowStyle: 'none'  // Hides scrollbar for IE/Edge
};

const awardCard: React.CSSProperties = {
  minWidth: '436px',
  height: '502px',
  background: 'white',
  borderRadius: '17px',
  border: '1px solid #808080',
  position: 'relative',
  padding: '17px',
  scrollSnapAlign: 'start',
  flexShrink: 0
};

const imgWrapper: React.CSSProperties = {
  width: '100%',
  height: '197px',
  borderRadius: '9px',
  overflow: 'hidden',
  position: 'relative'
};

const cardImg: React.CSSProperties = {
  width: '100%',
  height: '100%',
  objectFit: 'cover'
};

const divider: React.CSSProperties = {
  width: '265px',
  height: '1px',
  background: '#666666',
  margin: '23px auto 10px auto'
};

const contentBox: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '12px'
};

const badgeStyle: React.CSSProperties = {
  width: '100%',
  padding: '5px 0',
  borderRadius: '39px'
};

const awardTitle: React.CSSProperties = {
  fontSize: '32px',
  fontWeight: '700',
  fontFamily: 'Poppins',
  margin: 0
};

const awardOrg: React.CSSProperties = {
  fontSize: '18px',
  fontWeight: '700',
  color: '#424242',
  maxWidth: '280px'
};

const awardSub: React.CSSProperties = {
  fontSize: '14px',
  color: '#696969'
};

const arrowBtn: React.CSSProperties = {
  position: 'absolute',
  bottom: '20px',
  right: '20px',
  width: '50px',
  height: '40px',
  background: '#01AD92',
  borderRadius: '10px',
  color: 'white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '24px',
  fontWeight: 'bold',
  cursor: 'pointer'
};

export default AwardsSection;