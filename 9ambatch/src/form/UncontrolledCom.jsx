import React, { useRef } from 'react'

const UncontrolledCom = () => {
      const inputRef = useRef(null);

      console.log(inputRef)

      const handleSubmit = (e) => {
            e.preventDefault();
            const value = inputRef.current.value;
            console.log(value);
            inputRef.current.value = ''

      }

      return (
            <div>
                  <h1>Uncontrolled Com</h1>
                  <form onSubmit={handleSubmit}>
                        <input type="text" ref={inputRef} />
                        <button type='submit'>Submit</button>
                  </form>
            </div>
      )
}

export default UncontrolledCom
