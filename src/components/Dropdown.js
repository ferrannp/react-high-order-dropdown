/**
 * Stateless Dropdown
 * @param props
 * @constructor
 */

import React from 'react';
import './Dropdown.scss';

export const Dropdown = (props) => (
  <div className='dropdown'>
    <button onClick={props.onToggle}>
      Selected option: {props.data[props.optionSelected]}
    </button>
    <ul className={props.isOpen ? 'active':null}>
      {
        props.data.map((item, i) => {
          return (
            <li key={i} className={i === props.optionSelected ? 'selected':null}
                onClick={() => props.onSelect(i)}>
              {item}
            </li>
          )
        })
      }
    </ul>
  </div>
);