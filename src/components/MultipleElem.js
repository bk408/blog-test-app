

import React from 'react'

const MultipleElem = () => {
  return (
    <div>
      Multiple Element and custom role testing
      <button type="submit">submit</button>
      <button type="submit">update</button>
      <label htmlFor="input1"> Name</label>
      <input type="text" id="input1" />
      <label htmlFor="input2"> Age</label>
          <input type="email" id='input2' />
          
          <div role='dummy' >Hello</div>
    </div>
  );
}

export default MultipleElem;