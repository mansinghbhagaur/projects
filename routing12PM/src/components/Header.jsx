import React from 'react'

const Header = () => {
      return (
            <h1>header</h1>
      )
}

export default Header










// import React from 'react'
// import { Link, NavLink, useParams } from 'react-router'


// const Header = () => {
//       // const { id } = useParams();
//       // console.log(id)
//       return (
//             <ul style={{ display: 'flex', justifyContent: 'center', gap: 10, listStyle: 'none' }}>
//                   {/* <Link to="/">Home</Link>
//                   <Link to="/about">About</Link>
//                   <Link to="/contact">Contact</Link> */}
//                   {/* Id: {id} */}
//                   <NavLink to="/" style={({ isActive }) => (isActive ? { color: '#ffffff', background: 'blue', padding: '10px', borderRadius: 5, textDecoration: 'none', marginTop: -10 } : { color: "black", padding: '10px', borderRadius: 5, textDecoration: 'none' })} >Home</NavLink>
//                   <NavLink to="/about" style={({ isActive }) => (isActive ? { color: 'white', background: 'blue', padding: '10px', borderRadius: 5, textDecoration: 'none', marginTop: -10 } : { color: "black", padding: '10px', borderRadius: 5, textDecoration: 'none' })}>About</NavLink>
//                   <NavLink to="/contact" style={({ isActive }) => (isActive ? { color: 'white', background: 'blue', padding: '10px', borderRadius: 5, textDecoration: 'none', marginTop: -10 } : { color: "black", padding: '10px', borderRadius: 5, textDecoration: 'none' })}> Contact</NavLink>
//             </ul >
//       )
// }

// export default Header
