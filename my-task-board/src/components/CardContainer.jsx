// src/components/CardContainer.jsx
import React, { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import useScrollPosition from '../hooks/useScrollPosition';
import Card from './Card';

const CardContainer = ({ data }) => {
  const [scrollX, setScrollX] = useState(0);

  const handleScroll = (direction) => {
    const container = document.getElementById('card-container');
    const scrollAmount = direction === 'left' ? -300 : 300;
    container.scrollLeft += scrollAmount;
    setScrollX(container.scrollLeft);
  };

  const { x } = useScrollPosition();

  useEffect(() => {
    setScrollX(x);
  }, [x]);

  return (
    <div className="relative">
      <div
        className={`absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer ${
          scrollX === 0 ? 'opacity-50 pointer-events-none' : ''
        }`}
        onClick={() => handleScroll('left')}
      >
        <ChevronLeftIcon className="w-6 h-6 text-gray-500 hover:text-gray-700" />
      </div>
      <div
        id="card-container"
        className="flex overflow-x-auto scroll-smooth scrollbar-hide"
      >
        {data.map((card) => (
          <Card
            key={card.id}
            ID={card.id}
            title={card.title}
            content={card.content}
            subCards={card.subCards}
          />
        ))}
      </div>
      <div
        className={`absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer ${
          scrollX >= data.length * 272 - window.innerWidth
            ? 'opacity-50 pointer-events-none'
            : ''
        }`}
        onClick={() => handleScroll('right')}
      >
        <ChevronRightIcon className="w-6 h-6 text-gray-500 hover:text-gray-700" />
      </div>
    </div>
  );
};

export default CardContainer;