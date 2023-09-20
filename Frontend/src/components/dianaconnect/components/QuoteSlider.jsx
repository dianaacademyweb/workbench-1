import React, { useState, useEffect } from "react";

const QuoteSlider = () => {
  const quotes = [
    "Coming together is a beginning. Keeping together is progress. Working together is success. - Henry Ford",
    "Individual commitment to a group effort: that is what makes a team work, a company work, a society work, a civilization work. - Vince Lombardi",
    "The strength of the team is each individual member. The strength of each member is the team. - Phil Jackson",
    "Alone, we can do so little; together, we can do so much. - Helen Keller",
    "Teamwork makes the dream work. - John C. Maxwell",
    // Add more quotes here
  ];

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) =>
        prevIndex === quotes.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change the quote every 5 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-800 text-white p-2 sm:p-4 rounded-lg bg-opacity-50 text-center">
      <p className="text-xl transition-opacity duration-100 ease-in-out group-hover:opacity-100">
        {quotes[currentQuoteIndex]}
      </p>
    </div>
  );
};

export default QuoteSlider;
