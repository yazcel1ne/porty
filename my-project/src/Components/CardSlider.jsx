import React, { useState } from "react";

const CardSlider = () => {
  const cards = [
    { id: 1, title: "Card 1", content: "Content for Card 1" },
    { id: 2, title: "Card 2", content: "Content for Card 2" },
    { id: 3, title: "Card 3", content: "Content for Card 3" },
    { id: 4, title: "Card 4", content: "Content for Card 4" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerPage = 3; // Number of cards to show at once

  const nextCard = () => {
    if (currentIndex < cards.length - cardsPerPage) {
      setCurrentIndex(currentIndex + cardsPerPage);
    }
  };

  const prevCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - cardsPerPage);
    }
  };

  const totalSlides = Math.ceil(cards.length / cardsPerPage);

  return (
    <div className="relative font-raleway ">
      <div class="relative-container">
        <div class="max-w-screen-xl px-4 my-10  mx-auto grid gap-8 md:grid-cols-1 ">
				<div className="relative w-full">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(-${(currentIndex / cardsPerPage) * 100}%)` }}
        >
          {cards.map((card) => (
            <div key={card.id} className="flex-shrink-0 w-full sm:w-1/3 p-4">
              <div className="h-full bg-gray-200 rounded-lg p-4">
                <h2 className="text-xl font-bold">{card.title}</h2>
                <p>{card.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-center space-x-2 mt-4">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full transition duration-300 ${currentIndex / cardsPerPage === index ? 'bg-blue-500' : 'bg-gray-300'}`}
            onClick={() => setCurrentIndex(index * cardsPerPage)}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2">
        <button
          onClick={prevCard}
          className="bg-gray-700 text-white rounded-full px-4 py-2 disabled:opacity-50"
          disabled={currentIndex === 0}
        >
          Prev
        </button>
      </div>
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2">
        <button
          onClick={nextCard}
          className="bg-gray-700 text-white rounded-full px-4 py-2 disabled:opacity-50"
          disabled={currentIndex >= cards.length - cardsPerPage}
        >
          Next
        </button>
      </div>
    </div>
        </div>
      </div>
    </div>
  );
};

export default CardSlider;
