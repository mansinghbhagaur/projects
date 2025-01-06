import React from 'react'

const ControlledCom = () => {
      // static tarika

      // const [username, setUsername] = React.useState('');
      // const [firstname, setFirstName] = React.useState('');

      // const handleSubmit = () => {
      //       console.log(username);
      //       console.log(firstname);
      //       setUsername('')
      //       setFirstName('')
      // }

      // dynamic tarika
      const initialValue = {
            username: '',
            firstname: '',
            lastName: '',
            email: '',
      }
      const [formData, setFormData] = React.useState(initialValue);

      const handleChange = (e) => {
            // const value = e.target.value;
            // const name = e.target.name;
            const { name, value } = e.target;
            // console.log(name, value);
            setFormData((prevData) => ({
                  ...prevData, [name]: value
            }));
      }

      const handleSubmit = (e) => {
            e.preventDefault();
            console.log(formData);
            // setFormData({
            //       username: '',
            //       firstname: '',
            //       lastName: '',
            //       email: '',
            // })

            setFormData(initialValue);
      }

      return (
            <div>
                  {/* <h1>Controlled Form</h1>
                  <input type='text' name='username' value={username} onChange={(e) => setUsername(e.target.value)} />
                  <input type='text' name='username' value={firstname} onChange={(e) => setFirstName(e.target.value)} />
                  <button onClick={handleSubmit}>Submit</button> */}

                  {/* dynamic ke liye code */}
                  <h1>Controlled com form</h1>
                  <form onSubmit={handleSubmit}>
                        <label htmlFor="username">UserName:</label>
                        <input type='text' id="username" name='username' value={formData.username} onChange={(e) => handleChange(e)} />

                        <label htmlFor="firstName">FirstName:</label>
                        <input type='text' id="firstName" name='firstname' value={formData.firstname} onChange={(e) => handleChange(e)} />
                        <label htmlFor="lastName">LastName:</label>
                        <input type='text' id="lastName" name='lastName' value={formData.lastName} onChange={(e) => handleChange(e)} />
                        <label htmlFor="firstName">Email:</label>
                        <input type='email' id="email" name='email' value={formData.email} onChange={(e) => handleChange(e)} />
                        <button type='submit'>Submit</button>
                  </form>
            </div>
      )
}

export default ControlledCom
