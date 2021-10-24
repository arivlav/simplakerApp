import React from 'react';

type textBoxProps = {
  text: string;
}

function TextBox(props: textBoxProps) {
  return (
    <g>
      <text x="10" y="300" fill="#006400" fontFamily="Roboto" fontStyle="bold" fontSize="16pt">
        {props.text}
      </text>
    </g>
  );
}

export default TextBox;