import React from 'react'
import { useThemeContext } from './theme/ThemeContext'
import { Box, Button, IconButton, Typography } from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import BedtimeIcon from '@mui/icons-material/Bedtime';

const App = () => {
  const { mode, toggleTheme } = useThemeContext();

  console.log(mode)
  return (
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
      <IconButton aria-label="toggle" size='large' onClick={toggleTheme}>
        {mode === 'light' ? <BedtimeIcon fontSize='80px' /> : <WbSunnyIcon />}
      </IconButton>
    </Box>
  )
}

export default App