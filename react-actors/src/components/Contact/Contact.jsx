import {useState} from 'react';
import React from 'react';


function Contact() {

  const [ name, setName ] = useState( '' );
  const [ last, setLast ] = useState( '' );
  const [ impression, setImpression ] = useState( '' );

  let nameChange = ( event ) => {
    console.log( 'in nameChange', event.target.value);
    setName( event.target.value );
  }

  let lastChange = ( event ) => {
    console.log( 'in lastChange', event.target.value);
    setLast( event.target.value );
  }

  let impressionChange = ( event ) => {
    console.log( 'in impressionChange', event.target.value);
    setImpression( event.target.value );
  }

  let buttonClick = () => {
    console.log( 'in buttonClick' );
    alert('Thank You For Joining Us');
  }

  return (
    <div>
      <h2>Contact</h2>
      <input type="text" placeholder="First Name" onChange={ nameChange }></input>
      <input type="text" placeholder="Last Name" onChange={ lastChange }></input>
      <input type="text" placeholder="Best Impression" onChange={impressionChange}></input>
      <button onClick={ buttonClick }>Join Us!</button>
      <p>{ name } { last }'s best impression is { impression }.</p>
    </div>
  );
}

export default Contact;