// src/components/Card.jsx
import React from 'react';

const Card = ({ title, content, subCards }) => {
  return (
    <div className="flex-shrink-0 w-64 mx-4">
      <div className="bg-white shadow-lg rounded-lg">
        <div className="p-4">
          <h3 className="text-lg font-medium">{title}</h3>
          <p className="text-gray-600">{content}</p>
        </div>
        <div className="overflow-x-auto scroll-smooth scrollbar-hide">
          <div className=" px-4 pb-4">
            {subCards.map((subCard) => (
              <div key={subCard.id} className="flex-shrink-0 w-40 mr-4">
                <div className="bg-gray-100 rounded-lg p-3">
                  <h4 className="text-sm font-medium">{subCard.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;