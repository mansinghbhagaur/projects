import React, { useRef } from 'react'

const UseRef = () => {
      const inputRef = useRef(null);
      // console.log(inputRef.current);

      const handleClick = () => {
            inputRef.current.focus();
            console.log(inputRef.current.name)
            console.log(inputRef.current)
            console.log(inputRef.current.value)
      }

      return (
            <div>
                  <h1>UseRef</h1>
                  <input type="text" name="name" placeholder='Focus Input' ref={inputRef} />
                  <button onClick={handleClick}>Click Me!</button>
            </div>
      )
}

export default UseRef
