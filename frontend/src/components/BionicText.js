import React from 'react';

const BionicText = ({ text, fontSize, fontStyle, lineHeight }) => {
  return (
    <div
      className="bionic-text"
      style={{
        fontSize: `${fontSize}px`,
        fontFamily: fontStyle,
        lineHeight: lineHeight,
      }}
      dangerouslySetInnerHTML={{ __html: text }} // Render HTML content
    />
  );
};

export default BionicText;