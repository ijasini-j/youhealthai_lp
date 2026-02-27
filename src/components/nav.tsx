import React, { useState, useEffect } from 'react';
import yhai_bow from '../assets/svgs/black_on_white_youhealthai.svg';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };
    const handleScroll = () => setIsScrolled(window.scrollY > 20);

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav style={{
      ...navStyles,
      boxShadow: isScrolled ? '0 4px 20px rgba(0,0,0,0.08)' : 'none',
      borderBottom: isScrolled ? 'none' : '1px solid #868686',
    }}>
      {/* 1. Logo */}
      <div style={logoContainer}>
        <img 
          style={{ width: 'clamp(110px, 12vw, 200px)', height: 'auto' }} 
          src={yhai_bow} 
          alt="YouHealthai Logo" 
        />
      </div>

      {/* 2. Right Side Actions (CTA + Hamburger) */}
      <div style={actionsWrapper}>
        
        {/* CTA Button - Always stays on the Navbar now */}
        <div style={ctaContainer}>
          <a 
            href="https://forms.gle/6VqkFqDKVHQ4tLHW7" // Don't forget to add your actual link!
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              ...waitlistBtnSmall, // Ensure this object has display: 'inline-block'
              padding: isMobile ? '12px 20px' : '10px 24px', // Slightly larger on mobile for thumbs
              fontSize: isMobile ? '14px' : '14px',         // 12px is often too small to read easily
              textDecoration: 'none',
              display: 'inline-block',
              textAlign: 'center'
            }}
          >
            Join our Waitlist
          </a>
        </div>

        {/* Hamburger Toggle (Visible only on mobile) */}
        {isMobile && (
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            style={hamburgerBtn}
            aria-label="Toggle Menu"
          >
            <div style={{ ...bar, transform: isMenuOpen ? 'rotate(45deg) translate(5px, 6px)' : 'none' }} />
            <div style={{ ...bar, opacity: isMenuOpen ? 0 : 1 }} />
            <div style={{ ...bar, transform: isMenuOpen ? 'rotate(-45deg) translate(5px, -7px)' : 'none' }} />
          </button>
        )}
      </div>

      {/* 3. Navigation Links (Desktop Row or Mobile Dropdown) */}
      <div style={{
        ...linksContainer,
        ...(isMobile ? mobileMenuStyles : {}),
        display: isMobile && !isMenuOpen ? 'none' : 'flex',
      }}>
        {['Products', 'About Us', 'Support', 'Contact'].map((link) => (
          <a 
            key={link} 
            href={`#${link.toLowerCase().replace(' ', '-')}`} 
            style={navLinkStyles}
            onClick={() => setIsMenuOpen(false)}
          >
            {link}
          </a>
        ))}
      </div>
    </nav>
  );
};

/* --- Modified Styles --- */

const actionsWrapper: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px', // Space between Button and Hamburger
};

const mobileMenuStyles: React.CSSProperties = {
  position: 'absolute',
  top: '100%',
  left: 0,
  width: '100%',
  flexDirection: 'column',
  background: 'white',
  padding: '20px 5%',
  boxShadow: '0 10px 15px rgba(0,0,0,0.05)',
  borderTop: '1px solid #eee',
  gap: '25px',
  alignItems: 'flex-start',
  zIndex: 999,
};

const hamburgerBtn: React.CSSProperties = {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
  gap: '5px',
  padding: '5px',
  marginLeft: '10px'
};

const bar: React.CSSProperties = {
  width: '22px', // Slightly smaller for mobile
  height: '2px',
  background: '#333',
  transition: '0.3s',
  borderRadius: '2px',
};

const navStyles: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '12px 5%',
  background: 'white',
  position: 'sticky',
  top: 0,
  width: '100%',
  zIndex: 1000,
  transition: 'all 0.3s ease',
};

const linksContainer: React.CSSProperties = {
  display: 'flex',
  gap: 'clamp(10px, 2vw, 24px)',
  alignItems: 'center',
};

const logoContainer: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
};


const navLinkStyles: React.CSSProperties = {
  textDecoration: 'none',
  color: '#676767',
  fontSize: '15px',
  fontFamily: 'Poppins, sans-serif',
  fontWeight: 500,
  transition: 'color 0.2s ease',
};

const ctaContainer: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'flex-end',
};

const waitlistBtnSmall: React.CSSProperties = {
  background: '#00AD92',
  color: 'white',
  padding: '10px 24px',
  borderRadius: '11px',
  border: 'none',
  fontWeight: 700,
  fontFamily: 'Poppins, sans-serif',
  cursor: 'pointer',
  whiteSpace: 'nowrap',
  transition: 'transform 0.2s ease',
};

export default Navbar;