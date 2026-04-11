import React from "react";

interface CardSlideProps {
  title: string;
  description: string;
  image: string;
}

const CardSlide = ({ description, title, image }: CardSlideProps) => {
  return (
    <div className="flex-shrink-0 w-[320px] max-w-[320px] rounded-3xl overflow-hidden bg-white shadow-xl">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-5">
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        <p className="mt-2 text-sm text-slate-600">{description}</p>
      </div>
    </div>
  );
};

export default CardSlide;
