import React from 'react'
import { useSearchParams } from 'react-router'

const Contact = () => {
      const [searchParams, setSearchParams] = useSearchParams()
      const queryUpdate = () => setSearchParams({ lastname: 'name' })

      return (
            <div>
                  <h1>Contact us page</h1>
                  <h1>Query Search: {searchParams.get('lastname')}</h1>
                  <button onClick={queryUpdate}>set query</button>
            </div>
      )
}

export default Contact
