import React, { useState, useEffect, useRef } from 'react';
import target from '../assets/svgs/target.svg';
import doc from '../assets/svgs/doc.svg';
import brain from '../assets/svgs/brain.svg';
import chart from '../assets/svgs/chart.svg';
import bell from '../assets/svgs/bell.svg';
import phone from '../assets/images/phone.png';
import microscope from '../assets/svgs/microscope.svg';
import bottle from '../assets/svgs/bottle.svg';
import cloud from '../assets/svgs/cloud.svg';
import stethoscope from '../assets/svgs/stethoscope.svg';
import clipboard from '../assets/svgs/clipboard.svg';


const ProviderEcosystem: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  // 1. ADD MOBILE DETECTION
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    
    // Auto-scroll logic (keep your existing logic here...)
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    let autoScroll: number;
    const startScrolling = () => {
      autoScroll = window.setInterval(() => {
        if (scrollContainer) {
          scrollContainer.scrollLeft += 1;
          const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
          if (scrollContainer.scrollLeft >= maxScroll - 1) scrollContainer.scrollLeft = 0;
        }
      }, 30);
    };
    startScrolling();
    return () => {
      window.clearInterval(autoScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section style={{ width: '100%', background: 'white', overflow: 'hidden' }}>
      
      {/* 1. Value Proposition Area */}
      <div style={{ ...headerContainer, padding: isMobile ? '40px 20px' : '80px 40px' }}>
        <h2 style={{ ...sectionTitle, fontSize: isMobile ? '32px' : '48px' }}>Provider Ecosystem</h2>
        <p style={sectionSubtitle}>The Backend, hospital-end of the system</p>
        
        <div style={{ ...heroValueGrid, gap: isMobile ? '30px' : '60px' }}>
          <div style={{ ...textBlock, textAlign: isMobile ? 'center' : 'left' }}>
            <p style={preamble}>With YouHealthai...</p>
            <h3 style={{ ...monoHeadline, fontSize: isMobile ? '24px' : '32px' }}>
              Opt into a digital AI-powered Health Management System 
              and Reclaim <span style={{ color: '#2B7E6F' }}>45 mins</span> of Doctors Time!
            </h3>
          </div>
          
          <div style={containerWrapper}>
            <img src={target} style={outsideImageStyle} alt="decoration" />
            <div style={{ ...targetCard, width: isMobile ? '100%' : '250px' }}>
              <div style={targetHeader}>TARGET</div>
              <div style={targetBody}>
                <ul style={{ ...listStyle, fontSize: isMobile ? '18px' : '24px' }}>
                  <li>HOSPITALS</li>
                  <li>LABS</li>
                  <li>PHARMACIES</li>
                  <li>CLINICS</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. AI Workflow Area */}
      <div style={{ ...aiWorkflowContainer, padding: isMobile ? '40px 20px' : '80px 40px' }}>
        <div style={{ ...aiIntro, flexDirection: isMobile ? 'column' : 'row', textAlign: isMobile ? 'center' : 'left' }}>
          <img src={doc} style={iconPlaceholder}/>
          <div>
            <h3 style={{ ...aiTitle, fontSize: isMobile ? '28px' : '36px' }}>AI that Works Alongside YOU</h3>
            <p style={{ ...aiSub, fontSize: isMobile ? '18px' : '28px' }}>Real-time predictive insights that help you catch risks earlier.</p>
          </div>
        </div>

        <div style={{ ...processSteps, gap: isMobile ? '60px' : '60px' }}>
          {/* StepBoxes - These will stack due to flexWrap: wrap */}
          <StepBox text={"Monitors all\npatient data\n24/7"} color="#FFDDDA" icon={brain} />
          <StepBox text={"Flag risks\nbefore they\nescalate"} color="#CFF0EB" icon={chart} />
          <StepBox text={"Send alerts\nstraight to\nyour dashboard"} color="#FFECD0" icon={bell} />
        </div>

        {/* 2b. The Phone Demo Section (The "Bouncing Image" fix) */}
        <div style={{ 
          ...demoSection, 
          flexDirection: isMobile ? 'column-reverse' : 'row', // Phone on bottom for mobile
          padding: isMobile ? '40px 20px' : '100px 5%',
          gap: isMobile ? '40px' : '80px'
        }}>
          <div style={{ ...phoneWrapper, justifyContent: 'center' }}>
            <div style={{ ...phoneFrame, maxWidth: isMobile ? '280px' : '450px' }}>
              <img src={phone} alt="Dashboard Demo" style={phoneImageStyle} className="float-animation" />
            </div>
          </div>

          <div style={{ ...demoTextContainer, alignItems: isMobile ? 'center' : 'flex-start', textAlign: isMobile ? 'center' : 'left' }}>
            <p style={processFlow}>Data In &rarr; AI Analyzes &rarr; Insights Out</p>
            <h2 style={{ ...demoHeading, fontSize: isMobile ? '28px' : '42px' }}>Experience the Future of Patient Care</h2>
            <button style={demoButton}>See Demo <span>&rarr;</span></button>
          </div>
        </div>
      </div>

      {/* 3. The Patient Journey */}
      <div style={journeyWrapper}>
        <h2 style={{ ...sectionTitle, fontSize: isMobile ? '32px' : '48px' }}>How It Works</h2>
        <JourneyCarousel />
        <button style={partnerButton}>Partner with Us</button>
      </div>
    </section>
  );
};

/* --- Journey Data --- */
const journeySteps = [
  { id: "01", title: "Patient Arrival", iconBg: "rgba(255, 52, 72, 0.25)", icon: clipboard,
     desc: "Patient checks in via app. Registration desk instantly accesses verified profile." },
  { id: "02", title: "Doctor Consultation", iconBg: "#D6E8F1",  icon: stethoscope,
    desc: "Doctor opens unified record. Prescriptions sent automatically to pharmacy." },
  { id: "03", title: "Lab Tests", iconBg: "rgba(1, 173, 146, 0.17)", icon: microscope,
    desc: "Results uploaded in real-time. No chasing paper. No delayed decisions." },
  { id: "04", title: "Pharmacy", iconBg: "#F0D9F6", icon: bottle,
    desc: "Pharmacist receives verified prescription. No misread handwriting." },
  { id: "05", title: "Patient Discharge", iconBg: "#FFECD0", icon: cloud,
    desc: "Visit summary saved to permanent record. Follow-up reminders scheduled." },
];

/* --- UI Component --- */
const StepBox = ({ text, icon, color }: { text: string; icon: string; color: string }) => (
  <div style={stepBoxStyle}>
    {/* The Floating Circle Icon */}
    <div style={{ 
      ...iconCircleStyle, 
      backgroundColor: color, // This is the light red/pink area
      border: `1px solid ${color.replace('0.17', '0.3')}` // Optional subtle border
    }}>
      <img src={icon} alt="step icon" style={brainIconStyle} />
    </div>
    
    {/* The Text Content */}
    <p style={stepTextStyle}>
      {text}
    </p>
  </div>
);

/* --- Missing Style Objects --- */

const textBlock: React.CSSProperties = {
  flex: '1',
  minWidth: '300px',
  textAlign: 'left'
};

const preamble: React.CSSProperties = {
  fontSize: '20px',
  color: '#808080',
  fontFamily: 'Roboto, sans-serif',
  marginBottom: '10px'
};

const iconPlaceholder: React.CSSProperties = {
  width: '84px',
  height: '84px',
  padding: '10px',
  background: 'rgba(11, 120, 168, 0.17)',
  borderRadius: '13px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#0B78A8',
  fontWeight: 'bold',
  fontSize: '24px'
};

const aiSub: React.CSSProperties = {
  fontSize: '28px',
  color: '#2A2A2A',
  fontFamily: 'Roboto, sans-serif',
  margin: 0
};

/* --- Existing Style Definitions --- */
const headerContainer: React.CSSProperties = { padding: '80px 40px', textAlign: 'center' };
const sectionTitle: React.CSSProperties = { fontSize: '48px', color: '#2B7E6F', fontWeight: '700', fontFamily: 'Poppins' };
const sectionSubtitle: React.CSSProperties = { fontSize: '20px', color: '#808080', marginBottom: '40px' };
const heroValueGrid: React.CSSProperties = { display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '60px', flexWrap: 'wrap', maxWidth: '1200px', margin: '0 auto' };
const monoHeadline: React.CSSProperties = { fontSize: '32px', fontFamily: 'Roboto Mono', fontWeight: '700', margin: 0, color:'black' };

const carouselWrapper: React.CSSProperties = {
  width: '100%',
  overflow: 'hidden', // Hides the cards outside the view
  padding: '60px 0',
  background: '#FAF9F6',
  position: 'relative',
};


const containerWrapper: React.CSSProperties = {
  position: 'relative', // Acts as the anchor for the outside image
  display: 'inline-block',
  marginTop: '20px',    // Extra space so the image doesn't hit the section above
  marginLeft: '20px',   // Extra space so the image doesn't go off-screen
};

const outsideImageStyle: React.CSSProperties = {
  position: 'absolute',
  top: '-15px',  // Negative value moves it UP outside the box
  left: '-15px', // Negative value moves it LEFT outside the box
  width: '40px', 
  height: '40px',
  zIndex: 2,     // Ensures it sits on top of the border
};

const targetCard: React.CSSProperties = { 
  width: '250px', 
  border: '1px solid #808080', 
  borderRadius: '10px', 
  overflow: 'hidden', 
  background: 'white',
  position: 'relative',
  zIndex: 1,
};

const targetHeader: React.CSSProperties = { background: '#FEFCDF', padding: '15px', fontWeight: '700', borderBottom: '1px solid #808080',  color:'black' };
const targetBody: React.CSSProperties = {
  padding: '20px',
  textAlign: 'left', // Ensures the text container is left-aligned
  display: 'flex',
  justifyContent: 'flex-start',
};

const listStyle: React.CSSProperties = {
  margin: 0,
  padding: '20px', fontSize: '24px', fontFamily: 'Roboto Mono', lineHeight: '1.5',  color:'black',
  paddingLeft: '20px',    // Gives space for the bullets to sit inside the card
  listStyleType: 'disc',  // This creates the standard round bullet
};

const stepBoxStyle: React.CSSProperties = {
  width: '240px',
  height: '200px',
  border: '1px solid #D1D1D1',
  borderRadius: '20px',
  background: 'white',
  position: 'relative', // Anchor for the absolute circle
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px',
  textAlign: 'center',
};

const iconCircleStyle: React.CSSProperties = {
  position: 'absolute',
  top: '-40px', // Half of the 80px height
  left: '50%',
  transform: 'translateX(-50%)',
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 2,
};

const brainIconStyle: React.CSSProperties = {
  width: '50px', // Adjust based on your SVG/Image size
  height: 'auto',
};

const stepTextStyle: React.CSSProperties = {
  fontSize: '24px',
  fontFamily: '"Roboto Mono", monospace', // Matches the monospaced look
  fontWeight: '500',
  color: 'black',
  lineHeight: '1.4',
  padding: 10,
  whiteSpace: 'pre-line', // Respects \n for the 24/7 line
};

const aiWorkflowContainer: React.CSSProperties = { background: '#F9FEFC', padding: '80px 40px', borderTop: '1px solid #eee' };
const aiIntro: React.CSSProperties = { 
  display: 'flex', 
  gap: '20px', 
  alignItems: 'center', 
  maxWidth: '1000px', 
  /* Top: 0
     Left/Right: auto (centers it)
     Bottom: 80px (increase this value to add more space)
  */
  margin: '0 auto 80px auto' 
};
const aiTitle: React.CSSProperties = { fontSize: '36px', color: '#0B3C5D', fontWeight: '700', margin: 0 };
const processSteps: React.CSSProperties = { display: 'flex', gap: '60px', justifyContent: 'center', flexWrap: 'wrap' };
const journeyWrapper: React.CSSProperties = { padding: '80px 20px', background: '#FEFDF7', textAlign: 'center' };

const textGroup: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: '10px',
  height: '180px',    // FIXED: Keeps text area consistent so icon doesn't overlap
  flexShrink: 0,
};

const journeyStepCard: React.CSSProperties = {
  flex: '0 0 350px', 
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between', // Ensures text and icon push away from each other
  height: '600px',    // Increased height to prevent vertical crowding
  textAlign: 'center',
  padding: '10px',
};

const carouselTrack: React.CSSProperties = {
  display: 'flex',
  gap: '40px',        // This gap is used in the CSS calc above
  width: 'max-content',
};

const stepDesc: React.CSSProperties = {
  fontSize: '14px',
  lineHeight: '1.6',
  color: '#333',
  maxWidth: '260px',
  margin: '0 auto',   // Centers description text
  whiteSpace: 'normal', // Allows text to wrap instead of staying on one line
};

const stepNumber: React.CSSProperties = {
  fontSize: '48px',
  fontWeight: '800',
  fontFamily: 'Poppins',
  color: '#000',
};

const stepTitle: React.CSSProperties = {
  fontSize: '22px',
  fontWeight: '700',
  marginBottom: '10px',
  color: 'black'
};

const journeyIcon: React.CSSProperties = {
  width: '100px',
  height: '100px',
  borderRadius: '16px', // Rounded corners like the image
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const iconImgStyle: React.CSSProperties = {
  width: '50px',
  height: '50px',
  objectFit: 'contain',
};

const connectorContainer: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  margin: '15px 0',
};

const dashedLine: React.CSSProperties = {
  height: '200px',
  borderLeft: '2px dashed #666',
};

const tealDot: React.CSSProperties = {
  width: '12px',
  height: '12px',
  backgroundColor: '#00AD92',
  borderRadius: '50%',
  marginBottom: '5px', // Space between dot and dashed line
};

const partnerButton: React.CSSProperties = { background: '#01AD92', color: 'white', padding: '15px 40px', borderRadius: '21px', border: 'none', fontWeight: '700', cursor: 'pointer', fontSize: '18px', marginTop: '40px' };

const demoSection: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '80px', // Large gap like the image
  padding: '100px 5%',
  background: '#F9FBFB', // Very light teal/grey background
  overflow: 'hidden',
};

const phoneWrapper: React.CSSProperties = {
  position: 'relative',
  flex: '1',
  display: 'flex',
  justifyContent: 'flex-end', // Aligns phone toward the center
};

const phoneFrame: React.CSSProperties = {
  width: '100%',
  maxWidth: '450px',
  zIndex: 2,
  animation: 'float 6s ease-in-out infinite', // Floating animation
};

const phoneImageStyle: React.CSSProperties = {
  width: '100%',
  height: 'auto',
  borderRadius: '40px', // Matches phone corner radius
  boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
};

const demoTextContainer: React.CSSProperties = {
  flex: '1',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '24px',
};

const demoHeading: React.CSSProperties = {
  fontSize: '42px',
  fontFamily: 'Poppins, sans-serif',
  fontWeight: '700',
  color: '#1A1A1A',
  lineHeight: '1.2',
  maxWidth: '450px',
};

const processFlow: React.CSSProperties = {
  fontSize: '14px',
  fontFamily: '"Roboto Mono", monospace',
  color: '#01AD92',
  letterSpacing: '1px',
  textTransform: 'uppercase',
  background: 'rgba(1, 173, 146, 0.1)',
  padding: '8px 16px',
  borderRadius: '20px',
};

const demoButton: React.CSSProperties = {
  padding: '16px 32px',
  background: '#1A1A1A', // Dark button like modern SaaS
  color: 'white',
  borderRadius: '12px',
  fontSize: '18px',
  fontWeight: '600',
  border: 'none',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  transition: 'transform 0.2s ease',
};

const JourneyCarousel = () => {
  // We double the steps for a seamless infinite loop
  const doubledSteps = [...journeySteps, ...journeySteps];

  return (
    <div style={carouselWrapper}>
      {/* Adding the className here links to the CSS animation below */}
      <div style={carouselTrack} className="carousel-track">
        {doubledSteps.map((step, index) => {
          const isEven = (index + 1) % 2 === 0;
          return (
            <div key={`${step.id}-${index}`} style={{
              ...journeyStepCard,
              flexDirection: isEven ? 'column-reverse' : 'column'
            }}>
              {/* FIXED: textGroup now has a fixed height to prevent overlap */}
              <div style={textGroup}>
                <div style={stepNumber}>{step.id}</div>
                <h4 style={stepTitle}>{step.title}</h4>
                <p style={stepDesc}>{step.desc}</p>
              </div>

              <div style={{
                ...connectorContainer,
                flexDirection: isEven ? 'column-reverse' : 'column'
              }}>
                <div style={tealDot} />
                <div style={dashedLine} />
              </div>

              <div style={{ ...journeyIcon, background: step.iconBg }}>
                <img src={step.icon} style={iconImgStyle} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProviderEcosystem;