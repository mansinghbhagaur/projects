import { Box,  Typography } from '@mui/material';
import Navbar from './theme/Navbar';

const App = () => {

  return (<>
  <Navbar/>
    <Box sx={{
      display: 'flex',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      bgcolor: 'background.default',
      color: 'text.secondary',
      borderRadius: 1,
      p: 3,
      minHeight: '98vh',
    }}>
      <Typography variant='h1' color={'secondary'}>App components</Typography>
    </Box></>
  )
}

export default App