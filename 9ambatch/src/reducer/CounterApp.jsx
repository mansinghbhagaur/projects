import React from 'react'
import { useReducer } from 'react'
import { reducer } from './CountReducer';

const CounterApp = () => {
      const [state, dispatch] = useReducer(reducer, { count: 0 });
      console.log(state.count, 'state')

      return (
            <div>
                  <h1 style={{ textAlign: 'center' }}>Counter App</h1>
                  <h1>{state.count}</h1>
                  <button onClick={() => dispatch({ type: 'INCREMENT' })}>ADD</button>
                  <button onClick={() => dispatch({ type: 'DECREMENT' })}>SUB</button>
                  <button onClick={() => dispatch({ type: 'RESET', payload: 15 })}>RESET</button>
            </div>
      )
}

export default CounterApp
