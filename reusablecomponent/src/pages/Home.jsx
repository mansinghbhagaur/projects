import React from 'react'
import { ReusabeTable } from '../component/table/ReusableTable'
import { Delete, Edit } from "@mui/icons-material"
import BasicDialogBox from '../component/BasicDialogBox'
import StudentForm from '../component/form/StudentForm'
import { Button, Grid2, Typography } from '@mui/material'
import useLocalStorageHook from '../hooks/useLocalStorageHook'
import { reducer } from '../reducer/reducer'

const Home = () => {

      const [open, setOpen] = React.useState(false);
      const [selectedRow, setSelectedRow] = React.useState('');

      const [state, dispatch] = useLocalStorageHook('tasks', reducer, []);


      const handleClickOpen = () => {
            setOpen(true);
      };
      const handleClose = () => {
            setOpen(false);
            // selectedRow(null)
            setSelectedRow('')
      };

      const columns = [
            { field: 'id', headerName: 'ID' },
            { field: 'name', headerName: 'Name' },
            { field: 'mobile', headerName: 'Mobile No' },
      ]

      const actions = [
            {
                  icon: <Edit color="primary" />,
                  onClick: (row) => {
                        setSelectedRow(row)
                        setOpen(true)
                  },
            },
            { icon: <Delete color='error' /> }
      ]
      return (
            <div>
                  <Grid2 container spacing={1}>
                        <Grid2 size={{ sm: 'auto' }} display={'flex'} sx={{ pt: 2, pl: 3, }}>
                              <Typography variant='h6'>Todos</Typography>
                              <Button variant="outlined" onClick={handleClickOpen} sx={{ ml: 3 }}>
                                    Add
                              </Button>
                        </Grid2>
                  </Grid2>

                  {
                        open && <BasicDialogBox title={selectedRow ? "Update Form" : "Add Form"} formId="student" open={open} selectedRow={selectedRow}
                              handleClickOpen={handleClickOpen} handleClose={handleClose} >
                              <StudentForm formId="student" initialValue={selectedRow} setOpen={setOpen} dispatch={dispatch} />
                        </BasicDialogBox>
                  }

                  <ReusabeTable
                        columns={columns}
                        rows={state}
                        actions={actions}
                        width='md'
                        dynamicHeaderStyle={true}  // Enable dynamic header styling
                        dynamicBodyStyle={true}   // Disable dynamic body styling
                        headerStyle={{
                              backgroundColor: '#f05',  // Override header background color
                              fontSize: '1.1rem',           // Override header font size
                              padding: '12px',              // Override header padding
                        }}
                        bodyStyle={{
                              backgroundColor: '#eeeeee',  // Override body background color
                              padding: '12px',
                              fontSize: '1rem',
                        }}
                  />
            </div>
      )
}

export default Home
