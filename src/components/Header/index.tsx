import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import InputBase from '@mui/material/InputBase';

const Header = () => {
  return (
    <AppBar position="static" sx={{ padding: '0.5rem 0', bgcolor: 'white' }}>
      <Container maxWidth="xl">
        <Toolbar>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              flexGrow: 1,
              fontSize: '1.4rem',
              fontWeight: 300,
              color: '#333',
              textDecoration: 'none',
              textTransform: 'uppercase',
              textAlign: 'center',
            }}
          >
            Convergência <strong>Setlist</strong>
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
