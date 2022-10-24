import React, { useState, useContext } from 'react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import MovieContext from '../MovieContext';
import { Box, Text, Image, Grid } from '@chakra-ui/react';

import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import defaultImage from '../assets/no-image.jpg';

const Details = () => {
  let params = useParams();
  let navigate = useNavigate();

  const { radioValue } = useContext(MovieContext);

  const [movie, setMovie] = useState();

  const fetchMovie = async (id) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=b454aa11fb4b5fc5b515d2e80a898a1c&language=${radioValue}`
    );
    const movie = await data.json();
    setMovie(movie);
    console.log(data);
  };

  useEffect(() => {
    fetchMovie(params.movieId);
  }, [movie, radioValue]);

  return (
    <>
      <Box
        w={'55px'}
        h={'55px'}
        pos="fixed"
        top={'75px'}
        bg="black"
        borderRadius={'15px'}
        display="flex"
        flexDir={'column'}
        alignItems="center"
        justifyContent={'center'}
        onClick={() => navigate(-1)}
        cursor={'pointer'}
      >
        <ArrowBackIcon
          w="5"
          h="5"
          color="grey"
          _hover={{
            color: 'white',
          }}
          _active={{
            color: 'white',
          }}
        />
      </Box>
      {movie && (
        <Grid
          backgroundColor={'gray.700'}
          height={'100vh'}
          gridAutoFlow="column"
        >
          {movie.poster_path !== null ? (
            <Image
              pt="150px"
              pl="50px"
              src={'https://image.tmdb.org/t/p/w500' + movie.poster_path}
            />
          ) : (
            <Image src={defaultImage} />
          )}

          <Grid height={'fit-content'} mt="150px" pl={'25px'} gap="25px">
            <Text color={'white'} fontSize={'3xl'}>
              {movie.title}
            </Text>
            <Text color={'white'}>{movie.overview}</Text>
            <Text color={'white'}>Duration: {movie.runtime} Minute</Text>
            <Text color={'white'}>
              Genre:{' '}
              {movie.genres.map((genre) => (
                <span>{genre.name} </span>
              ))}{' '}
            </Text>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default Details;
