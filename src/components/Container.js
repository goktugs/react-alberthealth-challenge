import React from 'react';
import Sidebar from './Sidebar';
import MoviesList from './MoviesList';
import { Flex } from '@chakra-ui/react';

const Container = () => {
  return (
    <Flex backgroundColor={'gray.700'}>
      <Sidebar />
      <MoviesList />
    </Flex>
  );
};

export default Container;
