import React from 'react';
import AndyThing from '../../components/AndyThing/AndyThing'

const AndysThings = (props) => {
  return ( 
    <>
      <h1>Andy's Things</h1>
      {props.andysThings.map((thing, idx) => 
        <AndyThing 
          key={idx}
          thing={thing}
        />
      )}

    </>
   );
}
 
export default AndysThings;