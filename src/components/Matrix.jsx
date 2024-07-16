import React, { useState } from 'react';

const Matrix = () => {
  const [boxes, setBoxes] = useState(Array(9).fill('lightgray'));
  const [clickSequence, setClickSequence] = useState([]);

  const handleClick = (index) => {
    if (!clickSequence.includes(index)) {
      const newBoxes = [...boxes];
      newBoxes[index] = 'green';
      setBoxes(newBoxes);
      setClickSequence([...clickSequence, index]);
    }
    if (index === 8) {
      orangeInSequence([...clickSequence, index]);
    }
  };

  const orangeInSequence = (order) => {
    let delay = 0;
    order.forEach((i, idx) => {
      setTimeout(() => {
        const newBoxes = [...boxes];
        newBoxes[i] = 'orange';
        setBoxes(newBoxes);
      }, delay);
      delay += 500;
    });
  };

  return (
    <div className="grid-container">
      {boxes.map((color, index) => (
        <div key={index} className="grid-item" style={{ backgroundColor: color }} onClick={() => handleClick(index)}></div>
      ))}
    </div>
  );
};

export default Matrix;
