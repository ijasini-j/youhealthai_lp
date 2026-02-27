import React from 'react';

// Container for the white circle and border
const redCrossCircle: React.CSSProperties = {
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60px',
  height: '60px',
  // Removed the linear-gradient backgrounds
  background: 'white',
  borderRadius: '50%',
  // Matches the thinner border in the image
  border: '1px solid black',
  // Center-align the children
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

// Styles for the cross itself
const crossVertical: React.CSSProperties = {
  position: 'absolute',
  width: '12px',  // Thicker than a line
  height: '40px', // Stretches vertically
  backgroundColor: '#FF3522', // Red color from original style
};

const crossHorizontal: React.CSSProperties = {
  position: 'absolute',
  width: '40px', // Stretches horizontally
  height: '12px', // Thicker than a line
  backgroundColor: '#FF3522', // Red color from original style
};

const RedCrossIcon: React.FC = () => {
  return (
    <div style={redCrossCircle}>
      {/* Horizontal bar */}
      <div style={crossHorizontal} />
      {/* Vertical bar */}
      <div style={crossVertical} />
    </div>
  );
};

export default RedCrossIcon;