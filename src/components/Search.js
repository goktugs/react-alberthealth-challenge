import React, { useState, useContext } from 'react';
import { RiSearchLine } from 'react-icons/ri';
import { Input, Box } from '@chakra-ui/react';

import MovieContext from '../MovieContext';

const Search = () => {
  const [value, setValue] = useState('');
  const { fetchPopular, fetchSearch } = useContext(MovieContext);

  const onKeyUp = (event) => {
    if (event.key === 'Enter' && value !== '') {
      const query = value.trim();
      if (query === '') {
        fetchPopular();
      } else {
        fetchSearch(query);
      }
      setValue('');
    }
  };

  return (
    <Box>
      <Input
        type="text"
        id="search"
        w={'100%'}
        backgroundColor="white"
        placeholder="Search (press enter)"
        onKeyDown={(e) => onKeyUp(e)}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </Box>
  );
};

export default Search;
