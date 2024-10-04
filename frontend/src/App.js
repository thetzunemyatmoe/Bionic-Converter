import React, { useState } from 'react';
import FontControls from './components/FontControls';
import WordCount from './components/WordCount';
import TextInput from './components/TextInput';
import BionicText from './components/BionicText';
import './App.css';

const App = () => {
  // State Variables
  const [inputText, setInputText] = useState('');
  const [formattedText, setFormattedText] = useState('');
  const [fontSize, setFontSize] = useState(16);
  const [fontStyle, setFontStyle] = useState('Roboto');
  const [lineHeight, setLineHeight] = useState(1.5); // Added here

  const convertToBionic = (text) => {
    return text.split(/(\s+|[.,:;!?/]+)/).map((word) => {
      // Check if the word is punctuation, space, or an empty string
      if (/^\s*$/.test(word) || /[.,:;!?/]+/.test(word)) {
        return word; // Return punctuation as is
      }
      // Bold the first half of the word
      const halfLength = Math.ceil(word.length / 2);
      const boldPart = word.slice(0, halfLength);
      const regularPart = word.slice(halfLength);
      return `<strong>${boldPart}</strong>${regularPart}`; // Return the formatted word
    }).join('');
  };

  const handleInputChange = (text) => {
    setInputText(text);
    setFormattedText(convertToBionic(text));
  };

  return (
    <div className='light-mode'>
      <h1 className="heading">Bionic Reading App</h1>
      <FontControls 
        fontSize={fontSize} 
        setFontSize={setFontSize} 
        fontStyle={fontStyle} 
        setFontStyle={setFontStyle} 
        lineHeight={lineHeight}
        setLineHeight={setLineHeight} 
      />
      <TextInput value={inputText} onChange={handleInputChange} />
      <WordCount text={inputText} />
      <BionicText text={formattedText} fontSize={fontSize} fontStyle={fontStyle} lineHeight={lineHeight} />
    
    </div>
  );
};

export default App;