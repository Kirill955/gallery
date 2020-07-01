import React from 'react';

// Style
import './Form.scss';

// Components
import { Inputs } from '../Inputs/Inputs';
import { Buttons } from '../Buttons/Buttons';


export const Form = () => {
  const handlerForm = ( event ) => {
    event.preventDefault()
    console.log('click')
  };
  return (
    <form action="POST" className="form-img" >
      <Inputs.Text />
      <Buttons.Submit handler={ handlerForm } />
    </form>
  );
};