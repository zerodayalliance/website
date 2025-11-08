import React from "react";

interface CardProps {
  id: number;
  title: string;
  description: string;
  svg: React.ReactNode;
}

const GuidelineCard: React.FC<CardProps> = ({ title, description, svg }) => {
  return (
    <div
      className="relative bg-opacity-20 bg-white min-h-[300px] w-full max-w-[320px] mx-auto shadow-lg 
                 text-black bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-md 
                 border border-white/30 rounded-lg p-6 sm:p-8 pt-16 flex flex-col items-center 
                 text-center transition-all duration-300 hover:transform hover:-translate-y-2 
                 hover:bg-opacity-25 z-10"
    >
      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 z-10">
        {svg}
      </div>
      <h3 className="text-[#ff4d4d] text-2xl sm:text-3xl font-iceberg font-semibold mb-3 sm:mb-4 mt-4">
        {title}
      </h3>
      <p className="text-gray-200 text-sm sm:text-base leading-relaxed font-encode-sans">
        {description}
      </p>
    </div>
  );
};

export default GuidelineCard;
