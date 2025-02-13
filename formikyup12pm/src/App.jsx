// formik yup with mui

import { Button, Container, Grid2, Paper, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const App = () => {
  const { values, touched, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required().email('Invalid Email'),
      password: Yup.number().required("Pass is required").min('6', "minium 6 charactor").max('15'),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    }

  });

  console.table(errors);


  return (
    <Container maxWidth="sm">
      <Paper elevation={20} sx={{ p: 2, mt: 5 }} component={'form'} onSubmit={handleSubmit} >
        <Typography variant="h5" fontWeight={800} textAlign='center' gutterBottom>Form Formik</Typography>
        <Grid2 container spacing={2}>
          <Grid2 size={{ sm: 12 }}>
            <TextField fullWidth size="small" name="email" value={values.email || ""} onChange={handleChange} label="Email" placeholder="Enter Your Email" />
          </Grid2>

          <Grid2 size={{ sm: 12 }}>
            <TextField fullWidth size="small" name="password" value={values.password || ""} onChange={handleChange} label="Password" placeholder="Enter Your Password" />
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
