import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import MovieContext from '../MovieContext';
import { Text, Image, Box } from '@chakra-ui/react';

import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { motion } from 'framer-motion';
import defaultImage from '../assets/no-image.jpg';

function Movie({ movie }) {
  const { addToFavourites, isFav } = useContext(MovieContext);

  return (
    <Box
      pos={'relative'}
      overflow="hidden"
      _hover={{ boxShadow: 'dark-lg' }}
      className="movie"
    >
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        layout
      >
        {isFav(movie.id) ? (
          <AiOutlineStar onClick={() => addToFavourites(movie)} />
        ) : (
          <AiFillStar onClick={() => addToFavourites(movie)} />
        )}
        <Link to={`/movie/${movie.id}`} key={movie.id}>
          <Box
            h={'100%'}
            w={'100%'}
            pos={'absolute'}
            top="0"
            left="0"
            cursor={'pointer'}
            className="shadow"
          ></Box>
        </Link>
        {movie.poster_path !== null ? (
          <Image
            w={'100%'}
            h={'100%'}
            objectFit={'cover'}
            src={'https://image.tmdb.org/t/p/w300' + movie.poster_path}
          />
        ) : (
          <Image w={'100%'} h={'100%'} objectFit={'cover'} src={defaultImage} />
        )}
        <Text mb={'20px'} color={'white'} fontSize="lg">
          {movie.title}
        </Text>
      </motion.div>
    </Box>
  );
}

export default Movie;
