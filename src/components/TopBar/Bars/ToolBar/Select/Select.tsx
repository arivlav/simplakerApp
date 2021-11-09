import React from 'react';
import './Select.css';
import Option from './Option/Option';

type SelectType = {
  id?: string,
  value: string
}

type SelectProps = {
  title: string,
  className: string,
  elements?: Array<SelectType>
}

function Select(props: SelectProps) {

  let selectElements = props.elements?.map(el => (<Option value={el.value} />))

  return (
    <div >
      <select title={props.title} className={props.className}>
        {selectElements}
      </select>
    </div>
  );
}

export default Select;
