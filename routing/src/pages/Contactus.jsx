import React from 'react'
import { useSearchParams } from 'react-router'

const Contactus = () => {
      const [searchParams, setSearchParams] = useSearchParams();
      const filter = searchParams.get('filter');
      console.log(filter)

      return (
            <div>
                  <h1>Filter: {filter}</h1>
                  <button onClick={() => setSearchParams({ filter: 'man singh' })}>Search</button>
            </div>
      )
}

export default Contactus
