import React from 'react';

type imageProps = {
  href: string;
}

let src: string = "";


function Image(props: imageProps) {
  return (    
      <image href={props.href} height="200" width="200" x="450" y="220" ></image>    
  );
}

export default Image;
