import React from 'react';
import TylerThing from '../../components/TylerThing/TylerThing'

const TylersThings = (props) => {
  return ( 
    <>
      <h1>Tyler's Things</h1>
      {props.tylersThings.map((thing, idx) => 
        <TylerThing 
          key={idx}
          thing={thing}
        />
      )}

    </>
   );
}
 
export default TylersThings;