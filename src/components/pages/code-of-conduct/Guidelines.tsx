import React from "react";
import GuidelineCard from "./GuidelineCard";
import cardsData from "./cardsData";

const Guidelines: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 px-10 py-10 z-20">
      {cardsData.map((card) => (
        <GuidelineCard key={card.id} {...card} />
      ))}
    </div>
  );
};

export default Guidelines;
