import React, { useContext, useEffect } from 'react';
import Movie from './Movie';
import MovieContext from '../MovieContext';
import { Grid, Box, Text } from '@chakra-ui/react';

import { motion } from 'framer-motion';

const MoviesList = () => {
  const {
    filtered,
    fetchPopular,
    header,
    radioValue,
    fetchTopRated,
    fetchUpcoming,
  } = useContext(MovieContext);

  useEffect(() => {
    if (header === 'Popular Movies') {
      fetchPopular();
    } else if (header === 'Top Rated Movies') {
      fetchTopRated();
    } else if (header === 'Upcoming Movies') {
      fetchUpcoming();
    }
  }, [radioValue]);

  return (
    <>
      <Box>
        <Text pl={'30px'} pt={'30px'} color={'white'} fontSize={'3xl'}>
          {filtered.length !== 0 ? header : ''}
        </Text>
        <motion.div layout>
          <Grid
            columnGap={'20px'}
            mt="50px"
            pl={'30px'}
            width="100%"
            templateColumns={{
              base: 'repeat(1,1fr)',
              md: 'repeat(3,1fr)',
              lg: 'repeat(5,1fr)',
            }}
          >
            {filtered.map((movie) => {
              return <Movie key={movie.id} movie={movie} />;
            })}
          </Grid>
        </motion.div>
      </Box>
      {filtered.length === 0 && (
        <Text color={'white'} fontSize="3xl">
          No movies to display
        </Text>
      )}
    </>
  );
};

export default MoviesList;
