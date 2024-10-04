// src/components/FontControls.js
import React from 'react';

const FontControls = ({ fontSize, setFontSize, fontStyle, setFontStyle, lineHeight, setLineHeight }) => {
  return (
    <div className="font-controls">
      <div className="font-control">
        <label htmlFor="fontStyle">Font Style:</label>
        <select id="fontStyle" value={fontStyle} onChange={(e) => setFontStyle(e.target.value)}>
          <option value="Roboto">Roboto</option>
          <option value="Arial">Arial</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Verdana">Verdana</option>
          <option value="Helvetica">Helvetica</option>
          <option value="Georgia">Georgia</option>
          <option value="Tahoma">Tahoma</option>
          <option value="Calibri">Calibri</option>
          <option value="Lucida Sans">Lucida Sans</option>
          <option value="Lucida Grande">Lucida Grande</option>
        </select>
      </div>

      <div className="font-control">
        <label htmlFor="fontSize">Font Size:</label>
        <input 
          type="number" 
          id="fontSize" 
          min="12" 
          max="36" 
          step="1" 
          value={fontSize} 
          onChange={(e) => setFontSize(e.target.value)} 
        />
      </div>

      <div className="font-control">
        <label htmlFor="lineHeight">Line Height:</label>
        <input 
          type="number" 
          id="lineHeight" 
          min="1" 
          max="3" 
          step="0.1" 
          value={lineHeight} 
          onChange={(e) => setLineHeight(e.target.value)} 
        />
      </div>
    </div>
  );
};

export default FontControls;