import React, { useState } from 'react';
import './app.css';
import { Boton } from './components/Boton';
import { Pantalla } from './components/Pantalla';
import { BotonClear } from './components/BotonClear';

import { evaluate } from 'mathjs'

export const App = () => {

  const [ inputData, setInputData ] = useState('');

  const changeDisplay = ( data ) => {
    setInputData( inputData + data )
  }

  const calcularResultado = ( inputDisplay ) => {
    if ( inputDisplay.trim().length === 0 || inputDisplay.trim().length === 0 ) {
      setInputData('');
      return
    }

    setInputData( evaluate( inputData ) );

  }

  return (
    <section className='app' >
        <section className='contenedor-calculadora'>
            <Pantalla 
              inputData={ inputData } />
            <div className='fila'>
              <Boton onChange={ changeDisplay }>7</Boton>
              <Boton onChange={ changeDisplay }>8</Boton>
              <Boton onChange={ changeDisplay }>9</Boton>
              <Boton onChange={ changeDisplay }>/</Boton>
            </div>
            <div className='fila'>
              <Boton onChange={ changeDisplay }>4</Boton>
              <Boton onChange={ changeDisplay }>5</Boton>
              <Boton onChange={ changeDisplay }>6</Boton>
              <Boton onChange={ changeDisplay }>*</Boton>
            </div>
            <div className='fila'>
              <Boton onChange={ changeDisplay }>1</Boton>
              <Boton onChange={ changeDisplay }>2</Boton>
              <Boton onChange={ changeDisplay }>3</Boton>
              <Boton onChange={ changeDisplay }>-</Boton>
            </div>
            <div className='fila'>
              <Boton onChange={ calcularResultado }>=</Boton>
              <Boton onChange={ changeDisplay }>0</Boton>
              <Boton onChange={ changeDisplay }>.</Boton>
              <Boton onChange={ changeDisplay }>+</Boton>
            </div> 
            <div className='fila'>
              <BotonClear onChange={()=> setInputData('')} />
            </div>
        </section>
    </section>
  )
}
