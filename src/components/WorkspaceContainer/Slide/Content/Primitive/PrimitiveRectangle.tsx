import React from 'react';

// const viewBox = ["0", "0", "716", "404"];

function Rectangle(/* props: RectangleProps */) {
    return (
      <div>
          <svg viewBox="0, 0, 82, 82" className="s">
            <g className="s">
                <rect width="80" height="80" x="1" y="1" rx="0" ry="0" fill="none" stroke="black" stroke-width="2" />
            </g>
          </svg>
      </div>
    );
}

export default Rectangle;