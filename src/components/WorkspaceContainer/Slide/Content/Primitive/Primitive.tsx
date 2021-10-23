import React from 'react';

function Circle(/* props: CircleProps */) {
    return (
      <div>
          <svg height="82px" width="82px">
            <g>
                <ellipse rx="40" ry="40" cx="41" cy="41" style="fill:none;stroke:black;stroke-width:2" />
            </g>
          </svg>
      </div>
    );
}

function Rectangle(/* props: RectangleProps */) {
    return (
      <div>
          <svg height="82px" width="82px">
            <g>
                <rect width="80" height="80" x="1" y="1" rx="0" ry="0" style="fill:none;stroke:black;stroke-width:2" />
            </g>
          </svg>
      </div>
    );
}

function Triangle(/* props: TriangleProps */) {
    return (
      <div>
          <svg height="82px" width="82px">
            <g>
                <polygon points="2,80 40,2 80,80" style="fill:none;stroke:black;stroke-width:2" />
            </g>
          </svg>
      </div>
    );
}


export default Circle;
export default Rectangle;
export default Triangle;