import  { useState,useEffect } from "react";

const Users = ()=>{

const [data,setData] = useState([]);

useEffect(()=>{

    const datas = async () => {
    
       await fetch('https://jsonplaceholder.typicode.com/users')
       .then((res)=> res.json())
       .then((res)=> setData(res))
    
       console.log(data)
    
    }
    datas()
},[])
console.log(data)

return (<>

      <ul itemType="numbers">
        {data.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>



</>)
}

export default Users