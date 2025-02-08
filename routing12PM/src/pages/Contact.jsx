// import React from 'react'
// import { useParams } from 'react-router'

// const Contact = () => {
//       const { id } = useParams();
//       return (
//             <div>{id}
//                   <h1>Contact us</h1>
//             </div>
//       )
// }

// export default Contact





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
