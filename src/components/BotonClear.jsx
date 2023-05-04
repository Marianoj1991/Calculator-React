
import React from 'react';
import '../style-sheets/boton-clear.css';

export const BotonClear = ({ onChange }) => {
  return (
    <button
      onClick={ onChange } 
      className='boton-clear'>
        Clear All
    </button>
  )
}
