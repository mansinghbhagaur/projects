import { Box, } from '@mui/material';
import Navbar from './theme/Navbar';
import Users from './components/Users';

const App = () => {
  return (<>
  <Navbar/>
    <Box sx={{
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      bgcolor: 'background.default',
      color: 'text.secondary',
      borderRadius: 1,
      p: 3,
      minHeight: '98vh',
    }}>
      <Users/>
    </Box></>
  )
}

export default App