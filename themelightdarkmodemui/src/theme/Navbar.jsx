import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import {useThemeContext} from './ThemeContext'


const Navbar = ()=> {
    const { mode, toggleTheme } = useThemeContext();
  
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <IconButton aria-label="toggle" size='large' onClick={toggleTheme}>
        {mode === 'light' ? <BedtimeIcon fontSize='80px' sx={{"color":"white"}} /> : <WbSunnyIcon />}
      </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }

  export default Navbar