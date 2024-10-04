// src/components/TextInput.js
import React from 'react';

const TextInput = ({ value, onChange }) => {
  return (
    <textarea 
      rows="10" 
      value={value} 
      onChange={(e) => onChange(e.target.value)} 
      placeholder="Type or paste your text here..." 
      className='text-area'
    />
  );
};

export default TextInput;