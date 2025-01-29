import { Grid2, TextField } from '@mui/material';
import React, { useEffect } from 'react';

const StudentForm = ({ formId, initialValue = {}, setOpen, dispatch }) => {

      const initialData = {
            name: initialValue?.name || '', // Safely access name property
            mobile: initialValue?.mobile || '', // Safely access mobile property
      }

      // Defaulting initialValue to an empty object if not provided
      const [values, setValues] = React.useState(initialData);

      // Handle field changes
      const handleChange = (event) => {
            const { name, value } = event.target;
            setValues((prevValues) => ({ ...prevValues, [name]: value }));
      };

      // Handle form submit
      const handleSubmit = (e) => {
            e.preventDefault();
            if (initialValue) {
                  dispatch({ type: 'EDIT_TODO', payload: { ...values, id: initialValue.id } });// Update existing todo
            } else {
                  dispatch({ type: 'ADD_TODO', payload: values })
            }
            setOpen(false)
            setValues(initialData)
      };

      // useEffect(() => {
      //       setValues({ ...initialValue,  });
      // }, []);


      return (
            <form id={formId} onSubmit={(e) => { handleSubmit(e) }}>
                  <Grid2 container spacing={2}>
                        <Grid2 size={{ xs: 12 }}>
                              <TextField
                                    fullWidth
                                    variant="outlined"
                                    label="Name"
                                    size="small"
                                    value={values.name}
                                    name="name"
                                    onChange={handleChange}
                              />
                        </Grid2>
                        <Grid2 size={{ xs: 12 }}>
                              <TextField
                                    fullWidth
                                    variant="outlined"
                                    label="Mobile"
                                    size="small"
                                    value={values.mobile}
                                    name="mobile"
                                    onChange={handleChange}
                              />
                        </Grid2>
                  </Grid2>
            </form >
      );
};

export default StudentForm;
