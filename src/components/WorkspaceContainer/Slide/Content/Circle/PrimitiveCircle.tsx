import React from 'react';

function Circle(/* props: CircleProps */) {
    return (
      // <div>
      //     <svg height="82px" width="82px">
            <g>
                <ellipse height="82px" width="82px" rx="40" ry="40" cx="41" cy="41" fill="none" stroke="black" stroke-width="2" />
            </g>
      //     </svg>
      // </div>
    );
}

export default Circle;