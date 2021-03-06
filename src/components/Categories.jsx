import React, { useState } from 'react';

const Categories = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const categories = ['All', 'Meat', 'Grill', 'Spicy', 'Closed', 'Vegetarian'];

  return (
    <div className="categories">
      <ul>
        {categories.map((category, index) => {
          return (
            <li
              key={index}
              className={activeIndex === index ? 'active' : ''}
              onClick={() => setActiveIndex(index)}>
              {category}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
