import React from 'react'

const Query = () => {
    let login = true;
    let toggle = false;
  return (
      <div>
          <h3>QueryBy testing</h3>

          {
            login? <button>Logout</button> : <button>Login</button>  
          }

          {
              toggle? <input  placeholder='name' /> : <input placeholder='email' />
          }

    </div>
  )
}

export default Query