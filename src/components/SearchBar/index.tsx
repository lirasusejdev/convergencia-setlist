import React, { useState } from 'react';
import { Box, Container, IconButton, Paper, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchTermChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    console.log(searchTerm);
  };

  return (
    <Container
      sx={{
        margin: '1.4rem auto',
      }}
    >
      <TextField
        id="outlined-search"
        label="Pesquisar música"
        type="search"
        InputProps={{
          endAdornment: (
            <IconButton type="submit" aria-label="search">
              <SearchIcon />
            </IconButton>
          ),
        }}
        sx={{
          width: '100%',
          fieldset: {},
        }}
      />
    </Container>
  );
};

export default SearchBar;
