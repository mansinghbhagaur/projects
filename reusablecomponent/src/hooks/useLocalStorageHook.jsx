import React, { useEffect, useReducer } from 'react'

const useLocalStorageHook = (key, reducer, initialValue) => {
      const initializer = () => {
            const storedValue = localStorage.getItem(key);
            return storedValue ? JSON.parse(storedValue) : initialValue;
      }

      const [state, dispatch] = useReducer(reducer, initialValue, initializer);

      useEffect(() => {
            localStorage.setItem(key, JSON.stringify(state));
      }, [key, state]);

      return [state, dispatch]
}

export default useLocalStorageHook
