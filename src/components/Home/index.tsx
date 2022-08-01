import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import SetList from '../SetList';

const Home = () => {
  return (
    <div>
      <Container>
        {/* <Typography
          variant="h1"
          sx={{
            fontSize: '2rem',
            margin: '2rem 0',
          }}
        >
          Todas as músicas
        </Typography> */}
        <SetList />
      </Container>
    </div>
  );
};

export default Home;
