 import React from 'react';

function Triangle(/* props: TriangleProps */) {
    return (
      <div>
          <svg height="82px" width="82px">
            <g>
                <polygon points="2,80 40,2 80,80" fill="none" stroke="black" stroke-width="2"/>
            </g>
          </svg>
      </div>
    );
}


export default Triangle;