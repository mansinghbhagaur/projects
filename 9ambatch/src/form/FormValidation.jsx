import React, { useState } from 'react'

const FormValidation = () => {
      const initialValues = {
            name: "",
            email: '',
            password: '',
            file: ''
      }
      const [values, setValues] = useState(initialValues);
      // const [errors, setErrors] = useState({});

      const uploadFile = (e) => {
            const file = e.target.files[0];
            console.log(file);
      }

      const handleInputChange = (e) => {
            const { name, value } = e.target;

            setValues((prev) => ({ ...prev, [name]: value }));
      }

      const handleSubmit = (e) => {
            e.preventDefault();
            // const { name, email, password } = values;
            console.log(values)
            setValues(initialValues)
      }

      return (
            <div>
                  <h1>Form Validation</h1>
                  <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Name: </label>
                        <input type="text" id="name" name="name" value={values.name} onChange={(e) => handleInputChange(e)} /><br /><br />
                        <label htmlFor="email">Email: </label>
                        <input type="email" id="email" name='email' value={values.email} onChange={(e) => handleInputChange(e)} /><br /><br />
                        <label htmlFor="password">Password: </label>
                        <input type="password" id="password" name="password" value={values.password} onChange={(e) => handleInputChange(e)} /><br /><br />
                        <input type="file" name='file' onChange={(e) => uploadFile(e)} />
                        <button type='submit'> Submit</button>
                  </form>
            </div>
      )
}

export default FormValidation




// first part of the solution

// import React, { useState } from 'react'

// const FormValidation = () => {
//       const [email, setEmail] = useState('');
//       const [error, setError] = useState('');

//       const onChangeHandle = (e) => {
//             setEmail(e.target.value);
//             if (!e.target.value.includes('@')) {
//                   setError('Invalid Email Format');
//             } else {
//                   setError('');
//             }
//       }

//       // console.log(error)

//       const onSubmitHandle = (e) => {
//             e.preventDefault();
//             // console.log(email);
//             // setEmail('')
//             if (!error) {
//                   alert(`Form submitted successfully ${email}`)
//                   setEmail('')
//             }
//       }

//       return (
//             <div>
//                   <h1>Form Validation</h1>
//                   <form onSubmit={onSubmitHandle}>
//                         <label htmlFor="email">Name: </label>
//                         <input type="text" id="email" name="email" value={email} onChange={(e) => onChangeHandle(e)} />
//                         {error && <div style={{ color: 'red' }}>{error}</div>}
//                         <button type='submit'>Submit</button>
//                   </form>
//             </div>
//       )
// }

// export default FormValidation


