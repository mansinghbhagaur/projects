// formik yup with mui

import { Button, Container, FormControl, FormControlLabel, FormLabel, Grid2, MenuItem, Paper, Select, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup"; // eslint-disable-line no-unused-vars

const App = () => {
  const { values, touched, handleBlur, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      mobile: "",
      password: "",
      confirmPassword: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().required().matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        'Invalid email format'),
      mobile: Yup.string().required().matches(/^[0-9]{10}$/, 'Invalid mobile number'),
      password: Yup.string().required("Pass is required").min(5, 'minium 5 digit').max(8, "maximum 8 digit"),
      confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], "password not match"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    },
    validateOnChange: true,
    validateOnBlur: true,
  });

  console.table(errors);


  return (
    <Container maxWidth="sm">
      <Paper elevation={20} sx={{ p: 2, mt: 5 }} component={'form'} onSubmit={handleSubmit} >
        <Typography variant="h5" fontWeight={800} textAlign='center' gutterBottom>Form Formik</Typography>
        <Grid2 container spacing={2}>
          <Grid2 size={{ sm: 12 }}>
            <TextField fullWidth size="small" error={touched.email && errors.email} onBlur={handleBlur} helperText={touched.email && errors.email} name="email" value={values.email || ""} onChange={handleChange} label="Email" placeholder="Enter Your Email" />
          </Grid2>

          <Grid2 size={{ sm: 12 }}>
            <TextField fullWidth size="small" type="number" error={touched.mobile && errors.mobile} onBlur={handleBlur} helperText={touched.mobile && errors.mobile} name="mobile" value={values.mobile || ""} onChange={handleChange} label="Mobile" placeholder="Enter Your Mobile" />
          </Grid2>

          <Grid2 size={{ sm: 12 }}>
            <TextField fullWidth size="small" error={touched.password && errors.password} onBlur={handleBlur} helperText={touched.password && errors.password} name="password" value={values.password || ""} onChange={handleChange} label="Password" placeholder="Enter Your Password" />
          </Grid2>


          <Grid2 size={{ sm: 12 }}>
            <TextField fullWidth size="small" error={touched.confirmPassword && errors.confirmPassword} onBlur={handleBlur} helperText={touched.confirmPassword && errors.confirmPassword} name="confirmPassword" value={values.confirmPassword || ""} onChange={handleChange} label="Confirm Password" placeholder="Enter Your ConfirmPassword" />
          </Grid2>

          <Grid2 size={{ sm: 12 }}>
            <FormControl fullWidth size="small">
              <FormLabel>
                Select:
              </FormLabel>
              <Select displayEmpty value={""}>
                <MenuItem value="">Select</MenuItem>
                <MenuItem value="1">
                  option1
                </MenuItem>
              </Select>
            </FormControl>
          </Grid2>

          <Grid2 size={{ xs: 4 }}>
            <Button type="submit" variant="outlined">Submit</Button>
          </Grid2>
        </Grid2>

      </Paper>

    </Container>
  )
}


export default App;




// formik with mui

// import { Button, Container, Grid2, Paper, TextField, Typography } from "@mui/material";
// import { useFormik } from "formik";

// const App = () => {
//   const { values, touched, errors, handleChange, handleSubmit } = useFormik({
//     initialValues: {
//       email: "",
//       password: "",
//     },
//     validate: (values) => {
//       const errors = {};
//       if (!values.email) errors.email = "Email is required";
//       if (!values.password) errors.password = "Password is required";
//       return errors;
//     },
//     onSubmit: (values, { resetForm }) => {
//       console.log(values);
//       resetForm();
//     }

//   });

//   console.log(errors);

//   return (
//     <Container maxWidth="sm">
//       <Paper elevation={20} sx={{ p: 2, mt: 5 }} component={'form'} onSubmit={handleSubmit} >
//         <Typography variant="h5" fontWeight={800} textAlign='center' gutterBottom>Form Formik</Typography>
//         <Grid2 container spacing={2}>
//           <Grid2 size={{ sm: 12 }}>
//             <TextField error={touched.email && errors.email} helperText={touched.email && errors.email} fullWidth size="small" name="email" value={values.email || ""} onChange={handleChange} label="Email" placeholder="Enter Your Email" />
//           </Grid2>

//           <Grid2 size={{ sm: 12 }}>
//             <TextField fullWidth size="small" error={errors.password} helperText={errors.password} name="password" value={values.password || ""} onChange={handleChange} label="Password" placeholder="Enter Your Password" />
//           </Grid2>

//           <Grid2 size={{ xs: 4 }}>
//             <Button type="submit" variant="outlined">Submit</Button>
//           </Grid2>
//         </Grid2>

//       </Paper>

//       <Paper sx={{ p: 5, mt: 5 }} elevation={24}>
//         <Typography>nurul</Typography>
//       </Paper>

//     </Container>
//   )
// }


// export default App;






// import { useFormik } from 'formik'
// import React from 'react'

// const App = () => {
//   const formik = useFormik({
//     initialValues: {
//       name: '',
//       email: ''
//     },
//     validate: (values) => {
//       const errors = {};
//       if (!values.name) errors.name = "Name is Required";
//       if (!values.email) errors.email = "Email is Required";
//       return errors;
//     },

//     onSubmit: (values, { resetForm }) => {
//       console.log(values)
//       resetForm();
//     }
//   });
//   // console.log('formik', formik);
//   // console.log(formik.errors)

//   return (
//     <div style={{
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center'
//     }}>
//       <h1 style={{ textAlign: 'center', marginBottom: 30, marginTop: 20 }}>My App Form</h1>
//       <form onSubmit={formik.handleSubmit}>
//         <label>Name: </label>
//         <input type="text" name="name" value={formik.values.name} onChange={formik.handleChange} />
//         <br /><br />
//         {formik.errors && formik.errors.name && <div style={{ color: 'red' }}>{formik.errors.name}</div>}
//         <label>Email: </label>
//         <input type="email" name='email' value={formik.values.email} onChange={formik.handleChange} />
//         <br /><br />
//         {formik.errors && formik.errors.email && <div style={{ color: 'red' }}>{formik.errors.email}</div>}
//         <input type="submit" />
//       </form>
//     </div>
//   )
// }

// export default App
