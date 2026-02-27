import React from 'react';
import yh_wf from '../assets/svgs/yh_wf.svg';
import linkedin from '../assets/svgs/linkedin.svg';
import email from '../assets/svgs/email.svg';
import twitter from '../assets/svgs/twitter.svg';
import github from '../assets/svgs/github.svg';

const socialIcons = [github, linkedin, twitter, email];

const Footer: React.FC = () => {// Add mobile detection
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={footerWrapper}>
      <div style={footerCard}>
        <div style={topRow}>
          {/* Brand and Mission Column */}
          <div style={brandColumn}>
            <div style={logoWrapper}>
              <img src={yh_wf} alt="YouHealthai Logo" style={logoImg} />
              <span style={brandName}>YouHealthai</span>
            </div>
            <p style={missionText}>
              Transforming healthcare from a system that works on patients to one that works with them
            </p>
            
            <div style={{
              ...socialAndBackTop,
              flexDirection: isMobile ? 'column' : 'row',
              alignItems: isMobile ? 'flex-start' : 'center',
              gap: isMobile ? '20px' : '0'
            }}>
              <div style={socialIconsRow}>
                {socialIcons.map((icon, index) => (
                  <div key={index} style={iconPlaceholder}>
                    <img 
                      src={icon} 
                      alt={`social-icon-${index}`} 
                      style={{ width: '24px', height: '24px', objectFit: 'contain' }} 
                    />
                  </div>
                ))}
              </div>
              
              <button onClick={scrollToTop} style={backToTopBtn}>
                <span style={arrowUp}>↑</span>
                <span>Back to top</span>
              </button>
            </div>
          </div>

          {/* Links Columns */}
          <div style={linksWrapper}>
            <div style={linkGroup}>
              <h4 style={groupTitle}>Site Map</h4>
              <nav style={navList}>
                <a href="#home" style={navLink}>Home</a>
                <a href="#ecosystem" style={navLink}>Provider Ecosystem</a>
                <a href="#how" style={navLink}>How It Works</a>
                <a href="#awards" style={navLink}>Awards</a>
                <a href="#roadmap" style={navLink}>Roadmap</a>
                <a href="#team" style={navLink}>Team page</a>
                <a href="#corp" style={navLink}>YouTechnologies LTD</a>
              </nav>
            </div>

            <div style={linkGroup}>
              <h4 style={groupTitle}>Legal</h4>
              <nav style={navList}>
                <a href="/privacy" style={navLink}>Privacy Policy</a>
                <a href="/terms" style={navLink}>Terms of Service</a>
                <a href="/cookies" style={navLink}>Cookies Settings</a>
              </nav>
            </div>
          </div>
        </div>

        {/* Divider and Copyright */}
        <div style={bottomRow}>
          <div style={divider} />
          <p style={copyright}>© 2026 YouHealthai. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

/* --- Styles --- */

const footerWrapper: React.CSSProperties = {
  width: '100%',
  padding: '80px 20px',
  background: '#B0DFD7',
  display: 'flex',
  justifyContent: 'center',
};

const footerCard: React.CSSProperties = {
  width: '100%',
  maxWidth: '1320px',
  background: 'white',
  borderRadius: '13px',
  padding: '60px',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  border: '1px solid #808080',
  display: 'flex',
  flexDirection: 'column',
  gap: '40px',
};

const topRow: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  gap: '40px',
};

const brandColumn: React.CSSProperties = {
  flex: '1',
  minWidth: '300px',
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
};

const logoWrapper: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
};

const logoImg: React.CSSProperties = { width: '68px', height: '41px' };

const brandName: React.CSSProperties = {
  fontSize: '26px',
  fontFamily: 'Poppins, sans-serif',
  fontWeight: '600',
  color: 'black',
};

const missionText: React.CSSProperties = {
  fontSize: '18px',
  color: '#3B3B3B',
  fontFamily: 'Poppins, sans-serif',
  lineHeight: '1.4',
  maxWidth: '500px',
};

const socialAndBackTop: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: '20px',
};

const socialIconsRow: React.CSSProperties = { display: 'flex', gap: '8px' };

const iconPlaceholder: React.CSSProperties = {
  width: '26px',
  height: '26px',
  borderRadius: '2px',
};

const backToTopBtn: React.CSSProperties = {
  display: 'flex',
  color: 'black',
  alignItems: 'center',
  gap: '8px',
  padding: '10px 20px',
  background: 'white',
  border: '1px solid black',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '12px',
  fontWeight: '700',
  fontFamily: 'Inter, sans-serif',
};

const arrowUp: React.CSSProperties = { fontSize: '18px' };

const linksWrapper: React.CSSProperties = {
  display: 'flex',
  gap: '80px',
  flexWrap: 'wrap',
};

const linkGroup: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
};

const groupTitle: React.CSSProperties = {
  fontSize: '14px',
  fontWeight: '600',
  fontFamily: 'Roboto, sans-serif',
  color: 'black',
  margin: 0,
};

const navList: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
};

const navLink: React.CSSProperties = {
  fontSize: '12px',
  color: 'black',
  textDecoration: 'none',
  fontFamily: 'Roboto, sans-serif',
  fontWeight: '300',
};

const bottomRow: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
};

const divider: React.CSSProperties = {
  width: '100%',
  height: '1px',
  background: '#808080',
};

const copyright: React.CSSProperties = {
  fontSize: '14px',
  color: '#3B3B3B',
  fontFamily: 'Poppins, sans-serif',
  margin: 0,
};

export default Footer;