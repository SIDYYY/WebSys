import React, { useState, useEffect } from 'react';

const quotes = [
  "Welcome to We - GROW || GO-GROW-GLOW || Healthy Preps",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "If the code works, let it be. - Carl",
  "let the silent speak for your achievements",
  "its not a bug sir, its a feature - Carl"
];

function Quotes() {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentQuoteIndex(prevIndex =>
        (prevIndex + 1) % quotes.length
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="footer">
      <div id="quote">
        <h4>{quotes[currentQuoteIndex]}</h4>
      </div>
    </div>
  );
}

export default Quotes;
