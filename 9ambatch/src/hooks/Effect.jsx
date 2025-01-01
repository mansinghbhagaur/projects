import React, { useEffect, useState, useContext } from "react";
import { ContextApi } from "../context/Context";

const Effect = () => {
  const [count, setCount] = useState(0);
  const props = useContext(ContextApi);

  console.log(props);



  // without dependency array
  //   useEffect(() => {
  //     console.log("without dependency code");
  //   });

  //   // pass dependency array empty []
  //   useEffect(() => {
  //     console.log("Effect code");
  //   }, []);

  //   // pass dependency array [dependency]
  //   useEffect(() => {
  //     console.log("Effect code");
  //   }, [count]);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const Fetch = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        ).then((res) => res.json()); // fetch data from API

        setData(response);
        //   console.log(data, "data");
        //   console.log(response, "res");
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    Fetch();
  }, []);

  //   if (loading) {
  //     return <div>Loading...</div>;
  //   }

  return (
    <div>
      <h1>UseEffect</h1>
      <ul>
        {/* Users Data */}
        {/* {loading
          ? "Loading"
          : data.map((item, i) => (
              <li key={item.id}>
                Id: {item.id} Name: {item.name}
              </li>
            ))} */}

        {data.map((item, i) => (
          <li key={item.id}>
            Id: {item.id} Name: {item.name}
          </li>
        ))}
        {/* {loading && <div>Loading...</div>} */}
      </ul>

      {/* <h1>Count:{count}</h1>
      <button onClick={() => setCount(count + 1)}>Update</button> */}
    </div>
  );
};

export default Effect;
