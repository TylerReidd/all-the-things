import React from 'react';
import BenThing from '../../components/BenThing/BenThing'

const BensThings = (props) => {
  return ( 
    <>
      <h1>Ben's Things</h1>
      {props.bensThings.map((thing, idx) => 
        <BenThing 
          key={idx}
          thing={thing}
        />
      )}

    </>
   );
}
 
export default BensThings;