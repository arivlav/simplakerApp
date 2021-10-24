import React from 'react';

function Circle(/* props: CircleProps */) {
  return (
    <g>
      <ellipse rx="40" ry="40" cx="200" cy="200" fill="red" stroke="blue" stroke-width="2" />
    </g>
  );
}

export default Circle;