import { useFormik } from 'formik'
import React from 'react'

const App = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: ''
    },
    validate: (values) => {
      const errors = {};
      if (!values.name) errors.name = "Name is Required";
      if (!values.email) errors.email = "Email is Required";
      return errors;
    },

    onSubmit: (values) => {
      console.log(values)
    }

  });
  // console.log('formik', formik);
  console.log(formik.errors)

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <h1 style={{ textAlign: 'center', marginBottom: 30, marginTop: 20 }}>My App Form</h1>
      <form onSubmit={formik.handleSubmit}>
        <label>Name: </label>
        <input type="text" name="name" value={formik.values.name} onChange={formik.handleChange} />
        <br /><br />
        {formik.errors && formik.errors.name && <div style={{ color: 'red' }}>{formik.errors.name}</div>}
        <label>Email: </label>
        <input type="email" name='email' value={formik.values.email} onChange={formik.handleChange} />
        <br /><br />
        <input type="submit" />
      </form>
    </div>
  )
}

export default App
