import React from 'react'

const NewsCard = ({ title, description, image, date }) => {
  return (
    <div>
      <div className="bg-white rounded-lg overflow-hidden shadow-md">
        <img src={image} alt={title} className="w-full h-48 object-cover" />{" "}
        <div className="p-4">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-gray-600">{description}</p>
          <p className="text-gray-400 text-sm mt-2">{date}</p>{" "}
        </div>{" "}
      </div>
    </div>
  );
};

export default NewsCard