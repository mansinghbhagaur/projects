import React, { useLayoutEffect, useRef } from 'react'

const UseLayoutEffect = () => {
      const boxRef = useRef(null);
      console.log(boxRef);

      useLayoutEffect(() => {
            const width = boxRef.current.offsetWidth;
            boxRef.current.style.height = `${width / 2}px`;
            boxRef.current.style.color = 'royalblue';
      }, [])

      return (
            <div ref={boxRef} style={{
                  width: '90%',
                  background: '#f05',
                  margin: '20px, auto',
                  textAlign: 'center'
            }}>
                  <h1>Use Layout Effect</h1>
            </div>
      )
}

export default UseLayoutEffect
