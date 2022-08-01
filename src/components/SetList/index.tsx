import React from 'react';
import {
  Box,
  Divider,
  FormControl,
  InputLabel,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
} from '@mui/material';

const SetList = () => {
  const [order, setOrder] = React.useState('asc');
  const [tone, setTone] = React.useState('all');

  const handleOrderChange = (event: SelectChangeEvent) => {
    setOrder(event.target.value as string);
  };

  const handleToneChange = (event: SelectChangeEvent) => {
    setTone(event.target.value as string);
  };

  return (
    <>
      <Stack
        direction="row"
        justifyContent="flex-end"
        spacing={2}
        sx={{ marginBottom: '1.5rem' }}
      >
        <Box sx={{ width: '50%' }}>
          <FormControl size="small" fullWidth>
            <Select
              labelId="order-select"
              value={order}
              label="Ordenar por"
              onChange={handleOrderChange}
              variant="standard"
              defaultValue="asc"
            >
              <MenuItem value="asc">Ordem crescente</MenuItem>
              <MenuItem value="desc">Ordem decrescente</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ width: '50%' }}>
          <FormControl size="small" fullWidth>
            <Select
              labelId="order-select"
              value={tone}
              label="Ordenar por"
              onChange={handleToneChange}
              variant="standard"
              defaultValue="all"
            >
              <MenuItem value="all">Qualquer tom</MenuItem>
              <MenuItem value="C">C</MenuItem>
              <MenuItem value="D">D</MenuItem>
              <MenuItem value="E">E</MenuItem>
              <MenuItem value="F">F</MenuItem>
              <MenuItem value="G">G</MenuItem>
              <MenuItem value="A">A</MenuItem>
              <MenuItem value="B">B</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Stack>
      <Box
        sx={{
          width: '100%',
          bgcolor: 'rgba(127, 127, 127, 0.1)',
          marginBottom: '2rem',
        }}
      >
        <List sx={{ padding: 0 }}>
          {Array(10)
            .fill(0)
            .map((item, index) => {
              const primary = (
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: '1.25rem',
                  }}
                >
                  Nome completo da música
                </Typography>
              );
              const secondary = `Tom: C - Artista: Nome do artista`;
              return (
                <>
                  <ListItem key={index} sx={{ padding: 0 }}>
                    <ListItemButton>
                      <ListItemText
                        primary={primary}
                        secondary={secondary}
                        sx={{
                          primary: {
                            fontSize: '2rem',
                          },
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                  <Divider component="li" />
                </>
              );
            })}
        </List>
      </Box>
    </>
  );
};

export default SetList;
