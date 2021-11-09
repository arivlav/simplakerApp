import React from 'react';

type OptionProps = {    
    value: string
  }
  
  function Option(props: OptionProps)
  {
    return (
      <option>{props.value}</option>
    );
  }

  export default Option;