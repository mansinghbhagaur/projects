import React, { useRef } from 'react'

const UncontrolledCom = () => {
      const usernameRef = useRef(null);
      const fristNameRef = useRef(null);

      const handleSubmit = (e) => {
            e.preventDefault();
            console.log(usernameRef.current.value);
            console.log('fristNameRef', fristNameRef.current.value);
      }

      return (
            <div>
                  <h1>UncontrolledCom</h1>
                  <form onSubmit={handleSubmit}>
                        <label htmlFor="username">Username: </label>
                        <input id="username" type='text' name="username" ref={usernameRef} />
                        <br />
                        <label htmlFor="firstName">FristName: </label>
                        <input id="firstName" type='text' name="FistName" ref={fristNameRef} />
                        <br />

                        <input type="submit" />
                  </form>
            </div>
      )
}

export default UncontrolledCom
