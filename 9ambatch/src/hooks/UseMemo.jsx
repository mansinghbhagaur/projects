import React, { useState, memo, useCallback } from 'react'

export const Callback = () => {
      const [count, setCount] = React.useState(0)
      const [text, setText] = useState('')

      const handleCallback = useCallback(() => {
            console.log("child rendering")
            setCount(count + 1);
      }, [count]);

      return (
            <div>
                  <h1>Parent components</h1>
                  <Child handleCallback={handleCallback} />
                  <input type='text' value={text} onChange={(e) => setText(e.target.value)} />
            </div>
      )
}



const Child = memo(({ handleCallback }) => {
      console.log('child render')
      return (
            <>
                  <h1>Child components</h1>
                  <button onClick={handleCallback}>Count Inc</button>
            </>
      )
})










// import React, { useState } from 'react'

// const UseMemo = () => {
//       const [count, setCount] = React.useState(0);
//       const [text, setText] = useState('');

//       const addCount = (a, b) => {
//             // setCount(count + 1);
//             const sum = a + b
//             console.log('render')
//             return sum
//       }

//       return (
//             <div>
//                   <h1>Use Memo</h1>
//                   <h1>{count}</h1>
//                   <button onClick={() => addCount(2, 2)}>Add</button>
//                   <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
//             </div>
//       )
// }

// export default UseMemo




