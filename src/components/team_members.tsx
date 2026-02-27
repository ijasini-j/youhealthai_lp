import React, { useEffect, useRef, useState } from 'react';
import jeremiahImg from "../assets/images/jeremiah.png"
import temiImg from "../assets/images/temi.png"
import jimiImg from "../assets/images/olujimi.png"
import chibukemImg from "../assets/images/chibukem.png"
import RedCrossIcon from './rediconcross';
import bandageImg from '../assets/svgs/bandage.svg';

// --- Types ---
interface Vitals {
  label: string;
  value: number; // percentage 0-100
}

interface VitalsSectionProps {
  vitals: Vitals[];
}

interface TeamMemberProps {
  name: string;
  role: string;
  id: string;
  diagnosis: string;
  status: string;
  bio: string;
  vitals: Vitals[];
  image: string;
  bgColor?: string;
}

const TeamSection: React.FC = () => {
  const team = [
    {
      name: "Temidayo Aderibigbe",
      role: "Founder & Executive Lead",
      id: "YAI-001",
      diagnosis: "Severe Innovation Syndrome",
      status: "Stable but Overachieving",
      bio: "Systems-focused entrepreneur building scalable digital healthcare infrastructure designed to connect providers and empower patients.",
      vitals: [
        { label: "CREATIVITY", value: 90 },
        { label: "ENERGY", value: 75 },
        { label: "COFFEE", value: 95 }
      ],
      image: temiImg,
      bgColor: "#F9FEFC"
    },
    {
      name: "Jeremiah Ijasini",
      role: "Chief Technology Officer",
      id: "YAI-030",
      diagnosis: "Recurring Merge Conflict Trauma",
      status: "Execution Mode",
      bio: "Lead of the development of our AI-driven health platform. Background spans software engineering, systems design, and intelligent system development.",
      vitals: [
        { label: "DEBUGGING", value: 95 },
        { label: "SLEEP", value: 70 },
        { label: "TEXTING", value: 60 }
      ],
      image: jeremiahImg,
      bgColor: "rgba(70, 145, 178, 0.03)"
    },
    {
      name: "Enujiugha Chibuikem",
      role: "Software Product Development Eng.",
      id: "YAI-956",
      diagnosis: "Chronic Backlog Grooming",
      status: "Stable-ish",
      bio: "Expertise in Product Lifecycle management comprising of Agile Methodology, Flutter Mobile App Development and Product Data Analysis (Market and Business Analysis).",
      vitals: [
        { label: "CREATIVITY", value: 95 },
        { label: "DANCING", value: 60 },
        { label: "GAMING", value: 80 }
      ],
      image: chibukemImg,
      bgColor: "rgba(70, 145, 178, 0.03)"
    },
    {
      name: "Olujimi Ayo-Joledo",
      role: "Product Designer",
      id: "YAI-242",
      diagnosis: "Colour Palette Obsession",
      status: "Cleared for Prototyping",
      bio: "Lead of the development of our AI-driven health platform. Background spans software engineering, systems design, and intelligent system development.",
      vitals: [
        { label: "DEBUGGING", value: 95 },
        { label: "AVOCADOS", value: 30 },
        { label: "SPIDERMAN", value: 85 }
      ],
      image: jimiImg,
      bgColor: "rgba(70, 145, 178, 0.03)"
    }
  ];

  return (
    <section style={{ width: '100%', background: 'white', borderTop: '1px solid #808080', paddingBottom: '100px' }}>
      {/* Header */}
      <div style={headerStyle}>
        <h2 style={titleStyle}>The Minds that make it happen</h2>
        <p style={subtitleStyle}>Meet the great minds behind YouHealthai</p>
      </div>

      {/* Decorative Red Cross Icon */}
      <div style={dividerContainer}>
        <RedCrossIcon/>
      </div>

      {/* Team List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {team.map((member, index) => (
            <React.Fragment key={index}>
              {/* 1. The Team Member Card */}
              <TeamMemberCard {...member} />

              {/* 2. Inter-card Separator with Two Bandages */}
              {index < team.length - 1 && (
                <div style={bandageSeparatorRow}>
                  {/* Left Bandage */}
                  <img src={bandageImg} alt="left-bandage" style={sideBandageStyle} />
                  
                  {/* Optional: You can add a subtle dashed line here if you want it to look like the image */}
                  <div style={separatorLine} />

                  {/* Right Bandage */}
                  <img src={bandageImg} alt="right-bandage" style={sideBandageStyle} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
    </section>
  );
};

const VitalsSection: React.FC<VitalsSectionProps> = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} style={vitalsBody}>
      {/* 3. TypeScript now knows 'v' is a Vitals object and 'i' is a number */}
      {props.vitals.map((v: Vitals, i: number) => (
        <div key={i} style={vitalRow}>
          <span style={vitalLabel}>{v.label}</span>
          <div style={vitalBarBg}>
            <div 
              className={isVisible ? 'animate-vital-bar' : ''}
              style={{ 
                ...vitalBarFill, 
                width: `${v.value}%`,
                animationDelay: `${i * 0.1}s` 
              }} 
            />
          </div>
        </div>
      ))}
    </div>
  );
};

/* --- Sub-Component for individual member --- */
const TeamMemberCard: React.FC<TeamMemberProps> = (props) => (
  <div style={{ ...cardWrapper, background: props.bgColor }}>
    <div style={contentLayout}>
      
      {/* 1. Portrait (Unchanged) */}
      <div style={portraitContainer}>
        <img src={props.image} alt={props.name} style={imgStyle} />
      </div>

      {/* 2. Medical Record Details (Unchanged) */}
      <div style={infoContainer}>
        <div style={nameRow}>
          <h3 style={memberName}>{props.name}</h3>
          <p style={memberRole}>{props.role}</p>
        </div>
        <div style={bioBox}>{props.bio}</div>
        <div style={patientMetadata}>
          <p style={monoText}><strong>PATIENT ID:</strong> {props.id}</p>
          <p style={monoText}><strong>DIAGNOSIS:</strong> {props.diagnosis}</p>
          <p style={monoText}><strong>STATUS:</strong> {props.status}</p>
        </div>
        <div style={socialsRow}>
           <div style={socialIcon}>in</div>
           <div style={socialIcon}>𝕏</div>
           <div style={socialIcon}>🔗</div>
        </div>
      </div>

      {/* 3. Vitals Card (Updated to use VitalsSection) */}
      <div style={vitalsCard}>
        <div style={vitalsHeader}>VITALS</div>
        
        {/* WE USE THE SUB-COMPONENT HERE TO ACTIVATE INTERSECTION OBSERVER */}
        <VitalsSection vitals={props.vitals} />

        <div style={heartIcon}>
          <span className="pulsing-heart" style={{ fontSize: '24px' }}>
            ❤️
          </span>
        </div>
      </div>

    </div>
  </div>
);

/* --- Styles --- */

const headerStyle: React.CSSProperties = { textAlign: 'center', padding: '80px 20px 40px' };
const titleStyle: React.CSSProperties = { fontSize: '48px', color: '#2B7E6F', fontWeight: '700', fontFamily: 'Poppins' };
const subtitleStyle: React.CSSProperties = { fontSize: '20px', color: '#808080', fontFamily: 'Roboto' };

const dividerContainer: React.CSSProperties = { position: 'relative', height: '60px', background: 'rgba(253, 251, 212, 0.73)', border: '1px solid #808080', margin: '40px 0' };


const cardWrapper: React.CSSProperties = { width: '100%', padding: '60px 0', };
const contentLayout: React.CSSProperties = { maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: '50px', alignItems: 'flex-start', flexWrap: 'wrap', padding: '0 20px' };

const portraitContainer: React.CSSProperties = { width: '333px', height: '460px', background: '#E6E6E6', borderRadius: '7px', border: '1px solid #808080', overflow: 'hidden' };
const imgStyle: React.CSSProperties = { width: '100%', height: '100%', objectFit: 'cover' };

const infoContainer: React.CSSProperties = { flex: 1, minWidth: '300px', display: 'flex', flexDirection: 'column', gap: '20px' };
const memberName: React.CSSProperties = { fontSize: '48px', fontWeight: '700', margin: 0, fontFamily: 'Poppins', color: 'black' };
const memberRole: React.CSSProperties = { fontSize: '32px', fontWeight: '500', color: '#444', margin: 0 };

const bioBox: React.CSSProperties = { padding: '20px', background: '#E9FFFB', border: '1px solid #207263', borderRadius: '7px', fontSize: '19px', fontFamily: 'Roboto Mono', color: 'black'  };

const patientMetadata: React.CSSProperties = { display: 'flex', flexDirection: 'column', gap: '5px' };
const monoText: React.CSSProperties = { fontFamily: 'Roboto Mono', fontSize: '18px', margin: 0,  color: 'black' };

const vitalsCard: React.CSSProperties = { width: '260px', background: 'white', border: '1px solid #808080', borderRadius: '7px', position: 'relative' };
const vitalsHeader: React.CSSProperties = { padding: '15px', background: '#FEFCDF', textAlign: 'center', fontWeight: 'bold', borderBottom: '1px solid #808080', borderRadius: '7px 7px 0 0', color: 'black'};
const vitalsBody: React.CSSProperties = { padding: '20px', display: 'flex', flexDirection: 'column', gap: '15px', color: 'black' };
const vitalRow: React.CSSProperties = { display: 'flex', flexDirection: 'column', gap: '5px' };
const vitalLabel: React.CSSProperties = { fontSize: '11px', fontWeight: 'bold', fontFamily: 'Roboto Mono' };
const vitalBarBg: React.CSSProperties = { width: '100%', height: '18px', background: '#eee' };
const heartIcon: React.CSSProperties = { position: 'absolute', top: '-15px', right: '-15px', width: '50px', height: '50px', background: '#FFDDDA', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #FF3522' };
const socialsRow: React.CSSProperties = { display: 'flex', gap: '10px', marginTop: '10px' };
const socialIcon: React.CSSProperties = { width: '30px', height: '30px', background: '#207263', color: 'white', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' };

const nameRow: React.CSSProperties = {};

const vitalBarFill: React.CSSProperties = {
  height: '100%',
  backgroundColor: '#FF9800', // Or your orange color
  borderRadius: '4px',
  // Ensure we start at scale 0 if not using the CSS class approach
  transform: 'scaleX(0)', 
  transformOrigin: 'left',
};

const bandageSeparatorRow: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between', // This pushes the images to the extreme left/right
  width: '100%',
  padding: '0 20px', // Prevents them from touching the absolute screen edge
  position: 'relative',
  margin: '20px 0'
};

const sideBandageStyle: React.CSSProperties = {
  height: '120px', // Adjust based on your image size
  width: 'auto',
  objectFit: 'contain',
  zIndex: 2,
};

const separatorLine: React.CSSProperties = {
  position: 'absolute',
  left: '0',
  right: '0',
  height: '60px', // Match the height of your bandage area
  background: '#FEFDF7', // Ensure this matches your card background exactly
  zIndex: 1,
  // Ensure no borders are present
  border: 'none',
  borderTop: 'none',
  borderBottom: 'none'
};

export default TeamSection;