import React from 'react';
import DavidThing from '../../components/DavidThing/DavidThing'

const DavidsThings = (props) => {
  return ( 
    <>
      <h1>David's Things</h1>
      {props.davidsThings.map((thing, idx) => 
        <DavidThing 
          key={idx}
          thing={thing}
        />
      )}

    </>
   );
}
 
export default DavidsThings;