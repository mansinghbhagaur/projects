import React, { useState } from 'react'

const ControlledCom = () => {
      // const [inputValue, setInputValue] = useState('');
      // const [inputSecondValue, setInputSecondValue] = useState('');

      // const handleSubmit = (e) => {
      //       e.preventDefault();// prevent default form submission
      //       console.log(inputValue);
      //       console.log(inputSecondValue);
      //       setInputValue('');
      //       setInputSecondValue('');
      // }

      // handle multiple form value
      const initialValue = {
            username: '',
            lastName: ''
      }

      const [formValues, setFormValues] = useState(initialValue);

      const handleSubmit = (e) => {
            e.preventDefault();// prevent default form submission
            console.log(formValues.username, "username");
            console.log(formValues.lastName, "lastName");
            setFormValues(initialValue)

      }

      const handleChange = (e) => {
            const name = e.target.name;
            const value = e.target.value;
            setFormValues((prev) => ({ ...prev, [name]: value }))
      }

      return (
            <div>
                  <h1>Controlled Com</h1>
                  {/* <form onSubmit={handleSubmit}>
                        <label htmlFor="username"> Username: </label>
                        <input id='username' type="text" name="username" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />

                        <label htmlFor="lastName"> LastName: </label>
                        <input type="text" id="lastName" name="lastName" value={inputSecondValue} onChange={(e) => setInputSecondValue(e.target.value)} />
                        <input type="submit" value="Submit" />
                  </form> */}

                  {/* multiple value form data using */}
                  <form onSubmit={handleSubmit}>
                        <label htmlFor="username"> Username: </label>
                        <input id='username' type="text" name="username" value={formValues.username} onChange={(e) => handleChange(e)} />

                        <label htmlFor="lastName"> LastName: </label>
                        <input type="text" id="lastName" name="lastName" value={formValues.lastName} onChange={(e) => handleChange(e)} />
                        <input type="submit" value="Submit" />
                  </form>
            </div>
      )
}

export default ControlledCom;
