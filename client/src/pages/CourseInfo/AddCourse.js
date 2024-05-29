import React from 'react';

function Course({ course, onAddToCart }) {
  return (
    <div>
      <h2>{course.title}</h2>
      <p>Price: ${course.price}</p>
      <button onClick={() => onAddToCart(course)}>Add to Cart</button>
    </div>
  );
}

export default Course;