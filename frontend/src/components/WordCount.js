// src/components/WordCount.js
import React from 'react';

const WordCount = ({ text }) => {
  const words = text.split(/\s+/).filter((word) => word).length;
  // 200 words per minute
  const readingTime = Math.ceil(words / 200);

  return (
    <div className="word-count">
      <p><b>Word Count:</b> {words}</p>
      <p><b>Estimated Reading Time:</b> {readingTime} minute(s)</p>
    </div>
  );
};

export default WordCount;