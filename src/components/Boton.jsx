
import React from 'react';
import '../style-sheets/boton.css';

export const Boton = (props) => {

  const esOperador = ( inputChar ) => {
    return isNaN(inputChar) && (inputChar !== '=' ) && ( inputChar !== '.' )
  } 

  return (
    <button 
      className={ `boton ${ (esOperador( props.children )) ? 'operador' : '' }` }
      onClick={() => props.onChange(props.children)}  >
      { props.children }
    </button>
  )
}
