import React from 'react';

const user = (props) => {

  return (
    <div>
      <p>Hi, I'm {props.name}</p>
      <input onChange={props.click} value={props.name} />
    </div>
  )
}

export default user;